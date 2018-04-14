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

// Match selected value with object in array
matchElements = function (el, selectedPokemon) {
  var pokemonSpeciesArray = getMapKeyArray("species");
  for(var i = 0; i < pokemonSpeciesArray.length; i++) {
    if(selection == pokemonSpeciesArray[i]) {
      selectedPokemon = pokemon[i];
    }
  }
  // console.table(selectedPokemon);
  return selectedPokemon;
}

safeGet = function(obj, props, defaultValue) {
  try {
    return props.split('.').reduce(function(obj, p) {
      return obj[p];
    }, obj);
  } catch(e) {
    return defaultValue
  }
}

// sortArrayCandy = function(a, b) {
//   var aCandy = a.candy;
//   var bCandy = b.candy;
//   return ((aCandy < bCandy) ? -1 : ((aCandy > bCandy) ? 1 : 0));
//   genusArr.sort(function(a, b, value){
//     var aCandy = a.candy;
//     var bCandy = b.candy;
//     if(value === undefined) {
//       // value = true;
//       // value = (a.candy+ b.candy);
//       // return ((aCandy < bCandy) ? -1 : ((aCandy > bCandy) ? 1 : 0));
//       return true;
//     }
//     else {
//       return ((aCandy < bCandy) ? -1 : ((aCandy > bCandy) ? 1 : 0));
//     }
//   });
//   console.table(genusArr);
// }

// Match selected value with object in array
matchGenus = function (genus, index) {
  tempArr = [];

  for(var i = 0; i < pokemon.length; i++) {
    // console.log(pokemon[i].candy);
    if(pokemon[i].genus == genus) {
      tempArr.push(pokemon[i]);
    }
  }

  // sort(genusArr.candy, genusArr);
  // for('candy' in genusArr) {
  //   console.log(Object.values('candy', genusArr));
  // }
  genusArr = $.makeArray(tempArr);
  // console.table(genusArr);
  console.table(genusArr);
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

resetForm = function() {
  $('#pokemonSelect, #pokemonNumber').val('');
  $('#pokemon-desc, .number-input__wrapper, .pokemon-avatar__wrapper li, #pokemonChoice h2, #addPokemonSpecies, #resetPokemonSelect, .evolution-bonus').remove();
  $('.avatar').attr('class', 'avatar');
  return false;
};

resetTable = function() {
  $('#finalDestination').find('tbody').html('');
};

// Reset field
$('#resetPokemonSelect').on('click', function(e) { e.preventDefault(); resetForm(); });
// Reset  table
$('#resetTable').on('click', function(e) { e.preventDefault(); resetTable(); });
