
$(document).ready(function(){

  $("#pokemonSelect").autocomplete({
    //Grab data from Pokémon Array
    source: pokemonArray.sort(SortByName),
    autoFocus: true,
    minLength: 1,
  });

  //Pokémon Selector
  $('#pokemonSelect').on('autocompleteselect', function (e, ui) {
    $('#pokemonNumber').attr('value', 1);
    $("#pokemonFields").append('<div id="pokemon1" class="pokemon-ava ' + ui.item.resourceName + '">' + '<span class="pokemon-delete"></span></div>');
    $('#poke-img').removeClass();
    $('#poke-img').addClass(ui.item.resourceName);
    $('#poke-img').addClass('pokemon-ava');

    var $numberPokemon = parseInt($("input[name='pokemonNumber']").val());
    var totalCandyRequired = parseInt(ui.item.candy * $numberPokemon);

    if(ui.item.evolve != true) {
      $('#pokemon-desc').html('You chose <span class="species-instance">' + ui.item.value + '! </span> Unfortunately <span class="species-instance">' + ui.item.value + '</span> does not evolve. :(');
      $('#pokemon-candy').remove();
    }
    else {
      $('#pokemon-desc').html('You chose <span class="species-instance">' + ui.item.value + '! </span>');
      $('#pokemon-desc').append('<p>Candy needed for evolution: ' + totalCandyRequired + '</p>');
    }

    $('#pokemonNumber').keyup(function() {
      var $numberPokemon = parseInt($("input[name='pokemonNumber']").val());

      $("#pokemonFields").html("");
      $numberPokemon -= 1;
      for (i = 0; i <= $numberPokemon; i++) {
        $("#pokemonFields").append('<div id="pokemon' + i + '" class="pokemon-ava ' + ui.item.resourceName + '">' + '<span class="pokemon-delete"></span></div>');
      }

    });
    $(document).on('click','.pokemon-delete',function() {
      $(this).closest(".pokemon-ava").remove();
      var $numberPokemon = parseInt($("input[name='pokemonNumber']").val());
      var $newVal = $numberPokemon -1;
      $("input[name='pokemonNumber']").val($newVal);
      if($newVal < 1){
        $('#pokemon-desc').remove();
        $('#pokemonSelect').val('');
      }
    });
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
});
