$(document).ready(function(){

  $("#pokemonSelect").autocomplete({
    //Grab data from Pokémon Array
    source: pokemonArray.sort(SortByName),
    autoFocus: true,
    minLength: 1,
  });
    //Sort Pokémon Array in select alphabetically
    function SortByName(a, b) {
      var aName = a.species.toLowerCase();
      var bName = b.species.toLowerCase();
      return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
    }
    // Overrides the default autocomplete filter function to search only from the beginning of the string
    $.ui.autocomplete.filter = function (array, term) {
      var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(term), "i");
      return $.grep(array, function (value) {
        return matcher.test(value.label || value.value || value);
      });
    };

  //Pokémon Selector
  $('#pokemonSelect').on('autocompleteselect', function (e, ui) {

    //Remove former selection
    $('#pokemon-desc').remove();
    $("#pokemonFields").html('');

    //Evolution is not possible on end states
    if(ui.item.evolve != true) {
      //Generate first Pokémon avatar, w/o close button
      $("#pokemonFields").append('<li id="pokemon1" class="pokemon-avatar ' + ui.item.resourceName + '">' + '</li>');
      $('#poke-img').addClass(ui.item.resourceName);
      $('#poke-img').addClass('pokemon-avatar');

      //Remove number selection if it's there
      $("input[name='pokemonNumber']").remove();
      $("label[for='pokemonNumber']").remove();

      //Inform user
      $('.ui-widget').append('<p id="pokemon-desc">You chose <span class="species-instance">' + ui.item.value + '! </span> Unfortunately <span class="species-instance">' + ui.item.value + '</span> does not evolve. :( </p>');
      $(this).val(''); return false;
    }

    //Add multiple Pokémon of one species
    else {

      //Generate first Pokémon avatar, incl. close button
      $("#pokemonFields").append('<li id="pokemon1" class="pokemon-avatar ' + ui.item.resourceName + '">' + '<span class="pokemon-delete"></span></li>');
      $('#poke-img').addClass(ui.item.resourceName);
      $('#poke-img').addClass('pokemon-avatar');

      //Add choice + number input
      $('.ui-widget').append('<p id="pokemon-desc">You chose <span class="species-instance">' + ui.item.value + '!&nbsp;</span><div class="number-input__wrapper"><label for="pokemonNumber">Number of <span class="species-instance">' + ui.item.value + ':</span></label> <input id="pokemonNumber" type="number" name="pokemonNumber" class="pokemon-number" min="0" value="1"></div>');
    }

    // Add Pokémon to Table
    $('#addPokemonSpecies').on('click', function(e){
      e.preventDefault();
      var $tableInner = $('#finalDestination').find('tbody');

      $tableInner.append('<tr>').append('<td class="finNumPokemon"></td><td class="pokemon-avatar ' + ui.item.resourceName + '"></td>');


      var $numberPokemon = parseInt($("input[name='pokemonNumber']").val());
      $('.finNumPokemon').html($numberPokemon);


        $('#pokemon-desc').remove();
        $('#pokemonFields').html('');
        $('#pokemonSelect').val(''); return false;

    });

    //Generate Pokémon avatars based on number input
    $('#pokemonNumber').keyup(function() {
      var $numberPokemon = parseInt($("input[name='pokemonNumber']").val());

      //Reset avatars from previous selection
      $("#pokemonFields").html("");

      //Number input loop
      for (i = 1; i <= $numberPokemon; i++) {
        $("#pokemonFields").append('<li id="pokemon' + i + '" class="pokemon-avatar ' + ui.item.resourceName + '">' + '<span class="pokemon-delete"></span></li>');
      } // Reset value if input reaches 0
      if ( $("input[name='pokemonNumber']").val() < 1) {
        $('#pokemon-desc').remove();
        $('#pokemonFields').html('');
        $('#pokemonSelect').val(''); return false;
      }
    });

    //remove Pokémon on avatar close button and reset field data
    $(document).on('click','.pokemon-delete',function() {
      $(this).closest(".pokemon-avatar").remove();

      //Recalculate number input value on avatar removal
      var $numberPokemon = parseInt($("input[name='pokemonNumber']").val());
      var $newVal = $numberPokemon -=1;
      $("input[name='pokemonNumber']").val($newVal);

      //Remove Pokémon description if value reaches 0
      if ($newVal === 0){
        $('#pokemonSelect').val('');
        $('pokemonNumber').val('0');
        $('body').find($('#pokemon-desc')).remove();
      }
    });

    //Remove Pokémon description if value reaches 0
    if ( $("input[name='pokemonNumber']").val() === 0) {
      $('#pokemon-desc').remove();
      $('#pokemon-desc').remove();
    }
  });

  // Reset entire field
  $('#resetPokemonSelect').on('click', function(e){
    e.preventDefault();
    $('#pokemon-desc').remove();
    $('#pokemonFields').html('');
    $('#pokemonSelect').val(''); return false;
  });


});
