this.evolve = function() {
  var newPokemon
   if (this.evolvingTree.length > 2) {
     var newPokemonName = this.evolvingTree[this.evolvingTree.length];
     this.evolvingTree.pop();
     newPokemon = new EvolvingPokemon(this.evolvingTree.last(), …….);

   } else {
     newPokemon = new Pokemon(this.evolvingTree[this.evolvingTree.length], …….);
  }

  return newPokemon
}
