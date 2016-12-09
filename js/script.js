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
      //        Pokémon Selector
      //--------------------------------------
      var chosenPokemon;

      pokemonSelector = function(){
        $('#selectPokemon').on('autocompleteselect', function(e, chosenPokemon) {
          chosenPokemon = chosenPokemon.item;

          //Add Pokémon avatar
          pokemonAvatar = function() {
              $("#pokemonFields").append('<li class="pokemon-avatar ' + chosenPokemon.resourceName + '">' + '</li>');
              $('#pokemonFields li').attr('id', function(i) {
                  return 'pokemon' + (i + 1);
              });
          };
          resetForm = function() {
              $("#pokemonFields").html('');
              $('#selectPokemon').val('');
              $('#description, #sadFace').removeClass('active');
              return false;
          };

          resetForm();
          $('#choice').addClass('active');
          $('.pokemonSpecies').html(chosenPokemon.species);
          pokemonAvatar();

          if (!("evolution" in chosenPokemon)) {
              $('#sadFace').addClass('active');
          } //Evolution is not possible on end statesocal
      });
    };
    pokemonSelector();


});// End script
