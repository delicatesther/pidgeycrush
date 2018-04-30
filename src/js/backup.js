// ======================================
//  Pokemon Selection Tool Functions
// ======================================

// Remove egg animation time warning
removeEggMessage = function(selectedPokemon) {
  $('#eggMessage').remove();
}

// Generate checkbox to indicate a first evolution of the species
pokemonFirstEvolution = function(selectedPokemon) {
  $('.ui-widget').append('<div class="evolution-bonus"><span class="bonus">Adds<br>500 XP!</span><input type="checkbox" name="firstEvolve" id="firstEvolve"><label for="firstEvolve"></label><span>Is this the first time you evolve a <span class="species-instance">' + selectedPokemon.species + '</span>?</span></div>')
}


//Calculate # evolutions possible and XP gained
calculateSum = function(selectedPokemon) {
  var sum1 = 0;
  var sum2 = 0;

  $('.evolvesPossible').each(function() {
    sum1 += parseInt($(this).html());

    //Warn user that roughly 60 evolutions are possible within one luck egg activation
    if (sum1 >= 60 ) {
      $('#eggMessage').html('');
      $('#eggMessage').append('<p class="egg-message">You can only evolve (roughly) 60 Pokémon during one Lucky Egg activation. <br>You may want to get another egg!</p> <a id="removeEggMessage" href="javascript:void(0)" onclick="removeEggMessage();">Got it!</a>');
    } else if (sum1 < 60) {
      $('#eggMessage').html('');
    }
  });
  $('.xpGained').each(function() {
    sum2 += parseInt($(this).html());
  });

  //Add calculations to Evolution Table
  $('#total-1').html(sum1);
  $('#total-2').html(sum2);
  $('#total-3').html(sum2 * 2);
}

// Add Pokémon to Evolution table
addPokemonSpecies = function(selectedPokemon) {
  selectedPokemon = matchElements($('body').attr('data-selection'));

  var tableInner = $('#finalDestination').find('tbody');

  var numberOfPokemon = parseInt($('#pokemonNumber').val(), 10);
  var numberOfCandyHeld = parseInt($('#candyNumber').val(), 10);
  var candyNeeded = numberOfPokemon * selectedPokemon.candy;
  var difCandyNeededHeld = Math.floor(numberOfCandyHeld / selectedPokemon.candy);
  var evolutionsPossible = Math.min(difCandyNeededHeld, numberOfPokemon);


  if (numberOfPokemon === selectedPokemon.candy + 1) {
    $('#metaEvolution').css('display', 'block');
    $('#metaNumCandy').append(selectedPokemon.candy + ' <span class="species-instance">' + selectedPokemon.species + '</span> candy');
    $('#metaEvolveState').append('');
  } else {
    $('#metaEvolution').css('display', 'none');
  }

  //Check wether there's a new evolution taking place
  if ($('#firstEvolve').is(':checked') && evolutionsPossible >= 1) {
    $xpGained = evolutionsPossible * 500 + 500;
  } else {
    $xpGained = evolutionsPossible * 500;
  }

  var rowTemplate = '<tr><td>' + numberOfPokemon + '</td><td class="pokemon-avatar sprite-pokemon' + selectedPokemon.index + '"></td>' + '</td><td class="wide">' + candyNeeded + '</td><td class="wide">' + numberOfCandyHeld + '</td><td class="evolvesPossible">' + evolutionsPossible + '</td><td class="xpGained">' + $xpGained + '</td><td><a id="removeRow" class="circular-button">&#215;</a></td>"</tr>';

  tableInner.append(rowTemplate);
  calculateSum(selectedPokemon);
  resetForm();
}

getPokemonFamily = function(selectedPokemon) {
  matchGenus(selectedPokemon);

}

calculateOptions = function(selectedPokemon, inventory) {
  inventory = parseInt($('#candyNumber').val(), 10);
  var genus = selectedPokemon.genus;
  if(inventory > 0) {

  }
}

// remove row on click
$(document).on('click', '#removeRow', function() {
  $(this).closest('tr').remove();
});

//Redo calculation if user removes a row from the Evolution table
$(document).on('click', $('#removeRow'), function(selectedPokemon) {
  calculateSum(selectedPokemon);
});
