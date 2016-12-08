class Pokemon {
  constructor (species, candy, candyType) {
      this.species = species;
      this.candy = candy;
      this.candyType = candyType;
      this.evolutionState = evolutionState;
      this.xp = 500;
      this.label = this.species;
      this.resourceName = this.species.replace('\'', '' ).replace(' ', '');
  }
}
var pokemonService = (function PokemonService(Pokemon) {
  var allPokemon = new Array();

    allPokemon.push(
      new EvolvingPokemon('bulbasaur', 25, 'bulbasaur', 'ivysaur'),
      new EvolvingPokemon('ivysaur', 100, 'bulbasaur', 'venusaur'),
      new Pokemon('venusaur', 0, 'bulbasaur'),

      new EvolvingPokemon('charmander', 25, 'charmander', 'charmeleon'),
      new EvolvingPokemon('charmeleon', 100, 'charmander', 'charizard'),
      new Pokemon('charizard', 0, 'charmander'),

      new EvolvingPokemon('squirtle', 25, 'squirtle', 'wartortle'),
      new EvolvingPokemon('wartortle', 100, 'squirtle', 'blastoise'),
      new Pokemon('blastoise', 100, 'squirtle'),

      new EvolvingPokemon('caterpie', 12, 'caterpie', 'metapod'),
      new EvolvingPokemon('metapod', 50, 'caterpie', 'butterfree'),
      new Pokemon('butterfree', 0, 'caterpie'),

      new EvolvingPokemon('weedle', 12, 'weedle', 'kakuna'),
      new EvolvingPokemon('kakuna', 50, 'weedle', 'beedrill'),
      new Pokemon('beedrill', 0, 'weedle'),

      new EvolvingPokemon('pidgey', 12, 'pidgey', 'pidgeotto'),
      new EvolvingPokemon('pidgeotto', 50, 'pidgey', 'pidgeot'),
      new Pokemon('pidgeot', 50, 'pidgey'),

      new EvolvingPokemon('rattata', 25, 'rattata', 'raticate'),
      new Pokemon('raticate', 0, 'rattata'),

      new EvolvingPokemon('spearow', 50, 'spearow', 'fearow'),
      new Pokemon('fearow', 0, 'spearow'),

      new EvolvingPokemon('ekans', 50, 'ekans', 'arbok'),
      new Pokemon('arbok', 50, 'ekans'),

      new EvolvingPokemon('pikachu', 50, 'pikachu', 'raichu'),
      new Pokemon('raichu', 0, 'pikachu'),

      new EvolvingPokemon('sandshrew', 50, 'sandshrew', 'sandslash'),
      new Pokemon('sandslash', 0, 'sandshrew'),

      new EvolvingPokemon('nidoranM', 25, 'nidoranM', 'nidorino'),
      new EvolvingPokemon('nidorino', 100, 'nidoranM', 'nidoking'),
      new Pokemon('nidoking', 0, 'nidoranM'),

      new EvolvingPokemon('nidoranF', 25, 'nidoranF', 'nidorina'),
      new EvolvingPokemon('nidorina', 100, 'nidoranF', 'nidoqueen'),
      new Pokemon('nidoqueen', 0, 'nidoranF'),

      new Pokemon('clefairy', 50, 'clefairy', 'clefable'),
      new Pokemon('clefable', 0, 'clefairy'),

      new Pokemon('vulpix', 50, 'vulpix', 'ninetales'),
      new Pokemon('ninetales', 0, 'vulpix'),

      new Pokemon('jigglypuff', 50, 'jigglypuff', 'wigglytuff'),
      new Pokemon('wigglytuff', 0, 'jigglypuff'),

      new Pokemon('zubat', 50, 'zubat', 'golbat'),
      new Pokemon('golbat', 0, 'zubat'),

      new Pokemon('oddish', 25, 'oddish', 'gloom'),
      new Pokemon('gloom', 100, 'oddish', 'vileplume'),
      new Pokemon('vileplume', 0, 'oddish'),

      new Pokemon('paras', 50, 'paras', 'parasect'),
      new Pokemon('parasect', 0, 'paras'),

      new Pokemon('venonat', 50, 'venonat', 'venomoth'),
      new Pokemon('venomoth', 0, 'venonat'),

      new Pokemon('diglett', 50, 'diglett', 'dugtrio'),
      new Pokemon('dugtrio', 0, 'diglett'),

      new Pokemon('meowth', 50, 'meowth', 'persian'),
      new Pokemon('persian', 0, 'meowth'),

      new Pokemon('psyduck', 50, 'psyduck', 'golduck'),
      new Pokemon('golduck', 0, 'psyduck'),

      new Pokemon('mankey', 50, 'mankey', 'primeape'),
      new Pokemon('primeape', 0, 'mankey'),

      new Pokemon('growlithe', 50, 'growlithe', 'arcanine'),
      new Pokemon('arcanine', 0, 'growlithe'),

      new Pokemon('poliwag', 25, 'poliwag', 'poliwhirl'),
      new Pokemon('poliwhirl', 100, 'poliwag', 'poliwrath'),
      new Pokemon('poliwrath', 0, 'poliwag'),

      new Pokemon('abra', 25, 'abra', 'kadabra'),
      new Pokemon('kadabra', 100, 'abra', 'alakazam'),
      new Pokemon('alakazam', 0, 'abra'),

      new Pokemon('machop', 25, 'machop', 'machoke'),
      new Pokemon('machoke', 100, 'machop', 'machamp'),
      new Pokemon('machamp', 0, 'machop'),

      new Pokemon('bellsprout', 25, 'bellsprout', 'weepinbell'),
      new Pokemon('weepinbell', 100, 'bellsprout', 'victreebel'),
      new Pokemon('victreebel', 0, 'bellsprout'),

      new Pokemon('tentacool', 50, 'tentacool', 'tentacruel'),
      new Pokemon('tentacruel', 0, 'tentacool'),

      new Pokemon('geodude', 25, 'geodude', 'graveler'),
      new Pokemon('graveler', 100, 'geodude', 'golem'),
      new Pokemon('golem', 0, 'geodude'),

      new Pokemon('ponyta', 50, 'ponyta', 'rapidash'),
      new Pokemon('rapidash', 0, 'ponyta'),

      new Pokemon('slowpoke', 50, 'slowpoke', 'slowbro'),
      new Pokemon('slowbro', 0, 'slowpoke'),

      new Pokemon('magnemite', 50, 'magnemite', 'magneton'),
      new Pokemon('magneton', 0, 'magnemite'),

      new Pokemon('farfetch\'d', 0, 'farfetch\'d'),

      new Pokemon('doduo', 50, 'doduo', 'dodrio'),
      new Pokemon('dodrio', 0, 'doduo'),

      new Pokemon('seel', 50, 'seel', 'dewgong'),
      new Pokemon('dewgong', 0, 'seel'),

      new Pokemon('grimer', 50, 'grimer', 'muk'),
      new Pokemon('muk', 0, 'grimer'),

      new Pokemon('shellder', 50, 'shellder', 'cloyster'),
      new Pokemon('cloyster', 0, 'shellder'),

      new Pokemon('gastly', 25, 'gastly', 'haunter'),
      new Pokemon('haunter', 100, 'gastly', 'gengar'),
      new Pokemon('gengar', 0, 'gastly'),

      new Pokemon('onix', 0, 'onix'),

      new Pokemon('drowzee', 50, 'drowzee', 'hypno'),
      new Pokemon('hypno', 0, 'drowzee'),

      new Pokemon('krabby', 50, 'krabby', 'kingler'),
      new Pokemon('kingler', 0, 'krabby'),

      new Pokemon('voltorb', 50, 'voltorb', 'electrode'),
      new Pokemon('electrode', 0, 'voltorb'),

      new Pokemon('exeggcute', 50, 'exeggcute', 'exeggcutor'),
      new Pokemon('exeggcutor', 0, 'exeggcute'),

      new Pokemon('cubone', 50, 'cubone', 'marowak'),
      new Pokemon('marowak', 0, 'cubone'),

      new Pokemon('hitmonlee', 0, 'hitmonlee'),
      new Pokemon('hitmonchan', 0, 'hitmonchan'),

      new Pokemon('lickitung', 0, 'lickitung'),

      new Pokemon('koffing', 50, 'koffing', 'weezing'),
      new Pokemon('weezing', 0, 'koffing'),

      new Pokemon('rhyhorn', 50, 'rhyhorn', 'rhydon'),
      new Pokemon('rhydon', 0, 'rhyhorn'),

      new Pokemon('chansey', 0, 'chansey'),

      new Pokemon('tangela', 0, 'tangela'),

      new Pokemon('kangaskhan', 0, 'kangaskhan'),

      new Pokemon('horsea', 50, 'horsea', 'seadra'),
      new Pokemon('seadra', 0, 'horsea'),

      new Pokemon('goldeen', 50, 'goldeen', 'seaking'),
      new Pokemon('seaking', 0, 'goldeen'),

      new Pokemon('staryu', 50, 'staryu', 'starmie'),
      new Pokemon('starmie', 0, 'staryu'),

      new Pokemon('mr mime', 0, 'mr mime'),

      new Pokemon('scyther', 0, 'scyther'),

      new Pokemon('jynx', 0, 'jynx'),

      new Pokemon('electrabuzz', 0, 'electrabuzz'),

      new Pokemon('magmar', 0, 'magmar'),

      new Pokemon('pinsir', 0, 'pinsir'),

      new Pokemon('tauros', 0, 'tauros'),

      new Pokemon('magikarp', 400, 'magikarp', 'gyarados'),
      new Pokemon('gyarados', 0, 'magikarp'),

      new Pokemon('lapras', 0, 'lapras'),

      new Pokemon('ditto', 0, 'ditto'),

      new Pokemon('eevee', 25, 'eevee', 'vaporeon\/jolteon\/flareon'),
      new Pokemon('vaporeon', 0, 'eevee'),
      new Pokemon('jolteon', 0, 'eevee'),
      new Pokemon('flareon', 0, 'eevee'),

      new Pokemon('porygon', 0, 'porygon'),

      new Pokemon('omanyte', 50, 'omanyte', 'omastar'),
      new Pokemon('omastar', 0, 'omanyte'),

      new Pokemon('kabuto', 50, 'kabuto'. 'kabutops'),
      new Pokemon('kabutops', 0, 'kabuto'),

      new Pokemon('aerodactyl', 0, 'aerodactyl'),

      new Pokemon('snorlax', 0, 'snorlax'),

      new EvolvingPokemon('dratini', 25, 'dratini', 'dragonair'),
      new EvolvingPokemon('dragonair', 100, 'dratini', 'dragonite'),
      new Pokemon('dragonite', 0, 'dratini'),

      new Pokemon('mewtwo', 0, 'mewtwo'),

      new Pokemon('mew', 0, 'mew')
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
