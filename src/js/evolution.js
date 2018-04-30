getPokemonHeld = function() {
  var gen0Storage = $('#evolution0Storage').val();
  var gen1Storage = $('#evolution1Storage').val();
  var gen2Storage = $('#evolution2Storage').val();
  var pokemonHeld = [gen0Storage, gen1Storage, gen2Storage];
  return pokemonHeld;
}

getPokemonWanted = function() {
  var gen0Wanted = $('#evolution0Wanted').val();
  var gen1Wanted = $('#evolution1Wanted').val();
  var gen2Wanted = $('#evolution2Wanted').val();
  var pokemonWanted = [gen0Wanted, gen1Wanted, gen2Wanted];
  return pokemonWanted;
}

var candyInventory = parseInt($('#userChoice').attr('data-candy'));
var gen1Inventory = $('#evolution0Storage').val();
var gen2Inventory = $('#evolution1Storage').val();
var gen3Inventory = $('#evolution1Storage').val();

calculateEvolution = function(selectedPokemon, genusArr, candyInventory) {
  var candyRequirement1 = parseInt(genusArr[1].candy);
  var candyRequirement2 = parseInt(genusArr[2].candy);
  var candyRequirementBoth = candyRequirement1 + candyRequirement2;

  if ( selectedPokemon != undefined ) {

    if ( candyInventory >= candyRequirementBoth && gen1Inventory > 0 ) {
      evolutions = Math.floor(candyInventory / candyRequirement2) ;
      
      if ( gen1Inventory <= evolutions ) {
        evolutions = gen1Inventory;
      }

      $('.evolution2 .avatar').addClass('active');
      $('.evolution2 .evolution-count').html(evolutions);
      }

      else if ( candyInventory >= candyRequirement2 && gen2Inventory > 0 ) {
        if ( gen2Inventory <= evolutions ) {
          evolutions = gen2Inventory;
      }

      $('.evolution2 .avatar').addClass('active');
      $('.evolution2 .evolution-count').html(evolutions);
    }

    else if ( candyInventory >= candyRequirement1 && gen1Inventory > 0 ) {
      evolutions = Math.floor(candyInventory / candyRequirement1) ;

      if ( gen1Inventory <= evolutions ) {
        evolutions = gen1Inventory
      }
      $('.evolution1 .avatar').addClass('active');
      $('.evolution1 .evolution-count').html(evolutions);
      candyInventory -= genusArr[1].candy;
      candyInventory++;
    }

    else {
      $('.evolution1 .avatar, .evolution2 .avatar').removeClass('active');
      $('.evolution1 .evolution-count, .evolution2 .evolution-count').html(0);
    }

  } else {
    console.log('No Pokemon chosen');
  }
}
