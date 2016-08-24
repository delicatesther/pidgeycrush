var pokemonService = (function PokemonService(Pokemon) {
  var allPokemon = new Array();

    allPokemon.push(
      new Pokemon('bulbasaur', 25, 'bulbasaur', true),
      new Pokemon('ivysaur', 100, 'bulbasaur', true),
      new Pokemon('venusaur', 0, 'bulbasaur', false),

      new Pokemon('charmander', 25, 'charmander', true),
      new Pokemon('charmeleon', 100, 'charmander', true),
      new Pokemon('charizard', 0, 'charmander', false),

      new Pokemon('squirtle', 25, 'squirtle', true),
      new Pokemon('wartortle', 100, 'squirtle', true),
      new Pokemon('blastoise', 100, 'squirtle', false),

      new Pokemon('caterpie', 12, 'caterpie', true),
      new Pokemon('metapod', 50, 'caterpie', true),
      new Pokemon('butterfree', 0, 'caterpie', false),

      new Pokemon('weedle', 12, 'weedle', true),
      new Pokemon('kakuna', 50, 'weedle', true),
      new Pokemon('beedrill', 0, 'weedle', false),

      new Pokemon('pidgey', 12, 'pidgey', true),
      new Pokemon('pidgeotto', 50, 'pidgey', true),
      new Pokemon('pidgeot', 50, 'pidgey', false),

      new Pokemon('rattata', 25, 'rattata', true),
      new Pokemon('raticate', 0, 'rattata', false),

      new Pokemon('spearow', 50, 'spearow', true),
      new Pokemon('fearow', 0, 'spearow', false),

      new Pokemon('ekans', 50, 'ekans', true),
      new Pokemon('arbok', 50, 'ekans', false),

      new Pokemon('pikachu', 50, 'pikachu', true),
      new Pokemon('raichu', 0, 'pikachu', false),

      new Pokemon('sandshrew', 50, 'sandshrew', true),
      new Pokemon('sandslash', 0, 'sandshrew', false),

      new Pokemon('nidoranM', 25, 'nidoranM', true),
      new Pokemon('nidorino', 100, 'nidoranM', true),
      new Pokemon('nidoking', 0, 'nidoranM', false),

      new Pokemon('nidoranF', 25, 'nidoranF', true),
      new Pokemon('nidorina', 100, 'nidoranF', true),
      new Pokemon('nidoqueen', 0, 'nidoranF', false),

      new Pokemon('clefairy', 50, 'clefairy', true),
      new Pokemon('clefable', 0, 'clefairy', false),

      new Pokemon('vulpix', 50, 'vulpix', true),
      new Pokemon('ninetales', 0, 'vulpix', false),

      new Pokemon('jigglypuff', 50, 'jigglypuff', true),
      new Pokemon('wigglytuff', 0, 'jigglypuff', false),

      new Pokemon('zubat', 50, 'zubat', true),
      new Pokemon('golbat', 0, 'zubat', false),

      new Pokemon('oddish', 25, 'oddish', true),
      new Pokemon('gloom', 100, 'oddish', true),
      new Pokemon('vileplume', 0, 'oddish', false),

      new Pokemon('paras', 50, 'paras', true),
      new Pokemon('parasect', 0, 'paras', false),

      new Pokemon('venonat', 50, 'venonat', true),
      new Pokemon('venomoth', 0, 'venonat', false),

      new Pokemon('diglett', 50, 'diglett', true),
      new Pokemon('dugtrio', 0, 'diglett', false),

      new Pokemon('meowth', 50, 'meowth', true),
      new Pokemon('persian', 0, 'meowth', false),

      new Pokemon('psyduck', 50, 'psyduck', true),
      new Pokemon('golduck', 0, 'psyduck', false),

      new Pokemon('mankey', 50, 'mankey', true),
      new Pokemon('primeape', 0, 'mankey', false),

      new Pokemon('growlithe', 50, 'growlithe', true),
      new Pokemon('arcanine', 0, 'growlithe', false),

      new Pokemon('poliwag', 25, 'poliwag', true),
      new Pokemon('poliwhirl', 100, 'poliwag', true),
      new Pokemon('poliwrath', 0, 'poliwag', false),

      new Pokemon('abra', 25, 'abra', true),
      new Pokemon('kadabra', 100, 'abra', true),
      new Pokemon('alakazam', 0, 'abra', false),

      new Pokemon('machop', 25, 'machop', true),
      new Pokemon('machoke', 100, 'machop', true),
      new Pokemon('machamp', 0, 'machop', false),

      new Pokemon('bellsprout', 25, 'bellsprout', true),
      new Pokemon('weepinbell', 100, 'bellsprout', true),
      new Pokemon('victreebel', 0, 'bellsprout', false),

      new Pokemon('tentacool', 50, 'tentacool', true),
      new Pokemon('tentacruel', 0, 'tentacool', false),

      new Pokemon('geodude', 25, 'geodude', true),
      new Pokemon('graveler', 100, 'geodude', true),
      new Pokemon('golem', 0, 'geodude', false),

      new Pokemon('ponyta', 50, 'ponyta', true),
      new Pokemon('rapidash', 0, 'ponyta', false),

      new Pokemon('slowpoke', 50, 'slowpoke', true),
      new Pokemon('slowbro', 0, 'slowpoke', false),

      new Pokemon('magnemite', 50, 'magnemite', true),
      new Pokemon('magneton', 0, 'magnemite', false),

      new Pokemon('farfetch\'d', 0, 'farfetch\'d', false),

      new Pokemon('doduo', 50, 'doduo', true),
      new Pokemon('dodrio', 0, 'doduo', false),

      new Pokemon('seel', 50, 'seel', true),
      new Pokemon('dewgong', 0, 'seel', false),

      new Pokemon('grimer', 50, 'grimer', true),
      new Pokemon('muk', 0, 'grimer', false),

      new Pokemon('shellder', 50, 'shellder', true),
      new Pokemon('cloyster', 0, 'shellder', false),

      new Pokemon('gastly', 25, 'gastly', true),
      new Pokemon('haunter', 100, 'gastly', true),
      new Pokemon('gengar', 0, 'gastly', false),

      new Pokemon('onix', 0, 'onix', false),

      new Pokemon('drowzee', 50, 'drowzee', true),
      new Pokemon('hypno', 0, 'drowzee', false),

      new Pokemon('krabby', 50, 'krabby', true),
      new Pokemon('kingler', 0, 'krabby', false),

      new Pokemon('voltorb', 50, 'voltorb', true),
      new Pokemon('electrode', 0, 'voltorb', false),

      new Pokemon('exeggcute', 50, 'exeggcute', true),
      new Pokemon('exeggcutor', 0, 'exeggcute', false),

      new Pokemon('cubone', 50, 'cubone', true),
      new Pokemon('marowak', 0, 'cubone', false),

      new Pokemon('hitmonlee', 0, 'hitmonlee', false),
      new Pokemon('hitmonchan', 0, 'hitmonchan', false),

      new Pokemon('lickitung', 0, 'lickitung', false),

      new Pokemon('koffing', 50, 'koffing', true),
      new Pokemon('weezing', 0, 'koffing', false),

      new Pokemon('rhyhorn', 50, 'rhyhorn', true),
      new Pokemon('rhydon', 0, 'rhyhorn', false),

      new Pokemon('chansey', 0, 'chansey', false),

      new Pokemon('tangela', 0, 'tangela', false),

      new Pokemon('kangaskhan', 0, 'kangaskhan', false),

      new Pokemon('horsea', 50, 'horsea', true),
      new Pokemon('seadra', 0, 'horsea', false),

      new Pokemon('goldeen', 50, 'goldeen', true),
      new Pokemon('seaking', 0, 'goldeen',  false),

      new Pokemon('staryu', 50, 'staryu', true),
      new Pokemon('starmie', 0, 'staryu', false),

      new Pokemon('mr mime', 0, 'mr mime', false),

      new Pokemon('scyther', 0, 'scyther', false),

      new Pokemon('jynx', 0, 'jynx', false),

      new Pokemon('electrabuzz', 0, 'electrabuzz', false),

      new Pokemon('magmar', 0, 'magmar', false),

      new Pokemon('pinsir', 0, 'pinsir', false),

      new Pokemon('tauros', 0, 'tauros', false),

      new Pokemon('magikarp', 400, 'magikarp', true),
      new Pokemon('gyarados', 0, 'magikarp', false),

      new Pokemon('lapras', 0, 'lapras',  false),

      new Pokemon('ditto', 0, 'ditto', false),

      new Pokemon('eevee', 25, 'eevee', true),
      new Pokemon('vaporeon', 0, 'eevee', false),
      new Pokemon('jolteon', 0, 'eevee', false),
      new Pokemon('flareon', 0, 'eevee', false),

      new Pokemon('porygon', 0, 'porygon', false),

      new Pokemon('omanyte', 50, 'omanyte',  true),
      new Pokemon('omastar', 0, 'omanyte', false),

      new Pokemon('kabuto', 50, 'kabuto', true),
      new Pokemon('kabutops', 0, 'kabuto', false),

      new Pokemon('aerodactyl', 0, 'aerodactyl', false),

      new Pokemon('snorlax', 0, 'snorlax', false),

      new Pokemon('dratini', 25, 'dratini',true),
      new Pokemon('dragonair', 100, 'dratini', true),
      new Pokemon('dragonite', 0, 'dratini', false),

      new Pokemon('mewtwo', 0, 'mewtwo', false),

      new Pokemon('mew', 0, 'mew',  false)
  );


    return {
	getPokemon : getPokemon
    };

    function getPokemon(filterFunction) {
    	if(typeof filterFunction === 'undefined' || typeof filterFunction !== 'function'){
    	    filterFunction = function(pokemon) {
    		      return true;
    	    };
    	}
	return allPokemon.filter(filterFunction);
    }

})(Pokemon);

function Pokemon(species, candy, candyType, evolve) {
    this.species = species;
    this.candy = candy;
    this.candyType = candyType;
    this.evolve = evolve;
    this.xp = 500;
    this.label = this.species;
    this.resourceName = this.species.replace('\'', '' ).replace(' ', '');
};
