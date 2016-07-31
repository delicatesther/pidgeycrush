$(document).ready(function(){
  $("#pokemonSelect").autocomplete({
    source: pokemonArray,
    autoFocus: true,
    minLength: 1,
  });

  // $('#pokemonSelect').on('change', function () {
  //       $('#pokemon-desc').html('You chose: ' + this.value);
  //   }).change();
    $('#pokemonSelect').on('autocompleteselect', function (e, ui) {
        $('#poke-img').removeClass();
        $('#poke-img').addClass(ui.item.value);
        $('#poke-img').addClass('poke-ava');

        if(ui.item.evolve != true) {
          $('#pokemon-desc').html('You chose <span class="species-instance">' + ui.item.value + '</span>. Unfortunately <span class="species-instance">' + ui.item.value + '</span> does not evolve. :(');
          $('#pokemon-candy').remove();
        }
        else {
          $('#pokemon-desc').html('You chose <span class="species-instance">' + ui.item.value + '</span>');
          $('#pokemon-desc').append('<p>Candy needed for evolution: ' + ui.item.candy + '</p>');
      }
    });
});
