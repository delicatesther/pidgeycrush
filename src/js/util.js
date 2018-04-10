// ======================================
// Util
// ======================================

 getMapKeyValue = function(obj, key) {
  if (obj.hasOwnProperty(key))
  return obj[key];
  throw new Error("Invalid map key.");
}

getMapKeyArray = function(key){
  var array = [];
  for(var i = 0; i < (pokemonJson.pokemon).length; i++) {
    var value = getMapKeyValue(pokemon[i], key);
    array.push(value);
  }
  return array;
}

// Match selected value with object in array
matchElements = function (el, selectedPokemon) {
  var pokemonSpeciesArray = getMapKeyArray("species");
  for(var i = 0; i < pokemonSpeciesArray.length; i++) {
    if(selection == pokemonSpeciesArray[i]) {
      selectedPokemon = pokemon[i];
    }
  }
  console.table(selectedPokemon);
  return selectedPokemon;
}

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
$('#resetPokemonSelect').on('click', function(e) { e.preventDefault(); resetForm(); });
// Reset  table
$('#resetTable').on('click', function(e) { e.preventDefault(); resetTable(); });


// ======================================
//  Pokemon Selection Tool Functions
// ======================================

// Remove egg animation time warning
removeEggMessage = function(selectedPokemon) {
  $('#eggMessage').remove();
}

//Add Pokémon avatar
pokemonAvatar = function(selectedPokemon) {
  $("#pokemonFields").append('<li class="pokemon-avatar sprite-pokemon' + selectedPokemon.index + '">' + '</li>');
  $('#poke-img').addClass(selectedPokemon.index);
  $('#poke-img').addClass('pokemon-avatar');
  $('#pokemonFields li').attr('id', function(i) {
    return 'pokemon' + (i + 1);
  });
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
