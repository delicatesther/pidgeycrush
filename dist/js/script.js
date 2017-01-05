$(document).ready(function() {

  //--------------------------------------
  //        Autocomplete field
  //--------------------------------------
  $("#selectPokemon").autocomplete({
    source: pokemonArray.sort(SortByName),
    autoFocus: true,
    minLength: 1
  });
  //Sort Pokémon Array in select alphabetically
  function SortByName(a, b) {
    var aName = a.species.toLowerCase();
    var bName = b.species.toLowerCase();
    return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
  }
  // Search only from the beginning of the string
  $.ui.autocomplete.filter = function(array, term) {
    var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(term), "i");
    return $.grep(array, function(value) {
      return matcher.test(value.label || value.value || value);
    });
  }

  //--------------------------------------
  //        Colour Scheme
  //--------------------------------------
  colourScheme = function() {
    $('#pidgeycrushLogo').on('click', function() {
      $('body').removeClass('instinct valor mystic');
    });
    $('#mysticLogo').on('click', function() {
      $('body').removeClass('instinct valor').addClass('mystic');
    });
    $('#instinctLogo').on('click', function() {
      $('body').removeClass('mystic valor').addClass('instinct');
    });
    $('#valorLogo').on('click', function() {
      $('body').removeClass('mystic instinct').addClass('valor');
    });
  }

  //--------------------------------------
  //        Pokémon Selector
  //--------------------------------------

  pokemonSelector = function(){
    $('#selectPokemon').on('autocompleteselect', function(e, chosenPokemon) {
      var chosenPokemon = chosenPokemon.item;
      var pokemonEvolution = chosenPokemon.evolution;
      var pokemonGenus = chosenPokemon.genus;
      var pokemonNumber =  $('#pokemonNumber');
      var pokemonCandy =  $('#pokemonCandy');

      $('.pokemonSpecies').html(chosenPokemon.species);
      $('.pokemonEvolution').html(chosenPokemon.evolution);
      $('.pokemonGenus').html(chosenPokemon.genus);

      //Add Pokémon avatar
      pokemonAvatar = function() {
        $("#pokemonFields").append(`<li class="pokemon-avatar ${chosenPokemon.resourceName}"></li>`);
        $('#pokemonFields li').attr('id', function(i) {
          return 'pokemon' + (i + 1);
        });
      };
      resetForm = function() {
        $("#pokemonFields").html('');
        $('#selectPokemon').val('');
        pokemonNumber.val('1');
        pokemonCandy.val('0');
        $("#firstEvolve").prop("checked", false);
        $('#choice, #description, #sadFace, #furtherOptions, #bonus, .details-icon').removeClass('active');
        return false;
      };

      resetForm();
      $('#choice').addClass('active');
      pokemonAvatar();

      //Generate Pokémon avatars based number selection in inputfield
      pokemonNumber.on('keyup change', function() {
        var numberPokemon = parseInt($("#pokemonNumber").val(), 10);
        //Reset avatars from previous selection
        $("#pokemonFields").html("");
        //Number input loop
        for (i = 1; i <= numberPokemon; i++) {
          pokemonAvatar();
        }
      });

      //Remove Pokémon avatar if value reaches 0
      if ($("#pokemonNumber").val() === 0) {
        resetForm();
      }

      //Add bonus bubble
      $('#firstEvolve').change(function(){
        if($(this).is(':checked')) {
          $('#bonus').addClass('active');
        } else {
          $('#bonus').removeClass('active');
        }
      });

      //Evolution is not possible on end state
      if (!("evolution" in chosenPokemon)) {
        $('#sadFace').addClass('active');
      }
      else {
        $('#furtherOptions').addClass('active');
      }


      //--------------------------------------
      //        Evolution
      //--------------------------------------

      addPokemonSpecies = function() {
        var tableInner = $('#evolutionTable').find('tbody');

        var numPokemon = parseInt(pokemonNumber.val(), 10);

        var numCandy = parseInt($('#pokemonCandy').val(), 10);

        var candyNeeded = numPokemon * chosenPokemon.candy; //say for 2 pidgey that's 24

        var candyNeededvsInventory = Math.floor(numCandy / chosenPokemon.candy);
        // console.log(candyNeededvsInventory);
        var evolutionsPossible = Math.min(candyNeededvsInventory, numPokemon);
        var xpGained = evolutionsPossible * 500;
        var bonusAmount = 0;
        if($('#firstEvolve').is(':checked')) {
          bonusAmount = 500;
        }
        //Check wether there's a new evolution taking place
        if ($('#firstEvolve').is(':checked') && evolutionsPossible >= 1) {
          xpGained = evolutionsPossible * 500 + 500;
        }

        var rowTemplate =
        `<tr>
        <td class="evolutionsPossible">${evolutionsPossible}</td>
        <td><li class="pokemon-avatar ${chosenPokemon.resourceName}"></li></td>
        <td class="xpGained">${xpGained}</td>
        <td class="wide detailsCell">
        <div class="details-icon circular-button"><span>i</span></div>
        <span class="details">
        Candy inventory: <span>${numCandy}</span><br/>
        Number of <span class="pokemon-species">${chosenPokemon.resourceName}</span>: <span>${numPokemon}</span><br/>
        Candy needed for all Pokémon: <span>${candyNeeded}</span><br/>
        <hr>
        Evolutions possible: <span>${evolutionsPossible}</span><br/>
        Bonus XP added: <span>${bonusAmount}</span><br/>
        Total XP gained: <span>${xpGained}</span><br/>
        </span>
        </td>
        <td>
        <div class="circular-button removeRow"><span>&#215;</span></div>
        </td>
        </tr>`;
        // Candy left: <span>${candyReturn}</span>

        tableInner.append(rowTemplate);

        //Calculate # evolutions possible and XP gained
        function calculateSum() {
          var sum1 = 0;
          var sum2 = 0;

          $('.evolutionsPossible').each(function() {
            sum1 += parseInt($(this).html());
          });
          $('.xpGained').each(function() {
            sum2 += parseInt($(this).html());
          });

          //Add calculations to Evolution Table
          $('#total-1').html(sum1);
          $('#total-2').html(sum2);
          $('#total-3').html(sum2 * 2);
        }
        calculateSum();

        //Redo calculation if user removes a row from the Evolution table
        $(document).on('click', $('#removeRow'), function() {
          calculateSum();
        });
        resetForm();
      }
    });
  };

  initEvents = function() {
    $('#evolutionTable').on('click', '.details-icon', function(e){
      $(this).toggleClass('active');
    });

    // remove row on click
    $('#evolutionTable').on('click', '.removeRow', function() {
      $(this).closest('tr').remove();
    });
  }

  resetTable = function() {
    $('#evolutionTable').find('tbody').html('');
  }

  pokemonSelector();
  initEvents();
});// End script
