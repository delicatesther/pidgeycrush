var pokemonService = (function PokemonService(Pokemon) {
  var allPokemon = new Array();

  allPokemon.push(

      new Pokemon('bulbasaur'),
      new Pokemon('ivysaur', 'bulbasaur', new Candy('bulbasaur', 25)),
      new Pokemon('venusaur', 'ivysaur', new Candy('bulbasaur', 100)),

      new Pokemon('charmander','charmander'),
      new Pokemon('charmeleon', 'charmander', new Candy('charmander', 25)),
      new Pokemon('charizard', 'charmeleon', new Candy('charmander', 100)),

      new Pokemon('squirtle'),
      new Pokemon('wartortle', 'squirtle', new Candy('squirtle', 25)),
      new Pokemon('blastoise', 'wartortle', new Candy('squirtle', 100)),

      new Pokemon('caterpie'),
      new Pokemon('metapod', 'caterpie', new Candy('caterpie', 12)),
      new Pokemon('butterfree', 'metapod', new Candy('caterpie', 50)),

      new Pokemon('weedle'),
      new Pokemon('kakuna', 'weedle', new Candy('weedle', 12)),
      new Pokemon('beedrill', 'kakuna', new Candy('weedle', 50)),

      new Pokemon('pidgey'),
      new Pokemon('pidgeotto', 'pidgey', new Candy('pidgey', 12)),
      new Pokemon('pidgeot', 'pidgeotto', new Candy('pidgey', 50)),

      new Pokemon('rattata'),
      new Pokemon('raticate', 'rattata', new Candy('rattata', 25)),

      new Pokemon('spearow'),
      new Pokemon('fearow', 'spearow', new Candy('spearow', 50)),

      new Pokemon('ekans'),
      new Pokemon('arbok', 'ekans', new Candy('ekans', 50)),

      new Pokemon('pikachu'),
      new Pokemon('raichu', 'pikachu', new Candy('pikachu', 50)),

      new Pokemon('sandshrew'),
      new Pokemon('sandslash', 'sandshrew', new Candy('sandshrew', 50)),

      new Pokemon('nidoranM'),
      new Pokemon('nidorino', 'nidoranM', new Candy('nidoranM', 25)),
      new Pokemon('nidoking', 'nidorino', new Candy('nidoranM', 100)),

      new Pokemon('nidoranF'),
      new Pokemon('nidorina', 'nidoranF', new Candy('nidoranF', 25)),
      new Pokemon('nidoqueen', 'nidorina', new Candy('nidoranF', 100)),

      new Pokemon('clefairy'),
      new Pokemon('clefable', 'clefairy', new Candy('clefairy', 50)),

      new Pokemon('vulpix'),
      new Pokemon('ninetales', 'vulpix', new Candy('vulpix', 50)),

      new Pokemon('jigglypuff'),
      new Pokemon('wigglytuff', 'jigglypuff', new Candy('jigglypuff', 50)),

      new Pokemon('zubat'),
      new Pokemon('golbat', 'zubat', new Candy('zubat', 50)),

      new Pokemon('oddish'),
      new Pokemon('gloom', 'oddish', new Candy('oddish', 25)),
      new Pokemon('vileplume', 'gloom', new Candy('oddish', 100)),

      new Pokemon('paras'),
      new Pokemon('parasect', 'paras', new Candy('paras', 50)),

      new Pokemon('venonat'),
      new Pokemon('venomoth', 'venonat', new Candy('venonat', 50)),

      new Pokemon('diglett'),
      new Pokemon('dugtrio', 'diglett', new Candy('diglett', 50)),

      new Pokemon('meowth'),
      new Pokemon('persian', 'meowth', new Candy('meowth', 50)),

      new Pokemon('psyduck'),
      new Pokemon('golduck', 'psyduck', new Candy('psyduck', 50)),

      new Pokemon('mankey'),
      new Pokemon('primeape', 'mankey', new Candy('mankey', 50)),

      new Pokemon('growlithe'),
      new Pokemon('arcanine', 'growlithe', new Candy('growlithe', 50)),

      new Pokemon('poliwag'),
      new Pokemon('poliwhirl', 'poliwag', new Candy('poliwag', 25)),
      new Pokemon('poliwrath', 'poliwhirl', new Candy('poliwag', 100)),

      new Pokemon('abra'),
      new Pokemon('kadabra', 'abra', new Candy('abra', 25)),
      new Pokemon('alakazam', 'kadabra', new Candy('abra', 100)),

      new Pokemon('machop'),
      new Pokemon('machoke', 'machop', new Candy('machop', 25)),
      new Pokemon('machamp', 'machoke', new Candy('machop', 100)),

      new Pokemon('bellsprout'),
      new Pokemon('weepinbell', 'bellsprout', new Candy('bellsprout', 25)),
      new Pokemon('victreebel', 'weepinbell', new Candy('bellsprout', 100)),

      new Pokemon('tentacool'),
      new Pokemon('tentacruel', 'tentacool', new Candy('tentacool', 50)),

      new Pokemon('geodude'),
      new Pokemon('graveler', 'geodude', new Candy('geodude', 25)),
      new Pokemon('golem', 'graveler', new Candy('geodude', 100)),

      new Pokemon('ponyta'),
      new Pokemon('rapidash', 'ponyta', new Candy('ponyta', 50)),

      new Pokemon('slowpoke'),
      new Pokemon('slowbro', 'slowpoke', new Candy('slowpoke', 50)),

      new Pokemon('magnemite'),
      new Pokemon('magneton', 'magnemite', new Candy('magnemite', 50)),

      new Pokemon('farfetch\'d'),

      new Pokemon('doduo'),
      new Pokemon('dodrio', 'doduo', new Candy('doduo', 50)),

      new Pokemon('seel'),
      new Pokemon('dewgong', 'seel', new Candy('seel', 50)),

      new Pokemon('grimer'),
      new Pokemon('muk', 'grimer', new Candy('grimer', 50)),

      new Pokemon('shellder'),
      new Pokemon('cloyster', 'shellder', new Candy('shellder', 50)),

      new Pokemon('gastly'),
      new Pokemon('haunter','gastly', new Candy('gastly', 25)),
      new Pokemon('gengar', 'haunter', new Candy('gastly', 100)),

      new Pokemon('onix'),

      new Pokemon('drowzee'),
      new Pokemon('hypno', 'drowzee', new Candy('drowzee', 50)),

      new Pokemon('krabby'),
      new Pokemon('kingler', 'krabby', new Candy('krabby', 50)),

      new Pokemon('voltorb'),
      new Pokemon('electrode', 'voltorb', new Candy('voltorb', 50)),

      new Pokemon('exeggcute'),
      new Pokemon('exeggcutor', 'exeggcute', new Candy('exeggcute', 50)),

      new Pokemon('cubone'),
      new Pokemon('marowak', 'cubone', new Candy('cubone', 50)),

      new Pokemon('hitmonlee'),
      new Pokemon('hitmonchan'),

      new Pokemon('lickitung'),

      new Pokemon('koffing'),
      new Pokemon('weezing', 'koffing', new Candy('koffing', 50)),

      new Pokemon('rhyhorn'),
      new Pokemon('rhydon', 'rhyhorn', new Candy('rhyhorn', 50)),

      new Pokemon('chansey'),

      new Pokemon('tangela'),

      new Pokemon('kangaskhan'),

      new Pokemon('horsea'),
      new Pokemon('seadra', 'horsea', new Candy('horsea', 50)),

      new Pokemon('goldeen'),
      new Pokemon('seaking', 'goldeen', new Candy('goldeen', 50)),

      new Pokemon('staryu'),
      new Pokemon('starmie', 'staryu', new Candy('staryu', 50)),

      new Pokemon('mr mime'),

      new Pokemon('scyther'),

      new Pokemon('jynx'),

      new Pokemon('electrabuzz'),

      new Pokemon('magmar'),

      new Pokemon('pinsir'),

      new Pokemon('tauros'),

      new Pokemon('magikarp'),
      new Pokemon('gyarados', 'magikarp', new Candy('magikarp', 400)),

      new Pokemon('lapras'),

      new Pokemon('ditto'),

      new Pokemon('eevee'),
      new Pokemon('vaporeon', 'eevee', new Candy('eevee', 25)),
      new Pokemon('jolteon', 'eevee', new Candy('eevee', 25)),
      new Pokemon('flareon', 'eevee', new Candy('eevee', 25)),

      new Pokemon('porygon'),

      new Pokemon('omanyte'),
      new Pokemon('omastar', 'omanyte', new Candy('omanyte', 50)),

      new Pokemon('kabuto'),
      new Pokemon('kabutops', 'kabuto', new Candy('kabuto', 50)),

      new Pokemon('aerodactyl'),

      new Pokemon('snorlax'),

      new Pokemon('dratini'),
      new Pokemon('dragonair', 'dratini', new Candy('dratini', 25)),
      new Pokemon('dragonite', 'dragonair', new Candy('dratini', 25)),

      new Pokemon('mewtwo'),

      new Pokemon('mew')
    );

  return {
    getPokemon : getPokemon,
    evolve : evolve
  };

  function evolve(arrayOfPokemon, candy) {
    var pokemonToReturn;
    if(isAllTheSame(arrayOfPokemon)){
      pokemonToReturn = getPokemon(function(pokemon){
        return (arrayOfPokemon[0].species === pokemon.evolvesFrom && candy.amount >= pokemon.getCandyAmountRequired() && candy.candyType === pokemon.getCandyTypeRequired());
      });

      if (pokemonToReturn.length === 0) {
        throw "Not able to evolve";
      }
    } else {
      throw "Not all pokemon are of same species";
    }

    return pokemonToReturn;
  }

  function getPokemon(filterFunction) {
    if(typeof filterFunction === 'undefined' || typeof filterFunction !== 'function'){
      filterFunction = function(pokemon) {
        return true;
      };
    }

    return allPokemon.filter(filterFunction);
  }

  function isAllTheSame(array) {
    var first = array[0];
    return array.every(function(element) {
      return element.species === first.species;
    });
  }

})(Pokemon);

function Candy (candyType, amount){
    var candyType = candyType;
    var amount = amount;

    this.getCandyType = function(){
      return candyType;
    }
    this.getAmount = function() {
      return amount
    };
    this.increaseAmount = function(){
      return this.amount ++;
    };
}

function Pokemon (species, evolvesFrom, candyRequired) {
  if(! typeof this.evolvesFrom === 'undefined'  && typeof this.candyRequired === 'undefined') {
    return null;
  } else {
    var requiredCandy = (typeof candyRequired !== 'undefined') ? candyRequired : new Candy('', 0);
    return {
      species: species.replace('\'', '' ).replace(' ', ''),
      label: species,
      evolvesFrom : evolvesFrom,
      getCandyTypeRequired : requiredCandy.getCandyType(),
      getCandyAmountRequired: requiredCandy.getAmount(),
      xp : 500
    };
  }
}
