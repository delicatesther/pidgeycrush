// ======================================
// Document Ready
// ======================================
$(document).ready(function() {

  // ======================================
  // Pokemon Input Autocomplete and Selection Process
  // ======================================
  $("#pokemonSelect").autocomplete({
    //Grab data from Pokémon Array
    autoFocus: true,
    minLength: 1,
    source: getMapKeyArray("species"),
    select: function (event, ui) {
      var obj = {};
      obj[0] = $(this).val(ui.item.id);
      obj[1] = $(this).val(ui.item.value);
      selection = obj[1][0].value;
      return selection;
    }
  });

  // Overrides the default autocomplete filter function to search only from the beginning of the string
  $.ui.autocomplete.filter = function(array, term) {
    var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(term), "i");
    return $.grep(array, function(value) {
      return matcher.test(value.label || value.value || value);
    });
  };

  //Sort Pokémon Array in select alphabetically
  function SortByName(a, b) {
    var aName = a.species.toLowerCase();
    var bName = b.species.toLowerCase();
    return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
  };

  //Pokémon Selector
  $('#pokemonSelect').on('change', function(e) {
    selectedPokemon = matchElements(this);
    console.log(selectedPokemon.species);

    //Remove former selection
    $('#pokemon-desc, #addPokemonSpecies').remove();
    $("#pokemonFields").html('');

    //Evolution is not possible on end states
    if (selectedPokemon.evolution == null) {
      resetForm();
      pokemonAvatar(selectedPokemon); //Generate first Pokémon avatar

      $('#pokemonChoice').prepend('<h2>You chose <span class="species-instance">' + selectedPokemon.species + '! </span></h2><p id="pokemon-desc">Unfortunately <span class="species-instance">' + selectedPokemon.species + '</span> does not evolve. :(</p>'); //Inform user
      $('#pokemonSelect').val('');

      $('.buttons').append('<a id="resetPokemonSelect" href="javascript:void(0)" onclick="resetForm();">Reset Selection</a>')
      return false;

    }
    //Add multiple Pokémon of one species
    else {
      resetForm();
      //Show first Pokémon avatar
      pokemonAvatar(selectedPokemon);

      //Add Pokémon choice + inputfields
      $('#pokemonChoice').prepend('<p id="pokemon-desc"><h2>You chose <span class="species-instance">' + selectedPokemon.species + '!&nbsp;</span></h2>');


      $('.ui-widget').append(pokemonNumberInput(selectedPokemon)).append(pokemonCandyInput(selectedPokemon)).append(pokemonFirstEvolution(selectedPokemon));
      //Generate buttons to reset selectionfield or to add Pokémon to evolution table
      $('.buttons').append('<a id="resetPokemonSelect" href="javascript:void(0)" onclick="resetForm();">Reset Selection</a><a id="addPokemonSpecies" href="javascript:void(0)" onclick="addPokemonSpecies(selectedPokemon);">Add Pokémon to Table</a>');
    }

    //Generate Pokémon avatars based number selection in inputfield
    $('#pokemonNumber').on('keyup change', function() {
      var $numberPokemon = parseInt($("input[name='pokemonNumber']").val(), 10);
      //Reset avatars from previous selection
      $("#pokemonFields").html("");
      //Number input loop
      for (i = 1; i <= $numberPokemon; i++) {
        pokemonAvatar(selectedPokemon);
      }
    });

    //Remove Pokémon avatar if value reaches 0
    if ($("input[name='pokemonNumber']").val() === 0) {
      resetForm();
    }


    return selectedPokemon;
  });

  //Add bonus bubble
  $('#firstEvolve').on("change", function(){
    if($(this).is(':checked')) {
      $('.bonus').addClass('bonus-animated');
    } else {
      $('.bonus').removeClass('bonus-animated').css('opacity', 0);
    }
  });

  // Add Pokémon to Evolution table
  addPokemonSpecies = function(selectedPokemon) {

    var tableInner = $('#finalDestination').find('tbody');
    var numberOfPokemon = parseInt($('#pokemonNumber').val(), 10);
    var numberOfCandyHeld = parseInt($('#candyNumber').val(), 10);
    var candyNeeded = numberOfPokemon * selectedPokemon.candy;
    var difCandyNeededHeld = Math.floor(numberOfCandyHeld / selectedPokemon.candy);
    var evolutionsPossible = Math.min(difCandyNeededHeld, numberOfPokemon);


    if (numberOfPokemon === selectedPokemon.candy + 1) {
      $('#metaEvolution').css('display', 'block');
      $('#metaNumCandy').append(selectedPokemon.candy + ' <span class="species-instance">' + selectedPokemon.species + '</span> candy');
      $('#metaEvolveState').append('');
    } else {
      $('#metaEvolution').css('display', 'none');
    }

    //Check wether there's a new evolution taking place
    if ($('#firstEvolve').is(':checked') && evolutionsPossible >= 1) {
      $xpGained = evolutionsPossible * 500 + 500;
    } else {
      $xpGained = evolutionsPossible * 500;
    }

    var rowTemplate = '<tr><td>' + numberOfPokemon + '</td><td class="pokemon-avatar sprite-pokemon' + selectedPokemon.index + '"></td>' + '</td><td class="wide">' + candyNeeded + '</td><td class="wide">' + numberOfCandyHeld + '</td><td class="evolvesPossible">' + evolutionsPossible + '</td><td class="xpGained">' + $xpGained + '</td><td><a id="removeRow" class="circular-button">&#215;</a></td>"</tr>';

    tableInner.append(rowTemplate);

    // add unique id to each row -- do I need this?
    $('#finalDestination tbody tr').attr('id', function(i) {
      return 'pokemonRow' + (i + 1);
    });

    // remove row on click
    $(document).on('click', '#removeRow', function() {
      $(this).closest('tr').remove();
    });

    //Calculate # evolutions possible and XP gained
    function calculateSum() {
      var sum1 = 0;
      var sum2 = 0;

      $('.evolvesPossible').each(function() {
        sum1 += parseInt($(this).html());

        //Warn user that roughly 60 evolutions are possible within one luck egg activation
        if (sum1 >= 60 ) {
          $('#eggMessage').html('');
          $('#eggMessage').append('<p class="egg-message">You can only evolve (roughly) 60 Pokémon during one Lucky Egg activation. <br>You may want to get another egg!</p> <a id="removeEggMessage" href="javascript:void(0)" onclick="removeEggMessage();">Got it!</a>');
        } else if (sum1 < 60) {
          $('#eggMessage').html('');
        }
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

}); // Document Ready End
