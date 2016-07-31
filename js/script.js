$(document).ready(function(){
  $("#pokemonSelect").autocomplete({
    source: pokemonArray,
    autoFocus: true,
    minLength: 2,
  });

  // $('#pokemonSelect').on('change', function () {
  //       $('#pokemon-desc').html('You selected: ' + this.value);
  //   }).change();
    $('#pokemonSelect').on('autocompleteselect', function (e, ui) {
        $('#poke-img').addClass(ui.item.value);

        if(ui.item.evolve != true) {
          $('#pokemon-desc').html('You selected: ' + ui.item.value + '. Unfortunately ' + ui.item.value + ' does not evolve. :(');
          $('#pokemon-candy').remove();
        }
        else {
          $('#pokemon-desc').html('You selected: ' + ui.item.value).addClass(ui.item.value);
          $('#pokemon-desc').append('<p>Candy needed for evolution: ' + ui.item.candy + '</p>');
      }
    });
});
