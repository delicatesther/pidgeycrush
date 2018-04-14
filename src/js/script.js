// ======================================
// Document Ready
// ======================================
$(document).ready(function(selectedPokemon) {



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
  });

  // ======================================
  // When a selection is made, return selected Pokemon Family
  // ======================================
  $('#pokemonSelect').on('change', function(e, selectedPokemon, genusArr) {
    selectedPokemon = matchElements(selection);
    $('#userChoice').attr('data-selection', selectedPokemon.species);
    genusArr = matchGenus(selectedPokemon.genus);

    if ( genusArr.length > 1 ) {
      resetForm();
      $('#familyTree').addClass('active');
      if( genusArr.length > 2 ) {
        $('.evolution2').addClass('active');
      } else {
        $('.evolution2').removeClass('active');
      }
      for(var j = 0; j < genusArr.length; j++) {
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
  });

  // ======================================
  // Activate Avatars
  // ======================================
  activateAvatar($('#evolution0Storage'), $('.evolution0 .avatar'));
  activateAvatar($('#evolution1Storage'), $('.evolution1 .avatar'));
  activateAvatar($('#evolution2Storage'), $('.evolution2 .avatar'));

  $('#pokemonSelect').on('change', function() {
    calculateEvolution();
  });
  $('#evolution0Storage').on('change', function() {
    calculateEvolution();
  });

  calculateEvolution = function(candyInventory, selection) {
    selection = $('#userChoice').attr('data-selection');
    candyInventory = parseInt($('#userChoice').attr('data-candy'));
    candyRequirement1 = parseInt(genusArr[1].candy);
    candyRequirement2 = parseInt(genusArr[2].candy);
    babyInventory = $('#evolution0Storage').val();

    if(selectedPokemon != undefined) {

      if ( candyInventory >= candyRequirement1 &&  babyInventory > 0) {

        evolutions = Math.floor(candyInventory / candyRequirement1) ;

        if(babyInventory <= evolutions) {
          evolutions = babyInventory
        } 


        $('.evolution1 .avatar').addClass('active');
        $('.evolution1 .evolution-count').html(evolutions);

        candyInventory -= genusArr[1].candy;
        candyInventory++;

      } else {
        $('.evolution1 .avatar').removeClass('active');
        $('.evolution1 .evolution-count').html(0);
      }

    }
  }

  $('#candyNumber').on('change, keyup', function() {
    var candy = parseInt($('#candyNumber').val(), 10);
    $('#userChoice').attr('data-candy', candy);
    calculateEvolution();
  });


}); // Document Ready End
