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
    displayPokemonChoice(selectedPokemon);

    $('.gen').each(function(){
      console.log($(this));
      if( $(this).data('species') == selectedPokemon.species.toLowerCase() ) {
        $(this).find('.avatar').addClass('active');
        $(this).find('.number-storage').val(function(i, oldval){
          return ++oldval;
        })
      }
    });
    return selectedPokemon;
  });

  // ======================================
  // Activate Avatars
  // ======================================
  $('input[data-inventory="pokemon-held"]').each(function(){
    $(this).on('keyup change', function() {
      var num = parseInt($(this).val(), 10);
      var target = $(this).parents('.gen').find('.avatar');
      console.log(target);
      if(num <= 0) {
        target.removeClass('active');
      } else {
        target.addClass('active');
      }
    });
  });

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
