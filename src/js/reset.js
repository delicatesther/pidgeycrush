// ======================================
//  Reset Forms
// ======================================
resetForm = function() {
  $('#pokemonSelect, #pokemonNumber').val('');
  $('#pokemon-desc, .number-input__wrapper, .pokemon-avatar__wrapper li, .candy-input__wrapper, #candyNumber, #pokemonChoice h2, #addPokemonSpecies, #resetPokemonSelect, .evolution-bonus').remove();
  return false;
};

resetTable = function() {
  $('#finalDestination').find('tbody').html('');
};

// Reset field
$('#resetPokemonSelect').on('click', function(e) {
  e.preventDefault();
  resetForm();
});

// Reset  table
$('#resetTable').on('click', function(e) {
  e.preventDefault();
  resetTable();
});
