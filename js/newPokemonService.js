class Pokemon {
  constructor (species, candy, candyType) {
      this.species = species;
      this.candy = candy;
      this.candyType = candyType;
      this.xp = 500;
      this.label = this.species;
      this.resourceName = this.species.replace('\'', '' ).replace(' ', '');
  }
}

class EvolvingPokemon extends Pokemon {
  constructor (species, candy, candyType, evolutionState) {
    super(species, candy, candyType);
    this.evolutionState = evolutionState;

    this.evolve = function(){
      return new EvolvingPokemon(this.evolutionState, this.candy, this.candyType, this.evolutionState);
    }
  }
}

class Pigeotto {
   constructor(arrayOfPiggies) {
      if (arrayOfPiggies.length > 12) {
          for (var i = 0,  i <= arrayOfPiggies.length, i++){
              if (! arrayOfPiggies[i] instanceof Piggy){
                  return
              }
          }
       }

       return new Pokemon(‘Pigeotto’);
   }
}

var pokemonFamily = new Object(
  species: this.species[],
  candyType: this.species[0],
  candyNeeded: this.candyNeeded[],
  xp: 500,
  this.label = this.species[];
  this.resourceName = this.species.replace('\'', '' ).replace(' ', '');
);

var bulbasaurFamily = new pokemonFamily (
  species: ['bulbasaur', 'ivysaur', 'venusaur'],
  candyNeeded: [25, 100],
);


class Pidgeotto {
   constructor(arrayOfPidgies) {
      var i;

      if (arrayOfPidgies.length =12) {
          for (i = 0,  i <= arrayOfPidgies.length, i++){
              if (! arrayOfPidgies[i] instanceof Pidgey){
                  break;
              }
          }
       }

       return (i = 12) ? new Pokemon(‘Pigeotto’) : null;
   }
}

var selectedPokemon = new Array();

selectedPokemon = selectedPokemon.push(new Pidgey(), new Pidgey());

function evolve(arrayOfPokemon){
   var newPokemon = new Pidgeotto(arrayOfPokemon);
   return (newPokemon) ? [newPokemon] : arrayOfPokemon;
}

miss wil je dan wel je lijst met pokemon als json ergens opslaan zoals:
var pokemonJson = {
   pidgey: {candy: 1},
   pidgeotto: {candy: 20, evolvesFrom: pidgey, requiredNr: 12}
}

en dan gewoon 1 class:
class Pokemon {
   constructor(name, candy, evolvesFrom, requiredNr, arrayOfPokemon) {
      var objectToReturn;
      if (typeof evolvesFrom === ‘undefined’ && typeof requiredNr === ‘undefined’) {
          objectToReturn =  this;
      } else {
        if (arrayOfPokemon.length =requiredNr) {
          for (i = 0,  i <= arrayOfPokemon.length, i++){
              if (! arrayOfPokemon[i] instanceof evolvesFrom){
                  break;
              }
          }
       }
    }

       return (i = 12) ? new Pokemon(‘Pigeotto’) : null;
   }}
   
var testPokemon = new EvolvingPokemon('bulbasaur', 25, 'bulbasaur', 'ivysaur');
testPokemon = testPokemon.evolve();

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

      new Pokemon('clefairy', 50, 'clefairy'),
      new Pokemon('clefable', 0, 'clefairy'),

      new Pokemon('vulpix', 50, 'vulpix'),
      new Pokemon('ninetales', 0, 'vulpix'),

      new Pokemon('jigglypuff', 50, 'jigglypuff'),
      new Pokemon('wigglytuff', 0, 'jigglypuff'),

      new Pokemon('zubat', 50, 'zubat'),
      new Pokemon('golbat', 0, 'zubat'),

      new Pokemon('oddish', 25, 'oddish'),
      new Pokemon('gloom', 100, 'oddish'),
      new Pokemon('vileplume', 0, 'oddish'),

      new Pokemon('paras', 50, 'paras'),
      new Pokemon('parasect', 0, 'paras'),

      new Pokemon('venonat', 50, 'venonat'),
      new Pokemon('venomoth', 0, 'venonat'),

      new Pokemon('diglett', 50, 'diglett'),
      new Pokemon('dugtrio', 0, 'diglett'),

      new Pokemon('meowth', 50, 'meowth'),
      new Pokemon('persian', 0, 'meowth'),

      new Pokemon('psyduck', 50, 'psyduck'),
      new Pokemon('golduck', 0, 'psyduck'),

      new Pokemon('mankey', 50, 'mankey'),
      new Pokemon('primeape', 0, 'mankey'),

      new Pokemon('growlithe', 50, 'growlithe'),
      new Pokemon('arcanine', 0, 'growlithe'),

      new Pokemon('poliwag', 25, 'poliwag'),
      new Pokemon('poliwhirl', 100, 'poliwag'),
      new Pokemon('poliwrath', 0, 'poliwag'),

      new Pokemon('abra', 25, 'abra'),
      new Pokemon('kadabra', 100, 'abra'),
      new Pokemon('alakazam', 0, 'abra'),

      new Pokemon('machop', 25, 'machop'),
      new Pokemon('machoke', 100, 'machop'),
      new Pokemon('machamp', 0, 'machop'),

      new Pokemon('bellsprout', 25, 'bellsprout'),
      new Pokemon('weepinbell', 100, 'bellsprout'),
      new Pokemon('victreebel', 0, 'bellsprout'),

      new Pokemon('tentacool', 50, 'tentacool'),
      new Pokemon('tentacruel', 0, 'tentacool'),

      new Pokemon('geodude', 25, 'geodude'),
      new Pokemon('graveler', 100, 'geodude'),
      new Pokemon('golem', 0, 'geodude'),

      new Pokemon('ponyta', 50, 'ponyta'),
      new Pokemon('rapidash', 0, 'ponyta'),

      new Pokemon('slowpoke', 50, 'slowpoke'),
      new Pokemon('slowbro', 0, 'slowpoke'),

      new Pokemon('magnemite', 50, 'magnemite'),
      new Pokemon('magneton', 0, 'magnemite'),

      new Pokemon('farfetch\'d', 0, 'farfetch\'d'),

      new Pokemon('doduo', 50, 'doduo'),
      new Pokemon('dodrio', 0, 'doduo'),

      new Pokemon('seel', 50, 'seel'),
      new Pokemon('dewgong', 0, 'seel'),

      new Pokemon('grimer', 50, 'grimer'),
      new Pokemon('muk', 0, 'grimer'),

      new Pokemon('shellder', 50, 'shellder'),
      new Pokemon('cloyster', 0, 'shellder'),

      new Pokemon('gastly', 25, 'gastly'),
      new Pokemon('haunter', 100, 'gastly'),
      new Pokemon('gengar', 0, 'gastly'),

      new Pokemon('onix', 0, 'onix'),

      new Pokemon('drowzee', 50, 'drowzee'),
      new Pokemon('hypno', 0, 'drowzee'),

      new Pokemon('krabby', 50, 'krabby'),
      new Pokemon('kingler', 0, 'krabby'),

      new Pokemon('voltorb', 50, 'voltorb'),
      new Pokemon('electrode', 0, 'voltorb'),

      new Pokemon('exeggcute', 50, 'exeggcute'),
      new Pokemon('exeggcutor', 0, 'exeggcute'),

      new Pokemon('cubone', 50, 'cubone'),
      new Pokemon('marowak', 0, 'cubone'),

      new Pokemon('hitmonlee', 0, 'hitmonlee'),
      new Pokemon('hitmonchan', 0, 'hitmonchan'),

      new Pokemon('lickitung', 0, 'lickitung'),

      new Pokemon('koffing', 50, 'koffing'),
      new Pokemon('weezing', 0, 'koffing'),

      new Pokemon('rhyhorn', 50, 'rhyhorn'),
      new Pokemon('rhydon', 0, 'rhyhorn'),

      new Pokemon('chansey', 0, 'chansey'),

      new Pokemon('tangela', 0, 'tangela'),

      new Pokemon('kangaskhan', 0, 'kangaskhan'),

      new Pokemon('horsea', 50, 'horsea'),
      new Pokemon('seadra', 0, 'horsea'),

      new Pokemon('goldeen', 50, 'goldeen'),
      new Pokemon('seaking', 0, 'goldeen'),

      new Pokemon('staryu', 50, 'staryu'),
      new Pokemon('starmie', 0, 'staryu'),

      new Pokemon('mr mime', 0, 'mr mime'),

      new Pokemon('scyther', 0, 'scyther'),

      new Pokemon('jynx', 0, 'jynx'),

      new Pokemon('electrabuzz', 0, 'electrabuzz'),

      new Pokemon('magmar', 0, 'magmar'),

      new Pokemon('pinsir', 0, 'pinsir'),

      new Pokemon('tauros', 0, 'tauros'),

      new Pokemon('magikarp', 400, 'magikarp'),
      new Pokemon('gyarados', 0, 'magikarp'),

      new Pokemon('lapras', 0, 'lapras'),

      new Pokemon('ditto', 0, 'ditto'),

      new Pokemon('eevee', 25, 'eevee'),
      new Pokemon('vaporeon', 0, 'eevee'),
      new Pokemon('jolteon', 0, 'eevee'),
      new Pokemon('flareon', 0, 'eevee'),

      new Pokemon('porygon', 0, 'porygon'),

      new Pokemon('omanyte', 50, 'omanyte'),
      new Pokemon('omastar', 0, 'omanyte'),

      new Pokemon('kabuto', 50, 'kabuto'),
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
