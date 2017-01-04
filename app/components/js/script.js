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

      showDetails = function(){
        $('#showDetails').on('click', function(){
          $('.details').toggleClass('active');
          $('#detailsIcon').toggleClass('active');
        });
        $('#detailsIcon').on('click', function(){
          $('.details').toggleClass('active');
          $('#detailsIcon').toggleClass('active');
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
              $("#firstEvolve").prop("checked", false);
              $('#choice, #description, #sadFace, #furtherOptions, #bonus').removeClass('active');
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

          var candyNeeded = numPokemon * chosenPokemon.candy;
          var candyNeededvsInventory = Math.floor(numCandy / chosenPokemon.candy);
          var evolutionsPossible = Math.min(candyNeededvsInventory, numPokemon);
          var xpGained = evolutionsPossible * 500;

          //Check wether there's a new evolution taking place
          if ($('#firstEvolve').is(':checked') && evolutionsPossible >= 1) {
            xpGained = evolutionsPossible * 500 + 500;
          }

          var rowTemplate =
          `<tr>
            <td>${evolutionsPossible}</td>
            <td><li class="pokemon-avatar ${chosenPokemon.resourceName}"></li></td>
            <td>${xpGained}</td>
            <td>
              <a id="detailsIcon" class="circular-button">i</a>
              <span class="details">
                Candy inventory: <span>${numCandy}</span><br/>
                Number of Pokémon: <span>${numPokemon}</span><br/>
                Candy needed: <span>${candyNeeded}</span><br/>
                <hr>
                Evolutions possible: <span>${evolutionsPossible}</span>
              </span>
            </td>
            <td>
              <a id="removeRow" class="circular-button">&#215;</a>
            </td>
          </tr>`;


          tableInner.append(rowTemplate);

          // add unique id to each row -- do I need this?
          $('#evolutionTable tbody tr').attr('id', function(i) {
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

          // resetForm();
        }

    });





    };
    pokemonSelector();



});// End script
