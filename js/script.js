$(document).ready(function() {

    $("#pokemonSelect").autocomplete({
        //Grab data from Pokémon Array
        source: pokemonArray.sort(SortByName),
        autoFocus: true,
        minLength: 1,
    });
    //Sort Pokémon Array in select alphabetically
    function SortByName(a, b) {
        var aName = a.species.toLowerCase();
        var bName = b.species.toLowerCase();
        return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
    };
    // Overrides the default autocomplete filter function to search only from the beginning of the string
    $.ui.autocomplete.filter = function(array, term) {
        var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(term), "i");
        return $.grep(array, function(value) {
            return matcher.test(value.label || value.value || value);
        });
    };

    resetForm = function() {
        $('#pokemonSelect, #pokemonNumber').val('');
        $('#pokemon-desc, .number-input__wrapper, .pokemon-avatar__wrapper li, .candy-input__wrapper, #candyNumber, #firstEvolve, label[for="firstEvolve"], #addPokemonSpecies, #resetPokemonSelect').remove();
        return false;
    };

    resetTable = function() {
        $('#finalDestination').find('tbody').html('');
    };

    // Reset entire field
    $('#resetPokemonSelect').on('click', function(e) {
        e.preventDefault();
        resetForm();
    });
    // Reset entire table
    $('#resetTable').on('click', function(e) {
        e.preventDefault();
        resetTable();
    });

    //Pokémon Selector
    $('#pokemonSelect').on('autocompleteselect', function(e, ui) {

        //Remove former selection
        $('#pokemon-desc, #addPokemonSpecies').remove();
        $("#pokemonFields").html('');

        $pokemonAvatar = function() {
            $("#pokemonFields").append('<li class="pokemon-avatar ' + ui.item.resourceName + '">' + '</li>');
            $('#poke-img').addClass(ui.item.resourceName);
            $('#poke-img').addClass('pokemon-avatar');

            $('#pokemonFields li').attr('id', function(i) {
                return 'pokemon' + (i + 1);
            });
        };

        $pokemonNumberInput = function() {
            $('.ui-widget').append('<div class="number-input__wrapper"><label for="pokemonNumber">Number of <span class="species-instance">' + ui.item.value + ':</span></label> <input id="pokemonNumber" type="number" name="pokemonNumber" class="pokemon-number" min="0" value="1"></div>');
        }

        $pokemonCandyInput = function() {
            $('.ui-widget').append('<div class="candy-input__wrapper"><label for="candyNumber">Number of <span class="species-instance">' + ui.item.candyType + ' candy in inventory:</span></label> <input id="candyNumber" type="number" name="candyNumber" class="candy-number" min="0" value="1"></div>')
        }

        $pokemonFirstEvolution = function() {
            $('.ui-widget').append('<input type="checkbox" name="firstEvolve" id="firstEvolve"><label for="firstEvolve">Is this the first time you evolve a <span class="species-instance">' + ui.item.value + '</span>? <small>(Adds 500xp!)</small></label>')
        }

        //Evolution is not possible on end states
        if (ui.item.evolve != true) {
            $pokemonAvatar(); //Generate first Pokémon avatar
            $('.number-input__wrapper').remove(); //Remove number selection if it's there

            $('#pokemonChoice').append('<p id="pokemon-desc"><span class="choice">You chose <span class="species-instance">' + ui.item.value + '! </span></span><br><br> Unfortunately <span class="species-instance">' + ui.item.value + '</span> does not evolve. :( </p>'); //Inform user
            $('#pokemonSelect').val('');
            $('.buttons').append('<a id="resetPokemonSelect" href="javascript:void(0)" onclick="resetForm();">Reset Selection</a>')
            return false;
        }

        //Add multiple Pokémon of one species
        else {
            //Generate first Pokémon avatar
            $pokemonAvatar();
            //Add choice + number input
            $('#pokemonChoice').prepend('<p id="pokemon-desc"><span class="choice">You chose <span class="species-instance">' + ui.item.value + '!&nbsp;</span></span>');

            $('.ui-widget').append($pokemonNumberInput()).append($pokemonCandyInput()).append($pokemonFirstEvolution());
            $('.buttons').append('<a id="resetPokemonSelect" href="javascript:void(0)" onclick="resetForm();">Reset Selection</a><a id="addPokemonSpecies" href="javascript:void(0)" onclick="addPokemonSpecies();">Add Pokémon to Table</a>');
        }

        //Generate Pokémon avatars based on number input
        $('#pokemonNumber').on('keyup change', function() {
            var $numberPokemon = parseInt($("input[name='pokemonNumber']").val(), 10);

            //Reset avatars from previous selection
            $("#pokemonFields").html("");

            //Number input loop
            for (i = 1; i <= $numberPokemon; i++) {
                $pokemonAvatar();
            }
        });

        //Remove Pokémon description if value reaches 0
        if ($("input[name='pokemonNumber']").val() === 0) {
            resetForm();
        }

        // Add Pokémon to Table
        addPokemonSpecies = function() {

            var $tableInner = $('#finalDestination').find('tbody');
            var $numPokemon = parseInt($('#pokemonNumber').val(), 10);
            var $numCandy = parseInt($('#candyNumber').val(), 10);
            var $candyNeeded = $numPokemon * ui.item.candy;
            var $candyNeededvsInventory = Math.floor($numCandy / ui.item.candy);
            var $evolutionsPossible = Math.min($candyNeededvsInventory, $numPokemon);

            //Check wether there's a new evolution taking place
            if ($('#firstEvolve').is(':checked') && $evolutionsPossible >= 1) {
                $xpGained = $evolutionsPossible * 500 + 500;
            } else {
                $xpGained = $evolutionsPossible * 500;
            }

            var rowTemplate = '<tr><td>' + $numPokemon + '</td><td class="pokemon-avatar ' + ui.item.resourceName + '"></td>' + '</td><td>' + $candyNeeded + '</td><td>' + $numCandy + '</td><td class="evolvesPossible">' + $evolutionsPossible + '</td><td class="xpGained">' + $xpGained + '</td><td><a id="removeRow" class="circular-button">&#215;</a></td>"</tr>';

            $tableInner.append(rowTemplate);

            // add unique id to each row -- do I need this?
            $('#finalDestination tbody tr').attr('id', function(i) {
                return 'pokemonRow' + (i + 1);
            });

            // remove row on click
            $(document).on('click', '#removeRow', function() {
                $(this).closest('tr').remove();
            });

            function calculateSum() {
                var sum1 = 0;
                var sum2 = 0;

                $('.evolvesPossible').each(function() {
                    sum1 += parseInt($(this).html());

                    if (sum1 >= 60 ) {



                      $('#eggMessage').html('<p>You can only evolve (roughly) 60 Pokémon during one Lucky Egg activation. <br>You may want to get another egg!</p> <a id="removeEggMessage" href="javascript:void(0)" onclick="removeEggMessage();">Got it!</a>');
                    }
                });
                $('.xpGained').each(function() {
                    sum2 += parseInt($(this).html());
                });

                $('#total-1').html(sum1);
                $('#total-2').html(sum2);
                $('#total-3').html(sum2 * 2);

            }
            calculateSum();

            $(document).on('click', $('#removeRow'), function() {
                calculateSum();
            });

            removeEggMessage = function() {
              $('#eggMessage').remove();
            }
            resetForm();
        }

    });

});
