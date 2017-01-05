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
