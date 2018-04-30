// ======================================
// Document Ready
// ======================================
$(document).ready(function() {

  // ======================================
  // Pokemon Input Autocomplete and Selection Process
  // ======================================
  $("#pokemonSelect").autocomplete({
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
  }).change();

  // ======================================
  // When a selection is made, return selected Pokemon Family
  // ======================================
  $('#pokemonSelect').on('autocompleteselect', function(e, selection) {
    selectedPokemon = matchElements(selection.item.value);
    $('#userChoice').attr('data-selection', selectedPokemon.species);
    $('#userChoice').attr('data-genus', selectedPokemon.genus);
    populateGenusArr(selectedPokemon);
    populateMenu(selectedPokemon, genusArr);
    return selectedPokemon;
  });

  // ======================================
  // Activate Avatars
  // ======================================
  activateAvatar($('#evolution0Storage'), $('.evolution0 .avatar'));
  activateAvatar($('#evolution1Storage'), $('.evolution1 .avatar'));
  activateAvatar($('#evolution2Storage'), $('.evolution2 .avatar'));

  $('.number-storage').on('change', function(selectedPokemon) {
    console.log(getPokemonHeld());
    calculateEvolution(selectedPokemon, genusArr);
  });

  $('#candyNumber').on('change, keyup', function() {
    var candy = parseInt($('#candyNumber').val(), 10);
    $('#userChoice').attr('data-candy', candy);
    calculateEvolution(selectedPokemon, genusArr);
    return candy;
  });

  removePokemon();
}); // Document Ready End
