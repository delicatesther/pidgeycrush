
    //Generate Pokémon avatars based number selection in inputfield
    $('#pokemonNumber').on('keyup change', function() {
      var $numberPokemon = parseInt($("input[name='pokemonNumber']").val(), 10);
      //Reset avatars from previous selection
      $("#pokemonAvatars").html("");
      //Number input loop
      for (i = 1; i <= $numberPokemon; i++) {
        pokemonAvatar(selectedPokemon);
      }
    });

    //Remove Pokémon avatar if value reaches 0
    if ($("input[name='pokemonNumber']").val() === 0) {
      resetForm();
    }
    return selectedPokemon;
