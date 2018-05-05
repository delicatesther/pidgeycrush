// ======================================
// Util
// ======================================

// ======================================
// Get JSON data and parse it towards Autocomplete
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

matchElements = function (el, selectedPokemon) {
  var pokemonSpeciesArray = getMapKeyArray("species");
  for(var i = 0; i < pokemonSpeciesArray.length; i++) {
    if(el == pokemonSpeciesArray[i]) {
      selectedPokemon = pokemon[i];
    }
  }
  return selectedPokemon;
}

sort = function (prop, arr) {
  prop = prop.split('.');
  var len = prop.length;
  arr.sort(function (a, b) {
    var i = 0;
    var key;
    while( i < len ) {
      key = prop[i];
      if(!a.hasOwnProperty(key)) return 1;
      if(!b.hasOwnProperty(key)) return -1;
      a = a[key];
      b = b[key];
      i++;
    }
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  });
  return arr;
};

// Match selected value with object in array
matchGenus = function (genus, index) {
  genusArr = [];
  for(var i = 0; i < pokemon.length; i++) {
    if(pokemon[i].genus == genus) {
      genusArr.push(pokemon[i]);
    }
  }
  sort('candy', genusArr);
  return genusArr;
}

populateGenusArr = function(selectedPokemon, genusArr) {
  genusArr = matchGenus(selectedPokemon.genus);
  return genusArr;
}

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


// ======================================
//  Reset Forms
// ======================================
removePokemon = function() {
  $('.pokemon-delete').on('click', function(){
    if( $(this).parent('.gen').hasClass('active') ) {
      $(this).parent('.gen').removeClass('active');
    }
    $(this).parent('.gen').addClass('hide');
    $(this).parent('.gen').find('.avatar').attr('class', 'avatar');
    $(this).parent('.gen').find('h3').html('');
    $(this).parent('.gen').find('.number-storage').val(0);
  });
  if(!$('.pokemon-delete').length) {
    resetForm();
  }
}

resetForm = function() {
  $('#pokemonSelect, #pokemonNumber').val('');
  $('#pokemon-desc, .number-input__wrapper, .pokemon-avatar__wrapper li, #addPokemonSpecies, .evolution-bonus').remove();
  $('#pokemonChoice').removeClass('active');
  $('#pokemonChoice .species-instance').html('');
  $('#familyTree').removeClass('active');
  $('#noEvolution').removeClass('active');
  $('#familyTree .avatar').attr('class', 'avatar');

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
//  Tool
// ======================================

activateAvatar = function(target) {
  target.toggleClass('active');
}

displayPokemonChoice = function(selectedPokemon) {
  $('#pokemonChoice').addClass('active');
  $('#pokemonChoice .species-instance').html(selectedPokemon.species);
}

populateMenu = function(selectedPokemon, genusArr) {
  $('.gen').removeClass('hide');
  if ( genusArr.length > 1 ) {
    resetForm();
    $('#familyTree').addClass('active');
    if( genusArr.length > 2 ) {
      $('.evolution2').addClass('active');
    } else {
      $('.evolution2').removeClass('active');
    }
    for(var j = 0; j < genusArr.length; j++) {
      gen = $('.gen');
      gen.eq(j).attr('data-species', genusArr[j].species.toLowerCase());
      genAvatar = $('.gen .avatar');
      genSpecies = $('.gen h3');
      genAvatar.eq(j).addClass('sprite-pokemon' + genusArr[j].pokemonIndex);
      genSpecies.eq(j).html(genusArr[j].species);
    }
  } else {
    resetForm();
    $('#noEvolution').addClass('active');
    $('#noEvolution .avatar').addClass('sprite-pokemon' + selectedPokemon.pokemonIndex);
    $('#noEvolution .species-instance').html(selectedPokemon.species);
    $('#pokemonSelect').val('');
    return false;
  }
}

quickAdd = function(el) {
  event.stopPropagation();
  el = $(el);
  var evolutionTable = $('#finalDestination .data-container');
    evolutionTable.append('<div class="pokemon-row"> <div><span>'+ selectedPokemon.pokemonIndex +'</span></div><div class="species"><span>' + selectedPokemon.species +'</span><div class="image-container"><div class="avatar sprite-pokemon'+ selectedPokemon.pokemonIndex + '"></div></div> </div><div><span>???</span></div><div><span>???</span></div><div><a href="javascript:;" onclick="removeRow(this)"  class="delete"></a></div></div>');
}

removeRow = function(el) {
  $(el).parents('.pokemon-row').remove();
}
