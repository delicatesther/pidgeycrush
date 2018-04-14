// ======================================
// Document Ready
// ======================================
$(document).ready(function(selectedPokemon) {



  // ======================================
  // Pokemon Input Autocomplete and Selection Process
  // ======================================
  $("#pokemonSelect").autocomplete({
    //Grab data from Pokémon Array
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
  // When a selection is made, this happens:
  // ======================================
  $('#pokemonSelect').on('change', function(e, selectedPokemon, genusArr) {
    selectedPokemon = matchElements(this);
    genusArr = matchGenus(selectedPokemon.genus);
    $('body').attr('data-selection', selectedPokemon.species);

    matchGenus(selectedPokemon);

    var pokemonChoiceBox = $('#pokemonChoice');

    //Remove former selection
    $('#pokemon-desc, #addPokemonSpecies').remove();
    $("#pokemonAvatars").html('');

    //Evolution is not possible on end states
    if (selectedPokemon.evolution == null) {
      resetForm();
      pokemonAvatar(selectedPokemon); // Generate first Pokémon avatar

      pokemonChoiceBox.prepend('<h2>You chose <span class="species-instance">' + selectedPokemon.species + '! </span></h2><p id="pokemon-desc">Unfortunately <span class="species-instance">' + selectedPokemon.species + '</span> does not evolve. :(</p>'); //Inform user
      $('#pokemonSelect').val('');

      $('.buttons').append('<a id="resetPokemonSelect" href="javascript:void(0)" onclick="resetForm();">Reset Selection</a>')
      return false;

    }
    else if (genusArr.length <= 2) {
      resetForm();
      $('.evolution2').addClass('hide');
      for(var j = 0; j < genusArr.length; j++) {
        genAvatar = $('.gen .avatar');
        genSpecies = $('.gen h3');
        genAvatar.eq(j).addClass('sprite-pokemon' + genusArr[j].pokemonIndex);
        genSpecies.eq(j).html(genusArr[j].species);
      }
    }
    //Add multiple Pokémon of one species
    else {
      resetForm();
      for(var j = 0; j < genusArr.length; j++) {
        genAvatar = $('.gen .avatar');
        genSpecies = $('.gen h3');
        genAvatar.eq(j).addClass('sprite-pokemon' + genusArr[j].pokemonIndex);
        genSpecies.eq(j).html(genusArr[j].species);
      }

      //Generate buttons to reset selectionfield or to add Pokémon to evolution table
      $('.buttons').append('<a id="resetPokemonSelect" href="javascript:void(0)" onclick="resetForm();">Reset Selection</a>');
    }

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
  });

  //Add bonus bubble
  $('#firstEvolve').on("change", function(){
    if($(this).is(':checked')) {
      $('.bonus').addClass('bonus-animated');
    } else {
      $('.bonus').removeClass('bonus-animated').css('opacity', 0);
    }
  });

}); // Document Ready End
