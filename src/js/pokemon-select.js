// ======================================
//  Pokemon Selection Tool Functions
// ======================================

// Remove egg animation time warning
removeEggMessage = function(selectedPokemon) {
  $('#eggMessage').remove();
}

//Add Pokémon avatar
pokemonAvatar = function(selectedPokemon) {
  $("#pokemonAvatars").append('<li class="sprite-pokemon' + selectedPokemon.index + '">' + '</li>');
};

// Generate inputfield to select number of Pokémon to add
pokemonNumberInput = function(selectedPokemon) {
  $('.ui-widget').append('<div class="number-input__wrapper"><label for="pokemonNumber">Number of <span class="species-instance">' + selectedPokemon.species + ':</span></label> <input id="pokemonNumber" type="number" name="pokemonNumber" class="pokemon-number" min="0" value="1"></div>');
}

// Generate inputfield to select Pokémon candy in inventory
pokemonCandyInput = function(selectedPokemon) {
  $('.ui-widget').append('<div class="candy-input__wrapper"><label for="candyNumber">Number of <span class="species-instance">' + selectedPokemon.genus + ' candy in inventory:</span></label> <input id="candyNumber" type="number" name="candyNumber" class="candy-number" min="0" value="1"></div>')
}

// Generate checkbox to indicate a first evolution of the species
pokemonFirstEvolution = function(selectedPokemon) {
  $('.ui-widget').append('<div class="evolution-bonus"><span class="bonus">Adds<br>500 XP!</span><input type="checkbox" name="firstEvolve" id="firstEvolve"><label for="firstEvolve"></label><span>Is this the first time you evolve a <span class="species-instance">' + selectedPokemon.species + '</span>?</span></div>')
}
