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
    console.log(getPokemonHeld());
  });

  $('.number-storage').on('change', function() {
    calculateEvolution();
  });

  removePokemon = function() {
    $('.pokemon-delete').on('click', function(){
      console.log('click');
      $(this).parent('.gen').addClass('hide');
      $(this).parent('.gen').find('.avatar').attr('class', 'avatar');
      $(this).parent('.gen').find('h3').html('');
      $(this).parent('.gen').find('.number-storage').val(0);
    });
    if(!$('.pokemon-delete').length) {
      resetForm();
    }
  }

  removePokemon();

  getPokemonHeld = function() {
    var gen0Storage = $('#evolution0Storage').val();
    var gen1Storage = $('#evolution1Storage').val();
    var gen2Storage = $('#evolution2Storage').val();
    var pokemonHeld = [gen0Storage, gen1Storage, gen2Storage];
    return pokemonHeld;
  }
  getPokemonWanted = function() {
    var gen0Storage = $('#evolution0Storage').val();
    var gen1Storage = $('#evolution1Storage').val();
    var gen2Storage = $('#evolution2Storage').val();
    var pokemonHeld = [gen0Storage, gen1Storage, gen2Storage];
    return pokemonHeld;
  }

  calculateEvolution = function(candyInventory, selection) {
    selection = $('#userChoice').attr('data-selection');
    candyInventory = parseInt($('#userChoice').attr('data-candy'));
    var tempInventory;

    candyRequirement1 = parseInt(genusArr[1].candy);
    candyRequirement2 = parseInt(genusArr[2].candy);
    candyRequirementBoth = candyRequirement1 + candyRequirement2;

    babyInventory = $('#evolution0Storage').val();
    teenInventory = $('#evolution1Storage').val();
    adultInventory = $('#evolution1Storage').val();

    if(selectedPokemon != undefined) {

      if ( candyInventory >= candyRequirementBoth && babyInventory > 0 ) {
        evolutions = Math.floor(candyInventory / candyRequirement2) ;
        if( babyInventory <= evolutions ) {
          evolutions = babyInventory;
        }

        $('.evolution2 .avatar').addClass('active');
        $('.evolution2 .evolution-count').html(evolutions);
      } else if ( candyInventory >= candyRequirement2 && teenInventory > 0 ) {
          if ( teenInventory <= evolutions ) {
            evolutions = teenInventory;
          }
        $('.evolution2 .avatar').addClass('active');
        $('.evolution2 .evolution-count').html(evolutions);
      }

      else if ( candyInventory >= candyRequirement1 && babyInventory > 0 ) {
        evolutions = Math.floor(candyInventory / candyRequirement1) ;
        if(babyInventory <= evolutions) {
          evolutions = babyInventory
        }

        $('.evolution1 .avatar').addClass('active');
        $('.evolution1 .evolution-count').html(evolutions);

        candyInventory -= genusArr[1].candy;
        candyInventory++;

      } else {
        $('.evolution1 .avatar, .evolution2 .avatar').removeClass('active');
        $('.evolution1 .evolution-count, .evolution2 .evolution-count').html(0);
      }

    }
  }

  $('#candyNumber').on('change, keyup', function() {
    var candy = parseInt($('#candyNumber').val(), 10);
    $('#userChoice').attr('data-candy', candy);
    calculateEvolution();
  });


}); // Document Ready End
