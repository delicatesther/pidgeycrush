(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={
  "pokemon": [{
      "pokemonIndex": "001",
      "species": "Bulbasaur",
      "genus": "Bulbasaur",
      "type": ["grass", "poison"],
      "candy": 25,
      "evolution": "Ivysaur",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3,
      "eggDistance": 2
    },
    {
      "pokemonIndex": "002",
      "species": "Ivysaur",
      "genus": "Bulbasaur",
      "type": ["grass", "poison"],
      "candy": 100,
      "evolution": "Venusaur",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "003",
      "species": "Venusaur",
      "genus": "Bulbasaur",
      "type": ["grass", "poison"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "004",
      "species": "Charmander",
      "genus": "Charmander",
      "type": ["fire"],
      "candy": 25,
      "evolution": "Charmeleon",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3,
      "eggDistance": 2
    },
    {
      "pokemonIndex": "005",
      "species": "Charmeleon",
      "genus": "Charmander",
      "type": ["fire"],
      "candy": 100,
      "evolution": "Charizard",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "006",
      "species": "Charizard",
      "genus": "Charmander",
      "type": ["fire", "flying"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "007",
      "species": "Squirtle",
      "genus": "Squirtle",
      "type": ["water"],
      "candy": 25,
      "evolution": "Wartortle",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "008",
      "species": "Wartortle",
      "genus": "Squirtle",
      "type": ["water"],
      "candy": "100",
      "evolution": "Blastoise",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "009",
      "species": "Blastoise",
      "genus": "Squirtle",
      "type": ["water"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "010",
      "species": "Caterpie",
      "genus": "Caterpie",
      "type": ["bug"],
      "candy": 12,
      "evolution": "Metapod",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 1,
      "eggDistance": 2
    },
    {
      "pokemonIndex": "011",
      "species": "Metapod",
      "genus": "Caterpie",
      "type": ["bug"],
      "candy": 50,
      "evolution": "Butterfree",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 1
    },
    {
      "pokemonIndex": "012",
      "species": "Butterfree",
      "genus": "Caterpie",
      "type": ["bug", "flying"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 1
    },
    {
      "pokemonIndex": "013",
      "species": "Weedle",
      "genus": "Weedle",
      "type": ["bug", "poison"],
      "candy": 12,
      "evolution": "Kakuna",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 1,
      "eggDistance": 2
    },
    {
      "pokemonIndex": "014",
      "species": "Kakuna",
      "genus": "Weedle",
      "type": ["bug", "poison"],
      "candy": 50,
      "evolution": "Beedrill",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 1
    },
    {
      "pokemonIndex": "015",
      "species": "Beedrill",
      "genus": "Weedle",
      "type": ["bug", "poison"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 1
    },
    {
      "pokemonIndex": "016",
      "species": "Pidgey",
      "genus": "Pidgey",
      "type": ["normal", "flying"],
      "candy": 12,
      "evolution": "Pidgeotto",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 1
    },
    {
      "pokemonIndex": "017",
      "species": "Pidgeotto",
      "genus": "Pidgey",
      "type": ["normal", "flying"],
      "candy": 50,
      "evolution": "Pidgeot",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 1
    },
    {
      "pokemonIndex": "018",
      "species": "Pidgeot",
      "genus": "Pidgey",
      "type": ["normal", "flying"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 1
    },
    {
      "pokemonIndex": "019",
      "species": "Rattata",
      "genus": "Rattata",
      "type": ["normal"],
      "candy": 25,
      "evolution": "Raticate",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 1
    },
    {
      "pokemonIndex": "020",
      "species": "Raticate",
      "genus": "Rattata",
      "type": ["", ""],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 1
    },
    {
      "pokemonIndex": "021",
      "species": "Spearow",
      "genus": "Spearow",
      "type": ["normal", "flying"],
      "candy": 50,
      "evolution": "Fearow",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 1,
      "eggDistance": 2
    },
    {
      "pokemonIndex": "022",
      "species": "Fearow",
      "genus": "Spearow",
      "type": ["normal", "flying"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 1
    },
    {
      "pokemonIndex": "023",
      "species": "Ekans",
      "genus": "Ekans",
      "type": ["poison"],
      "candy": 50,
      "evolution": "Arbok",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "024",
      "species": "Arbok",
      "genus": "Ekans",
      "type": ["poison"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "025",
      "species": "Pikachu",
      "genus": "Pikachu",
      "type": ["electric"],
      "candy": 50,
      "evolution": "Raichu",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 1
    },
    {
      "pokemonIndex": "026",
      "species": "Raichu",
      "genus": "Pikachu",
      "type": ["electric"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 1
    },
    {
      "pokemonIndex": "027",
      "species": "Sandshrew",
      "genus": "Sandshrew",
      "type": ["ground"],
      "candy": 50,
      "evolution": "Sandslash",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "028",
      "species": "Sandslash",
      "genus": "Sandshrew",
      "type": ["ground"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "029",
      "species": "NidoranF",
      "genus": "NidoranF",
      "type": ["poison"],
      "candy": 25,
      "evolution": "Nidorina",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3,
      "eggDistance": 2
    },
    {
      "pokemonIndex": "030",
      "species": "Nidorina",
      "genus": "NidoranF",
      "type": ["poison"],
      "candy": 100,
      "evolution": "Nidoqueen",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "031",
      "species": "Nidoqueen",
      "genus": "NidoranF",
      "type": ["poison", "ground"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "032",
      "species": "NidoranM",
      "genus": "NidoranM",
      "type": ["poison"],
      "candy": 25,
      "evolution": "Nidorino",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3,
      "eggDistance": 2
    },
    {
      "pokemonIndex": "033",
      "species": "Nidorino",
      "genus": "NidoranM",
      "type": ["poison"],
      "candy": 100,
      "evolution": "Nidoking",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "034",
      "species": "Nidoking",
      "genus": "NidoranM",
      "type": ["poison", "ground"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "035",
      "species": "Clefairy",
      "genus": "Cleffa",
      "type": ["fairy"],
      "candy": 50,
      "evolution": "Clefable",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 1
    },
    {
      "pokemonIndex": "036",
      "species": "Clefable",
      "genus": "Cleffa",
      "type": ["fairy"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 1
    },
    {
      "pokemonIndex": "037",
      "species": "Vulpix",
      "genus": "Vulpix",
      "type": ["fire"],
      "candy": 50,
      "evolution": "Ninetales",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "038",
      "species": "Ninetales",
      "genus": "Vulpix",
      "type": ["fire"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "039",
      "species": "Jigglypuff",
      "genus": "Igglybuff",
      "type": ["normal", "fairy"],
      "candy": 50,
      "evolution": "Wigglytuff",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 1
    },
    {
      "pokemonIndex": "040",
      "species": "Wigglytuff",
      "genus": "Igglybuff",
      "type": ["normal", "fairy"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 1
    },
    {
      "pokemonIndex": "041",
      "species": "Zubat",
      "genus": "Zubat",
      "type": ["poison", "flying"],
      "candy": 50,
      "evolution": "Golbat",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 1,
      "eggDistance": 2
    },
    {
      "pokemonIndex": "042",
      "species": "Golbat",
      "genus": "Zubat",
      "type": ["poison", "flying"],
      "candy": 100,
      "evolution": "Crobat",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 1
    },
    {
      "pokemonIndex": "043",
      "species": "Oddish",
      "genus": "Oddish",
      "type": ["grass", "poison"],
      "candy": 25,
      "evolution": "Gloom",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3,
      "eggDistance": 2
    },
    {
      "pokemonIndex": "044",
      "species": "Gloom",
      "genus": "Oddish",
      "type": ["grass", "poison"],
      "candy": 100,
      "evolution": ["Vileplume", "Bellossom"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "045",
      "species": "Vileplume",
      "genus": "Oddish",
      "type": ["grass", "poison"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "046",
      "species": "Paras",
      "genus": "Paras",
      "type": ["bug", "grass"],
      "candy": 50,
      "evolution": "Parasect",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "047",
      "species": "Parasect",
      "genus": "Paras",
      "type": ["bug", "grass"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "048",
      "species": "Venonat",
      "genus": "Venonat",
      "type": ["bug", "poison"],
      "candy": 50,
      "evolution": "Venomoth",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3,
      "eggDistance": 2
    },
    {
      "pokemonIndex": "049",
      "species": "Venomoth",
      "genus": "Venonat",
      "type": ["bug", "poison"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "050",
      "species": "Diglett",
      "genus": "Diglett",
      "type": ["ground"],
      "candy": 50,
      "evolution": "Dugtrio",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3,
      "eggDistance": 2
    },
    {
      "pokemonIndex": "051",
      "species": "Dugtrio",
      "genus": "Diglett",
      "type": ["ground"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "052",
      "species": "Meowth",
      "genus": "Meowth",
      "type": ["normal"],
      "candy": 50,
      "evolution": "Persian",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "053",
      "species": "Persian",
      "genus": "Meowth",
      "type": ["normal"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "054",
      "species": "Psyduck",
      "genus": "Psyduck",
      "type": ["water"],
      "candy": 50,
      "evolution": "Golduck",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "055",
      "species": "Golduck",
      "genus": "Psyduck",
      "type": ["water"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "056",
      "species": "Mankey",
      "genus": "Mankey",
      "type": ["fighting"],
      "candy": 50,
      "evolution": "Primeape",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "057",
      "species": "Primeape",
      "genus": "Mankey",
      "type": ["fighting"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "058",
      "species": "Growlithe",
      "genus": "Growlithe",
      "type": ["fire"],
      "candy": 50,
      "evolution": "Arcanine",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "059",
      "species": "Arcanine",
      "genus": "Growlithe",
      "type": ["fire"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "60",
      "species": "Poliwag",
      "genus": "Poliwag",
      "type": ["water"],
      "candy": 25,
      "evolution": "Poliwhirl",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "061",
      "species": "Poliwhirl",
      "genus": "Poliwag",
      "type": ["water"],
      "candy": 50,
      "evolution": ["Poliwrath", "Politoed"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "062",
      "species": "Poliwrath",
      "genus": "Poliwag",
      "type": ["water", "fighting"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "063",
      "species": "Abra",
      "genus": "Abra",
      "type": ["psychic"],
      "candy": 25,
      "evolution": "Kadabra",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3,
      "eggDistance": 2
    },
    {
      "pokemonIndex": "064",
      "species": "Kadabra",
      "genus": "Abra",
      "type": ["psychic"],
      "candy": 100,
      "evolution": "Alakazam",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "065",
      "species": "Alakazam",
      "genus": "Abra",
      "type": ["psychic"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "066",
      "species": "Machop",
      "genus": "Machop",
      "type": ["fighting"],
      "candy": 25,
      "evolution": "Machoke",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3,
      "eggDistance": 2
    },
    {
      "pokemonIndex": "067",
      "species": "Machoke",
      "genus": "Machop",
      "type": ["fighting"],
      "candy": 100,
      "evolution": "Machamp",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "068",
      "species": "Machamp",
      "genus": "Machop",
      "type": ["fighting"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "069",
      "species": "Bellsprout",
      "genus": "Bellsprout",
      "type": ["grass", "poison"],
      "candy": 25,
      "evolution": "Weepinbell",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3,
      "eggDistance": 2
    },
    {
      "pokemonIndex": "070",
      "species": "Weepinbell",
      "genus": "Bellsprout",
      "type": ["grass", "poison"],
      "candy": 100,
      "evolution": "Victreebel",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "071",
      "species": "Victreebel",
      "genus": "Bellsprout",
      "type": ["grass", "poison"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "072",
      "species": "Tentacool",
      "genus": "Tentacool",
      "type": ["water", "poison"],
      "candy": 50,
      "evolution": "Tentacruel",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "078",
      "species": "Tentacruel",
      "genus": "Tentacool",
      "type": ["water", "poison"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "074",
      "species": "Geodude",
      "genus": "Geodude",
      "type": ["rock", "ground"],
      "candy": 25,
      "evolution": "Graveler",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 1,
      "eggDistance": 2
    },
    {
      "pokemonIndex": "075",
      "species": "Graveler",
      "genus": "Geodude",
      "type": ["rock", "ground"],
      "candy": 100,
      "evolution": "Golem",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 1
    },
    {
      "pokemonIndex": "076",
      "species": "Golem",
      "genus": "Geodude",
      "type": ["rock", "ground"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 1
    },
    {
      "pokemonIndex": "077",
      "species": "Ponyta",
      "genus": "Ponyta",
      "type": ["fire"],
      "candy": 50,
      "evolution": "Rapidash",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "078",
      "species": "Rapidash",
      "genus": "Ponyta",
      "type": ["fire"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "079",
      "species": "Slowpoke",
      "genus": "Slowpoke",
      "type": ["water", "psychic"],
      "candy": 50,
      "evolution": ["Slowbro", "Slowking"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3,
      "eggDistance": 2
    },
    {
      "pokemonIndex": "080",
      "species": "Slowbro",
      "genus": "Slowpoke",
      "type": ["water", "psychic"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "081",
      "species": "Magnemite",
      "genus": "Magnemite",
      "type": ["electric", "steel"],
      "candy": 50,
      "evolution": "Magneton",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "082",
      "species": "Magneton",
      "genus": "Magnemite",
      "type": ["electric", "steel"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "083",
      "species": "Farfetc'd",
      "genus": "Farfetc'd",
      "type": ["normal", "flying"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 5
    },
    {
      "pokemonIndex": "084",
      "species": "Doduo",
      "genus": "Doduo",
      "type": ["normal", "flying"],
      "candy": 50,
      "evolution": "Dodrio",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "085",
      "species": "Dodrio",
      "genus": "Doduo",
      "type": ["normal", "flying"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "086",
      "species": "Seel",
      "genus": "Seel",
      "type": ["water"],
      "candy": 50,
      "evolution": "Dewgong",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "087",
      "species": "Dewgong",
      "genus": "Seel",
      "type": ["water", "ice"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "088",
      "species": "Grimer",
      "genus": "Grimer",
      "type": ["poison"],
      "candy": 50,
      "evolution": "Muk",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "089",
      "species": "Muk",
      "genus": "Grimer",
      "type": ["poison"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "090",
      "species": "Shellder",
      "genus": "Shellder",
      "type": ["water"],
      "candy": 50,
      "evolution": "Cloyster",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3,
      "eggDistance": 2
    },
    {
      "pokemonIndex": "091",
      "species": "Cloyster",
      "genus": "Shellder",
      "type": ["water", "ice"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "092",
      "species": "Gastly",
      "genus": "Gastly",
      "type": ["ghost", "poison"],
      "candy": 25,
      "evolution": "Haunter",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3,
      "eggDistance": 2
    },
    {
      "pokemonIndex": "093",
      "species": "Haunter",
      "genus": "Gastly",
      "type": ["ghost", "poison"],
      "candy": 100,
      "evolution": "Gengar",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "094",
      "species": "Gengar",
      "genus": "Gastly",
      "type": ["ghost", "poison"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "095",
      "species": "Onix",
      "genus": "Onix",
      "type": ["rock", "ground"],
      "candy": 50,
      "evolution": "Steelix",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 5,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "096",
      "species": "Drowzee",
      "genus": "Drowzee",
      "type": ["psychic"],
      "candy": 50,
      "evolution": "Hypno",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "097",
      "species": "Hypno",
      "genus": "Drowzee",
      "type": ["psychic"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "098",
      "species": "Krabby",
      "genus": "Krabby",
      "type": ["water"],
      "candy": 50,
      "evolution": "Kingler",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3,
      "eggDistance": 2
    },
    {
      "pokemonIndex": "099",
      "species": "Kingler",
      "genus": "Krabby",
      "type": ["water"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "100",
      "species": "Voltorb",
      "genus": "Voltorb",
      "type": ["electric"],
      "candy": 50,
      "evolution": "Electrode",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "101",
      "species": "Electrode",
      "genus": "Voltorb",
      "type": ["electric"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "102",
      "species": "Exeggcute",
      "genus": "Exeggcute",
      "type": ["grass", "psychic"],
      "candy": 50,
      "evolution": "Exeggutor",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3,
      "eggDistance": 2
    },
    {
      "pokemonIndex": "103",
      "species": "Exeggutor",
      "genus": "Exeggcute",
      "type": ["grass", "psychic"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "104",
      "species": "Cubone",
      "genus": "Cubone",
      "type": ["ground"],
      "candy": 50,
      "evolution": "Marowak",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "105",
      "species": "Marowak",
      "genus": "Cubone",
      "type": ["ground"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "106",
      "species": "Hitmonlee",
      "genus": "Tyrogue",
      "type": ["fighting"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 5,
      "eggDistance": 10
    },
    {
      "pokemonIndex": "107",
      "species": "Hitmonchan",
      "genus": "Tyrogue",
      "type": ["fighting"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 5,
      "eggDistance": 10
    },
    {
      "pokemonIndex": "108",
      "species": "Lickitung",
      "genus": "Lickitung",
      "type": ["normal"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "109",
      "species": "Koffing",
      "genus": "Koffing",
      "type": ["poison"],
      "candy": 50,
      "evolution": "Weezing",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "110",
      "species": "Weezing",
      "genus": "Koffing",
      "type": ["poison"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "111",
      "species": "Rhyhorn",
      "genus": "Rhyhorn",
      "type": ["ground", "rock"],
      "candy": 50,
      "evolution": "Rhydon",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "112",
      "species": "Rhydon",
      "genus": "Rhyhorn",
      "type": ["ground", "rock"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "113",
      "species": "Chansey",
      "genus": "Chansey",
      "type": ["normal"],
      "candy": 50,
      "evolution": "Blissey",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 5,
      "eggDistance": 10
    },
    {
      "pokemonIndex": "114",
      "species": "Tangela",
      "genus": "Tangela",
      "type": ["grass"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "115",
      "species": "Kangaskhan",
      "genus": "Kangaskhan",
      "type": ["normal"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "116",
      "species": "Horsea",
      "genus": "Horsea",
      "type": ["water"],
      "candy": 25,
      "evolution": "Seadra",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "117",
      "species": "Seadra",
      "genus": "Horsea",
      "type": ["water"],
      "candy": 100,
      "evolution": "Kingdra",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "118",
      "species": "Goldeen",
      "genus": "Goldeen",
      "type": ["water"],
      "candy": 50,
      "evolution": "Seaking",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "119",
      "species": "Seaking",
      "genus": "Goldeen",
      "type": ["water"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "120",
      "species": "Staryu",
      "genus": "Staryu",
      "type": ["water"],
      "candy": 50,
      "evolution": "Starmie",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "121",
      "species": "Starmie",
      "genus": "Staryu",
      "type": ["water"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "122",
      "species": "Mr. Mime",
      "genus": "Mr. Mime",
      "type": ["psychic", "fairy"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 5
    },
    {
      "pokemonIndex": "123",
      "species": "Scyther",
      "genus": "Scyther",
      "type": ["bug", "flying"],
      "candy": 50,
      "evolution": "Scizor",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 5,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "124",
      "species": "Jynx",
      "genus": "Jynx",
      "type": ["ice", "psychic"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 5
    },
    {
      "pokemonIndex": "125",
      "species": "Electabuzz",
      "genus": "Electabuzz",
      "type": ["electric"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 5
    },
    {
      "pokemonIndex": "126",
      "species": "Magmar",
      "genus": "Magmar",
      "type": ["fire"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 5
    },
    {
      "pokemonIndex": "127",
      "species": "Pinsir",
      "genus": "Pinsir",
      "type": ["bug"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 5,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "128",
      "species": "Tauros",
      "genus": "Tauros",
      "type": ["normal"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "129",
      "species": "Magikarp",
      "genus": "Magikarp",
      "type": ["water"],
      "candy": 400,
      "evolution": "Gyarados",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 1,
      "eggDistance": 2
    },
    {
      "pokemonIndex": "130",
      "species": "Gyarados",
      "genus": "Magikarp",
      "type": ["water", "flying"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 1
    },
    {
      "pokemonIndex": "131",
      "species": "Lapras",
      "genus": "Lapras",
      "type": ["water", "ice"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 5,
      "eggDistance": 10
    },
    {
      "pokemonIndex": "132",
      "species": "Ditto",
      "genus": "Ditto",
      "type": ["normal"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "133",
      "species": "Eevee",
      "genus": "Eevee",
      "type": ["normal"],
      "candy": 50,
      "evolution": ["Vaporeon", "Jolteon", "Flareon", "Espeon", "Umbreon"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 5,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "134",
      "species": "Vaporeon",
      "genus": "Eevee",
      "type": ["water"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 5
    },
    {
      "pokemonIndex": "135",
      "species": "Jolteon",
      "genus": "Eevee",
      "type": ["electric"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 5
    },
    {
      "pokemonIndex": "136",
      "species": "Flareon",
      "genus": "Eevee",
      "type": ["fire"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 5
    },
    {
      "pokemonIndex": "137",
      "species": "Porygon",
      "genus": "Porygon",
      "type": ["normal"],
      "candy": 50,
      "evolution": "Porygon2",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 3,
      "eggDistance": 10
    },
    {
      "pokemonIndex": "138",
      "species": "Omanyte",
      "genus": "Omanyte",
      "type": ["rock", "water"],
      "candy": 50,
      "evolution": "Omastar",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 5,
      "eggDistance": 10
    },
    {
      "pokemonIndex": "139",
      "species": "Omastar",
      "genus": "Omanyte",
      "type": ["rock", "water"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 5
    },
    {
      "pokemonIndex": "140",
      "species": "Kabuto",
      "genus": "Kabuto",
      "type": ["rock", "water"],
      "candy": 50,
      "evolution": "Kabutops",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 5,
      "eggDistance": 10
    },
    {
      "pokemonIndex": "141",
      "species": "Kabutops",
      "genus": "Kabuto",
      "type": ["rock", "water"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 5
    },
    {
      "pokemonIndex": "142",
      "species": "Aerodactyl",
      "genus": "Aerodactyl",
      "type": ["rock", "flying"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 5,
      "eggDistance": 10
    },
    {
      "pokemonIndex": "143",
      "species": "Snorlax",
      "genus": "Snorlax",
      "type": ["normal"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 5,
      "eggDistance": 10
    },
    {
      "pokemonIndex": "144",
      "species": "Articuno",
      "genus": "Articuno",
      "type": ["ice", "flying"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 20,
      "legendary": true
    },
    {
      "pokemonIndex": "145",
      "species": "Zapdos",
      "genus": "Zapdos",
      "type": ["electric", "flying"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 20,
      "legendary": true
    },
    {
      "pokemonIndex": "146",
      "species": "Moltres",
      "genus": "Moltres",
      "type": ["fire", "flying"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 20,
      "legendary": true
    },
    {
      "pokemonIndex": "147",
      "species": "Dratini",
      "genus": "Dratini",
      "type": ["dragon"],
      "candy": 25,
      "evolution": "Dragonair",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 5,
      "eggDistance": 10
    },
    {
      "pokemonIndex": "148",
      "species": "Dragonair",
      "genus": "Dratini",
      "type": ["dragon"],
      "candy": 100,
      "evolution": "Dragonite",
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 5
    },
    {
      "pokemonIndex": "149",
      "species": "Dragonite",
      "genus": "Dratini",
      "type": ["dragon", "flying"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 5
    },
    {
      "pokemonIndex": "150",
      "species": "Mewtwo",
      "genus": "Mewtwo",
      "type": ["psychic"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 20,
      "legendary": true
    },
    {
      "pokemonIndex": "151",
      "species": "Mew",
      "genus": "Mew",
      "type": ["psychic"],
      "gen": 1,
      "region": "Kanto",
      "buddyDistance": 20,
      "legendary": true
    },
    {
      "pokemonIndex": "152",
      "species": "Chikorita",
      "genus": "Chikorita",
      "type": ["grass"],
      "candy": 25,
      "evolution": "Bayleef",
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 3,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "153",
      "species": "Bayleef",
      "genus": "Chikorita",
      "type": ["grass"],
      "candy": 100,
      "evolution": "Meganium",
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "154",
      "species": "Meganium",
      "genus": "Chikorita",
      "type": [""],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "155",
      "species": "Cyndaquil",
      "genus": "Cyndaquil",
      "type": ["fire"],
      "candy": 25,
      "evolution": "Quilava",
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 3,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "156",
      "species": "Quilava",
      "genus": "Cyndaquil",
      "type": ["fire"],
      "candy": 100,
      "evolution": "Typhlosion",
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "157",
      "species": "Typhlosion",
      "genus": "Cyndaquil",
      "type": ["fire"],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "158",
      "species": "Totodile",
      "genus": "Totodile",
      "type": ["water"],
      "candy": 25,
      "evolution": "Croconaw",
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 3,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "159",
      "species": "Croconaw",
      "genus": "Totodile",
      "type": ["water"],
      "candy": 100,
      "evolution": "Feraligatr",
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "160",
      "species": "Feraligatr",
      "genus": "Totodile",
      "type": ["water"],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "161",
      "species": "Sentret",
      "genus": "Sentret",
      "type": ["normal"],
      "candy": 25,
      "evolution": "Furret",
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 1
    },
    {
      "pokemonIndex": "162",
      "species": "Furret",
      "genus": "Sentret",
      "type": ["normal"],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 1
    },
    {
      "pokemonIndex": "163",
      "species": "Hoothoot",
      "genus": "Hoothoot",
      "type": ["normal", "flying"],
      "candy": 50,
      "evolution": "Noctowl",
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 1
    },
    {
      "pokemonIndex": "164",
      "species": "Noctowl",
      "genus": "Hoothoot",
      "type": ["normal", "flying"],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 1
    },
    {
      "pokemonIndex": "165",
      "species": "Ledyba",
      "genus": "Ledyba",
      "type": ["bug", "flying"],
      "candy": 50,
      "evolution": "Ledian",
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 1
    },
    {
      "pokemonIndex": "166",
      "species": "Ledian",
      "genus": "Ledyba",
      "type": ["bug", "flying"],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 1
    },
    {
      "pokemonIndex": "167",
      "species": "Spinarak",
      "genus": "Spinarak",
      "type": ["bug", "poison"],
      "candy": 50,
      "evolution": "Ariados",
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 1,
      "eggDistance": 2
    },
    {
      "pokemonIndex": "168",
      "species": "Ariados",
      "genus": "Spinarak",
      "type": ["bug", "poison"],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 1
    },
    {
      "pokemonIndex": "169",
      "species": "Crobat",
      "genus": "Zubat",
      "type": ["poison", "flying"],
      "gen": 2,
      "region": "distance",
      "buddyDistance": 1
    },
    {
      "pokemonIndex": "170",
      "species": "Chinchou",
      "genus": "Chinchou",
      "type": ["poison", "flying"],
      "candy": 50,
      "evolution": "Lanturn",
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 3,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "170",
      "species": "Lanturn",
      "genus": "Chinchou",
      "type": [""],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "172",
      "species": "Pichu",
      "genus": "Pikachu",
      "type": ["electric"],
      "candy": 25,
      "evolution": "Pikachu",
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 1,
      "eggDistance": 2
    },
    {
      "pokemonIndex": "173",
      "species": "Cleffa",
      "genus": "Cleffa",
      "type": ["fairy"],
      "candy": 25,
      "evolution": "Clefairy",
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 1,
      "eggDistance": 2
    },
    {
      "pokemonIndex": "174",
      "species": "Igglybuff",
      "genus": "Igglybuff",
      "type": ["normal", "fairy"],
      "candy": 25,
      "evolution": "Jigglypuff",
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 1,
      "eggDistance": 2
    },
    {
      "pokemonIndex": "175",
      "species": "Togepi",
      "genus": "Togepi",
      "type": ["fairy"],
      "candy": 25,
      "evolution": "Togetic",
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 3,
      "eggDistance": 2
    },
    {
      "pokemonIndex": "176",
      "species": "Togetic",
      "genus": "Togepi",
      "type": ["fairy", "flying"],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "177",
      "species": "Natu",
      "genus": "Natu",
      "type": ["psychic", "flying"],
      "candy": 50,
      "evolution": "Xatu",
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 3,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "178",
      "species": "Natu",
      "genus": "Xatu",
      "type": ["psychic", "flying"],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "179",
      "species": "Mareep",
      "genus": "Mareep",
      "type": ["electric"],
      "candy": 25,
      "evolution": "Flaaffy",
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 5,
      "eggDistance": 10
    },
    {
      "pokemonIndex": "180",
      "species": "Flaaffy",
      "genus": "Mareep",
      "type": ["electric"],
      "candy": 100,
      "evolution": "Ampharos",
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 5
    },
    {
      "pokemonIndex": "181",
      "species": "Ampharos",
      "genus": "Mareep",
      "type": ["electric"],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 5
    },
    {
      "pokemonIndex": "182",
      "species": "Bellossom",
      "genus": "Oddish",
      "type": ["grass"],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "183",
      "species": "Marill",
      "genus": "Marill",
      "type": ["water", "fairy"],
      "candy": 25,
      "evolution": "Azumarill",
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 3,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "184",
      "species": "Azumarill",
      "genus": "Marill",
      "type": ["water", "fairy"],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "185",
      "species": "Sudowoodo",
      "genus": "Sudowoodo",
      "type": ["rock"],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 5,
      "eggDistance": 10
    },
    {
      "pokemonIndex": "186",
      "species": "Hoppip",
      "genus": "Hoppip",
      "type": ["grass", "flying"],
      "candy": 25,
      "evolution": "Skiploom",
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 3,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "188",
      "species": "Skiploom",
      "genus": "Skiploom",
      "type": ["grass", "flying"],
      "candy": 100,
      "evolution": "Jumpluff",
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "190",
      "species": "Aipom",
      "genus": "Aipom",
      "type": ["normal"],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 3,
      "eggDistance": 2
    },
    {
      "pokemonIndex": "191",
      "species": "Sunkern",
      "genus": "Sunkern",
      "type": ["grass"],
      "candy": 50,
      "evolution": "Sunflora",
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "192",
      "species": "Sunflora",
      "genus": "Sunkern",
      "type": ["grass"],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "193",
      "species": "Yanma",
      "genus": "Yanma",
      "type": ["bug", "flying"],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "194",
      "species": "Wooper",
      "genus": "Wooper",
      "type": ["water", "ground"],
      "candy": 50,
      "evolution": "Quagsire",
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 3,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "195",
      "species": "Quagsire",
      "genus": "Quagsire",
      "type": ["water", "ground"],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "196",
      "species": "Espeon",
      "genus": "Eevee",
      "type": ["psychic"],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 5
    },
    {
      "pokemonIndex": "197",
      "species": "Umbreon",
      "genus": "Eevee",
      "type": ["dark"],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 5
    },
    {
      "pokemonIndex": "198",
      "species": "Murkrow",
      "genus": "Murkrow",
      "type": ["dark", "flying"],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "199",
      "species": "Slowking",
      "genus": "Slowbro",
      "type": ["water", "psychic"],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "200",
      "species": "Misdreavus",
      "genus": "Misdreavus",
      "type": ["ghost"],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "201",
      "species": "Unown",
      "genus": "Unown",
      "type": ["Psychic"],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 5
    },
    {
      "pokemonIndex": "202",
      "species": "Wobbuffet",
      "genus": "Wobbuffet",
      "type": ["Psychic"],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 3,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "203",
      "species": "Girafarig",
      "genus": "Girafarig",
      "type": ["normal", "psychic"],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 3,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "204",
      "species": "Pineco",
      "genus": "Pineco",
      "type": ["bug"],
      "candy": 50,
      "evolution": "Forretress",
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 5,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "205",
      "species": "Forretress",
      "genus": "Pineco",
      "type": ["bug", "steel"],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 5
    },
    {
      "pokemonIndex": "206",
      "species": "Dunsparce",
      "genus": "Dunsparce",
      "type": ["normal"],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 3,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "207",
      "species": "Gligar",
      "genus": "Gligar",
      "type": ["ground", "flying"],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 5,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "208",
      "species": "Steelix",
      "genus": "Onix",
      "type": ["steel"],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 5
    },
    {
      "pokemonIndex": "209",
      "species": "Snubbull",
      "genus": "Snubbull",
      "type": ["fairy"],
      "candy": 50,
      "evolution": "Granbull",
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 3,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "210",
      "species": "Granbull",
      "genus": "Snubbull",
      "type": ["fairy"],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "211",
      "species": "Qwilfish",
      "genus": "Qwilfish",
      "type": ["water", "poison"],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 3,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "212",
      "species": "Scizor",
      "genus": "Scyther",
      "type": ["bug"],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 5
    },
    {
      "pokemonIndex": "213",
      "species": "Shuckle",
      "genus": "Shuckle",
      "type": ["bug", "rock"],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 3,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "214",
      "species": "Heracross",
      "genus": "Heracross",
      "type": ["bug"],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "215",
      "species": "Sneasel",
      "genus": "Sneasel",
      "type": ["dark", "ice"],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 3,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "216",
      "species": "Teddiursa",
      "genus": "Teddiursa",
      "type": ["normal"],
      "candy": 50,
      "evolution": "Ursaring",
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 3,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "217",
      "species": "Ursaring",
      "genus": "Teddiursa",
      "type": ["normal"],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "218",
      "species": "Slugma",
      "genus": "Slugma",
      "type": ["fire"],
      "candy": 50,
      "evolution": "Magcargo",
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 1,
      "eggDistance": 2
    },
    {
      "pokemonIndex": "219",
      "species": "Magcargo",
      "genus": "Slugma",
      "type": ["fire"],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 1
    },
    {
      "pokemonIndex": "220",
      "species": "Swinub",
      "genus": "Swinub",
      "type": ["ice", "ground"],
      "candy": 50,
      "evolution": "Piloswine",
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 3,
      "eggDistance": 2
    },
    {
      "pokemonIndex": "221",
      "species": "Piloswine",
      "genus": "Swinub",
      "type": ["ice", "ground"],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "222",
      "species": "Corsola",
      "genus": "Corsola",
      "type": ["water", "rock"],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "223",
      "species": "Remoraid",
      "genus": "Remoraid",
      "type": ["water"],
      "candy": 50,
      "evolution": "Octillery",
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 1,
      "eggDistance": 2
    },
    {
      "pokemonIndex": "224",
      "species": "Octillery",
      "genus": "Remoraid",
      "type": ["water"],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 1
    },
    {
      "pokemonIndex": "225",
      "species": "Delibird",
      "genus": "Delibird",
      "type": ["ice", "flying"],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 5
    },
    {
      "pokemonIndex": "226",
      "species": "Mantine",
      "genus": "Mantine",
      "type": ["water"],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 5,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "227",
      "species": "Skarmory",
      "genus": "Skarmory",
      "type": ["steel", "flying"],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 5,
      "eggDistance": 10
    },
    {
      "pokemonIndex": "228",
      "species": "Houndour",
      "genus": "Houndour",
      "type": ["dark", "fire"],
      "candy": 50,
      "evolution": "Houndoom",
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 3,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "229",
      "species": "Houndoom",
      "genus": "Houndour",
      "type": ["dark", "fire"],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "230",
      "species": "Kingdra",
      "genus": "Kingdra",
      "type": ["water", "dragon"],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "232",
      "species": "Phanpy",
      "genus": "Phanpy",
      "type": ["ground"],
      "candy": 50,
      "evolution": "Donphan",
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 3,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "232",
      "species": "Donphan",
      "genus": "Phanpy",
      "type": ["ground"],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "233",
      "species": "Porygon2",
      "genus": "Porygon2",
      "type": ["normal"],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "234",
      "species": "Stantler",
      "genus": "Stantler",
      "type": ["normal"],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 3,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "236",
      "species": "Tyrogue",
      "genus": "Tyrogue",
      "type": ["fighting"],
      "candy": 25,
      "evolution": ["Hitmonlee", "Hitmonchan", "Hitmontop"],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 5,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "237",
      "species": "Hitmontop",
      "genus": "Tyrogue",
      "type": ["fighting"],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 5
    },
    {
      "pokemonIndex": "238",
      "species": "Smoochum",
      "genus": "Jynx",
      "type": ["ice"],
      "candy": 25,
      "evolution": "Jynx",
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 5,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "239",
      "species": "Elekid",
      "genus": "Electabuzz",
      "type": ["electric"],
      "candy": 25,
      "evolution": "Electabuzz",
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 5,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "240",
      "species": "Magby",
      "genus": "Magmar",
      "type": ["fire"],
      "candy": 25,
      "evolution": "Magmar",
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 5,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "241",
      "species": "Miltank",
      "genus": "Miltank",
      "type": ["normal"],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 5,
      "eggDistance": 10
    },
    {
      "pokemonIndex": "242",
      "species": "Blissey",
      "genus": "Chansey",
      "type": ["normal"],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 5
    },
    {
      "pokemonIndex": "243",
      "species": "Raikou",
      "genus": "Raikou",
      "type": ["electric"],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 20,
      "legendary": true
    },
    {
      "pokemonIndex": "244",
      "species": "Entei",
      "genus": "Entei",
      "type": ["fire"],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 20,
      "legendary": true
    },
    {
      "pokemonIndex": "245",
      "species": "Suicune",
      "genus": "Suicune",
      "type": ["water"],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 20,
      "legendary": true
    },
    {
      "pokemonIndex": "246",
      "species": "Larvitar",
      "genus": "Larvitar",
      "type": ["rock", "ground"],
      "candy": 25,
      "evolution": "Pupitar",
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 5,
      "eggDistance": 10
    },
    {
      "pokemonIndex": "247",
      "species": "Pupitar",
      "genus": "Larvitar",
      "type": ["rock", "ground"],
      "candy": 100,
      "evolution": "Tyranitar",
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 5
    },
    {
      "pokemonIndex": "248",
      "species": "Tyranitar",
      "genus": "Larvitar",
      "type": ["rock", "dark"],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 5
    },
    {
      "pokemonIndex": "249",
      "species": "Lugia",
      "genus": "Lugia",
      "type": ["psychic", "flying"],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 20,
      "legendary": true
    },
    {
      "pokemonIndex": "250",
      "species": "Ho-Oh",
      "genus": "Ho-Oh",
      "type": ["fire", "flying"],
      "gen": 2,
      "region": "Johto",
      "buddyDistance": 20,
      "legendary": true
    },
    {
      "pokemonIndex": "252",
      "species": "Treecko",
      "genus": "Treecko",
      "type": ["grass"],
      "candy": 25,
      "evolution": "Grovyle",
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 3,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "253",
      "species": "Grovyle",
      "genus": "Treecko",
      "type": ["grass"],
      "candy": 100,
      "evolution": "Sceptile",
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "254",
      "species": "Sceptile",
      "genus": "Treecko",
      "type": ["grass"],
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "255",
      "species": "Torchic",
      "genus": "Torchic",
      "type": ["fire"],
      "candy": 25,
      "evolution": "Combusken",
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 3,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "256",
      "species": "Combusken",
      "genus": "Torchic",
      "type": ["fire", "fighting"],
      "candy": 100,
      "evolution": "Blaziken",
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "257",
      "species": "Blaziken",
      "genus": "Torchic",
      "type": ["fire", "fighting"],
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "258",
      "species": "Mudkip",
      "genus": "Mudkip",
      "type": ["water"],
      "candy": 25,
      "evolution": "Marshtomp",
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 3,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "259",
      "species": "Marshtomp",
      "genus": "Mudkip",
      "type": ["water", "ground"],
      "candy": 100,
      "evolution": "Swampert",
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "260",
      "species": "Swampert",
      "genus": "Mudkip",
      "type": ["water", "ground"],
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "261",
      "species": "Poochyena",
      "genus": "Poochyena",
      "type": ["dark"],
      "candy": 50,
      "evolution": "Mightyena",
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 1,
      "eggDistance": 1
    },
    {
      "pokemonIndex": "262",
      "species": "Mightyena",
      "genus": "Poochyena",
      "type": ["dark"],
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 1
    },
    {
      "pokemonIndex": "263",
      "species": "Zigzagoon",
      "genus": "Zigzagoon",
      "type": ["normal"],
      "candy": 50,
      "evolution": "Linoone",
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 1,
      "eggDistance": 2
    },
    {
      "pokemonIndex": "264",
      "species": "Linoone",
      "genus": "Zigzagoon",
      "type": ["normal"],
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 1
    },
    {
      "pokemonIndex": "265",
      "species": "Wurmple",
      "genus": "Wurmple",
      "type": ["bug"],
      "candy": 12,
      "evolution": ["Silcoon", "Cascoon"],
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 1,
      "eggDistance": 2
    },
    {
      "pokemonIndex": "266",
      "species": "Silcoon",
      "genus": "Wurmple",
      "type": ["bug"],
      "candy": 50,
      "evolution": "Beautifly",
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 1
    },
    {
      "pokemonIndex": "267",
      "species": "Beautifly",
      "genus": "Wurmple",
      "type": ["bug", "flying"],
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 1
    },
    {
      "pokemonIndex": "268",
      "species": "Cascoon",
      "genus": "Wurmple",
      "type": ["bug"],
      "candy": 50,
      "evolution": "Dustox",
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 1
    },
    {
      "pokemonIndex": "269",
      "species": "Dustox",
      "genus": "Wurmple",
      "type": ["bug", "flying"],
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 1
    },
    {
      "pokemonIndex": "270",
      "species": "Lotad",
      "genus": "Lotad",
      "type": ["water", "grass"],
      "candy": 25,
      "evolution": "Lombre",
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 3,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "271",
      "species": "Lombre",
      "genus": "Lotad",
      "type": ["water", "grass"],
      "candy": 100,
      "evolution": "Ludicolo",
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "272",
      "species": "Ludicolo",
      "genus": "Lotad",
      "type": ["water", "grass"],
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "273",
      "species": "Seedot",
      "genus": "Seedot",
      "type": ["grass"],
      "candy": 25,
      "evolution": "Nuzleaf",
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 3,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "274",
      "species": "Nuzleaf",
      "genus": "Seedot",
      "type": ["grass", "dark"],
      "candy": 100,
      "evolution": "Shiftry",
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "275",
      "species": "Shiftry",
      "genus": "Seedot",
      "type": ["grass", "dark"],
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "276",
      "species": "Taillow",
      "genus": "Taillow",
      "type": ["normal", "flying"],
      "candy": 50,
      "evolution": "Swellow",
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 1,
      "eggDistance": 2
    },
    {
      "pokemonIndex": "277",
      "species": "Swellow",
      "genus": "Taillow",
      "type": ["normal", "flying"],
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 1
    },
    {
      "pokemonIndex": "278",
      "species": "Wingull",
      "genus": "Wingull",
      "type": ["water", "flying"],
      "candy": 50,
      "evolution": "Pelipper",
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 1,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "279",
      "species": "Pelipper",
      "genus": "Wingull",
      "type": ["water", "flying"],
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 1
    },
    {
      "pokemonIndex": "280",
      "species": "Ralts",
      "genus": "Ralts",
      "type": ["psychic", "fairy"],
      "candy": 25,
      "evolution": "Kirlia",
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 5,
      "eggDistance": 10
    },
    {
      "pokemonIndex": "281",
      "species": "Kirlia",
      "genus": "Ralts",
      "type": ["psychic", "fairy"],
      "candy": 100,
      "evolution": "Gardevoir",
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 5
    },
    {
      "pokemonIndex": "282",
      "species": "Gardevoir",
      "genus": "Ralts",
      "type": ["psychic", "fairy"],
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 5
    },
    {
      "pokemonIndex": "283",
      "species": "Surskit",
      "genus": "Surskit",
      "type": ["bug", "water"],
      "candy": 50,
      "evolution": "Masquerain",
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 1,
      "eggDistance": 2
    },
    {
      "pokemonIndex": "284",
      "species": "Masquerain",
      "genus": "Surskit",
      "type": ["bug", "flying"],
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 1
    },
    {
      "pokemonIndex": "285",
      "species": "Shroomish",
      "genus": "Shroomish",
      "type": ["grass"],
      "candy": 50,
      "evolution": "Breloom",
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 3,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "286",
      "species": "Breloom",
      "genus": "Shroomish",
      "type": ["grass", "fighting"],
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "287",
      "species": "Skaloth",
      "genus": "Skaloth",
      "type": ["normal"],
      "candy": 25,
      "evolution": "Vigoroth",
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 5,
      "eggDistance": 10
    },
    {
      "pokemonIndex": "288",
      "species": "Vigoroth",
      "genus": "Skaloth",
      "type": ["normal"],
      "candy": 100,
      "evolution": "Slaking",
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 5
    },
    {
      "pokemonIndex": "289",
      "species": "Slaking",
      "genus": "Skaloth",
      "type": ["normal"],
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 5
    },
    {
      "pokemonIndex": "293",
      "species": "Whismur",
      "genus": "Whismur",
      "type": ["normal"],
      "candy": 25,
      "evolution": "Loudred",
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 1,
      "eggDistance": 2
    },
    {
      "pokemonIndex": "294",
      "species": "Loudred",
      "genus": "Whismur",
      "type": ["normal"],
      "candy": 100,
      "evolution": "Exploud",
      "gen": 3,
      "region": "Hoenn"
    },
    {
      "pokemonIndex": "295",
      "species": "Exploud",
      "genus": "Whismur",
      "type": ["normal"],
      "gen": 3,
      "region": "Hoenn"
    },
    {
      "pokemonIndex": "296",
      "species": "Makuhita",
      "genus": "Makuhita",
      "type": ["fighting"],
      "candy": 50,
      "evolution": "Hariyama",
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 3,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "297",
      "species": "Hariyama",
      "genus": "Makuhita",
      "type": ["fighting"],
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "298",
      "species": "Azurill",
      "genus": "Marill",
      "type": ["normal"],
      "candy": 25,
      "evolution": "Marill",
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 3,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "299",
      "species": "Nosepass",
      "genus": "Nosepass",
      "type": ["rock"],
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 3,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "300",
      "species": "Skitty",
      "genus": "Skitty",
      "type": ["normal"],
      "candy": 50,
      "evolution": "Delcatty",
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 3,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "301",
      "species": "Delcatty",
      "genus": "Skitty",
      "type": ["normal"],
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 3,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "302",
      "species": "Sableye",
      "genus": "Sableye",
      "type": ["dark", "ghost"],
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 5,
      "eggDistance": 10
    },
    {
      "pokemonIndex": "303",
      "species": "Mawile",
      "genus": "Mawile",
      "type": ["steel", "fairy"],
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 5,
      "eggDistance": 10
    },
    {
      "pokemonIndex": "304",
      "species": "Aron",
      "genus": "Aron",
      "type": ["steel", "rock"],
      "candy": 25,
      "evolution": "Lairon",
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 1
    },
    {
      "pokemonIndex": "305",
      "species": "Lairon",
      "genus": "Aron",
      "type": ["steel", "rock"],
      "candy": 100,
      "evolution": "Aggron",
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 1
    },
    {
      "pokemonIndex": "306",
      "species": "Aggron",
      "genus": "Aron",
      "type": ["steel", "rock"],
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 1
    },
    {
      "pokemonIndex": "307",
      "species": "Meditite",
      "genus": "Meditite",
      "type": ["fighting", "psychic"],
      "candy": 50,
      "evolution": "Medicham",
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 3,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "308",
      "species": "Medicham",
      "genus": "Meditite",
      "type": ["fighting", "psychic"],
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "309",
      "species": "Electrike",
      "genus": "Electrike",
      "type": ["electric"],
      "candy": 50,
      "evolution": "Manectric",
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 3,
      "eggDistance": 5
    },
    {
      "pokemonIndex": "310",
      "species": "Manectric",
      "genus": "Electrike",
      "type": ["electric"],
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "311",
      "species": "Plusle",
      "genus": "Plusle",
      "type": ["electric"],
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "312",
      "species": "Minun",
      "genus": "Minun",
      "type": ["electric"],
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "313",
      "species": "Volbeat",
      "genus": "Volbeat",
      "type": ["bug"],
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "314",
      "species": "Illumise",
      "genus": "Illumise",
      "type": ["bug"],
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "315",
      "species": "Roselia",
      "genus": "Roselia",
      "type": ["grass", "poison"],
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 3
    },
    {
      "pokemonIndex": "316",
      "species": "Gulpin",
      "genus": "Gulpin",
      "type": ["poison"],
      "candy": 50,
      "evolution": "Swalot",
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 1,
      "eggDistance": 2
    },
    {
      "pokemonIndex": "317",
      "species": "Swalot",
      "genus": "Gulpin",
      "type": ["poison"],
      "gen": 3,
      "region": "Hoenn",
      "buddyDistance": 1
    },
    {
     "pokemonIndex": "318",
     "species": "Carvanha",
     "genus": "Carvanha",
     "type": ["water", "dark"],
     "candy": 50,
     "evolution": "Sharpedo",
     "gen": 3,
     "region": "Hoenn",
     "buddyDistance": 3
    },
    {
     "pokemonIndex": "319",
     "species": "Sharpedo",
     "genus": "Carvanha",
     "type": ["water", "dark"],
     "gen": 3,
     "region": "Hoenn",
     "buddyDistance": 3
    },
    {
     "pokemonIndex": "320",
     "species": "Wailmer",
     "genus": "Wailmer",
     "type": ["water"],
     "candy": 400,
     "evolution": "Wailord",
     "gen": 3,
     "region": "Hoenn",
     "buddyDistance": 1,
     "eggDistance": 2
   },
    {
     "pokemonIndex": "321",
     "species": "Wailord",
     "genus": "Wailmer",
     "type": ["water"],
     "gen": 3,
     "region": "Hoenn",
     "buddyDistance": 1
   },
   {
    "pokemonIndex": "322",
    "species": "Numel",
    "genus": "Numel",
    "type": ["fire", "ground"],
    "candy": 50,
    "evolution": "Camerupt",
    "gen": 3,
    "region": "Hoenn",
    "buddyDistance": 3,
    "eggDistance": 5
    },
   {
    "pokemonIndex": "323",
    "species": "Camerupt",
    "genus": "Numel",
    "type": ["fire", "ground"],
    "gen": 3,
    "region": "Hoenn",
    "buddyDistance": 3
    },
    {
     "pokemonIndex": "324",
     "species": "Torkoal",
     "genus": "Torkoal",
     "type": ["fire"],
     "gen": 3,
     "region": "Hoenn",
     "buddyDistance": 3
   },
   {
    "pokemonIndex": "325",
    "species": "Spoink",
    "genus": "Spoink",
    "type": ["psychic"],
    "candy": 50,
    "evolution": "Grumpig",
    "gen": 3,
    "region": "Hoenn",
    "buddyDistance": 1,
    "eggDistance": 2
    },
   {
    "pokemonIndex": "326",
    "species": "Grumpig",
    "genus": "Spoink",
    "type": ["psychic"],
    "evolution": "Grumpig",
    "gen": 3,
    "region": "Hoenn",
    "buddyDistance": 1
    },
    {
     "pokemonIndex": "328",
     "species": "Trapinch",
     "genus": "Trapinch",
     "type": ["ground"],
     "candy": 25,
     "evolution": "Vibrava",
     "gen": 3,
     "region": "Hoenn",
     "buddyDistance": 5,
     "eggDistance": 10
    },
    {
     "pokemonIndex": "329",
     "species": "Vibrava",
     "genus": "Trapinch",
     "type": ["ground", "dragon"],
     "candy": 100,
     "evolution": "Flygon",
     "gen": 3,
     "region": "Hoenn",
     "buddyDistance": 5
    },
    {
     "pokemonIndex": "330",
     "species": "Flygon",
     "genus": "Trapinch",
     "type": ["ground", "dragon"],
     "gen": 3,
     "region": "Hoenn",
     "buddyDistance": 5
    },
    {
     "pokemonIndex": "331",
     "species": "Cacnea",
     "genus": "Cacnea",
     "type": ["grass"],
     "candy": 50,
     "evolution": "Cacturne",
     "gen": 3,
     "region": "Hoenn",
     "buddyDistance": 3,
     "eggDistance": 5
    },
    {
     "pokemonIndex": "332",
     "species": "Cacturne",
     "genus": "Cacnea",
     "type": ["grass", "dark"],
     "gen": 3,
     "region": "Hoenn",
     "buddyDistance": 3
    },
    {
     "pokemonIndex": "333",
     "species": "Swablu",
     "genus": "Swablu",
     "type": ["normal", "flying"],
     "candy": 400,
     "evolution": "Altaria",
     "gen": 3,
     "region": "Hoenn",
     "buddyDistance": 1,
     "eggDistance": 2
    },
    {
     "pokemonIndex": "334",
     "species": "Altaria",
     "genus": "Swablu",
     "type": ["dragon", "flying"],
     "gen": 3,
     "region": "Hoenn",
     "buddyDistance": 1
    },
    {
     "pokemonIndex": "335",
     "species": "Zangoose",
     "genus": "Zangoose",
     "type": ["normal"],
     "gen": 3,
     "region": "Hoenn",
     "buddyDistance": 3
    },
    {
     "pokemonIndex": "336",
     "species": "Seviper",
     "genus": "Seviper",
     "type": ["poison"],
     "gen": 3,
     "region": "Hoenn",
     "buddyDistance": 3
   },
   {
    "pokemonIndex": "337",
    "species": "Lunatone",
    "genus": "Lunatone",
    "type": ["rock", "psychic"],
    "gen": 3,
    "region": "Hoenn",
    "buddyDistance": 3
    },
    {
     "pokemonIndex": "338",
     "species": "Solrock",
     "genus": "Solrock",
     "type": ["rock", "psychic"],
     "gen": 3,
     "region": "Hoenn",
     "buddyDistance": 3
    },
    {
     "pokemonIndex": "339",
     "species": "Barboach",
     "genus": "Barboach",
     "type": ["water", "ground"],
     "candy": 50,
     "evolution": "Whiscash",
     "gen": 3,
     "region": "Hoenn",
     "buddyDistance": 1,
     "eggDistance": 2
    },
    {
     "pokemonIndex": "340",
     "species": "Whiscash",
     "genus": "Barboach",
     "type": ["water", "ground"],
     "gen": 3,
     "region": "Hoenn",
     "buddyDistance": 1
    },
    {
     "pokemonIndex": "341",
     "species": "Corphish",
     "genus": "Corphish",
     "type": ["water"],
     "candy": 50,
     "evolution": "Crawdaunt",
     "gen": 3,
     "region": "Hoenn",
     "buddyDistance": 3,
     "eggDistance": 5
    },
    {
     "pokemonIndex": "342",
     "species": "Crawdaunt",
     "genus": "Corphish",
     "type": ["water", "dark"],
     "gen": 3,
     "region": "Hoenn",
     "buddyDistance": 3
    },
    {
     "pokemonIndex": "343",
     "species": "Baltoy",
     "genus": "Baltoy",
     "type": ["ground", "psychic"],
     "candy": 50,
     "evolution": "Claydol",
     "gen": 3,
     "region": "Hoenn",
     "buddyDistance": 3,
     "eggDistance": 5
    },
    {
     "pokemonIndex": "344",
     "species": "Claydol",
     "genus": "Baltoy",
     "type": ["ground", "psychic"],
     "gen": 3,
     "region": "Hoenn",
     "buddyDistance": 3
    },
    {
     "pokemonIndex": "345",
     "species": "Lileep",
     "genus": "Lileep",
     "type": ["rock", "grass"],
     "candy": 50,
     "evolution": "Cradily",
     "gen": 3,
     "region": "Hoenn",
     "buddyDistance": 3
    },
    {
     "pokemonIndex": "346",
     "species": "Cradily",
     "genus": "Lileep",
     "type": ["rock", "grass"],
     "gen": 3,
     "region": "Hoenn",
     "buddyDistance": 3
    },
    {
     "pokemonIndex": "347",
     "species": "Anorith",
     "genus": "Anorith",
     "type": ["rock", "bug"],
     "candy": 50,
     "evolution": "Armaldo",
     "gen": 3,
     "region": "Hoenn",
     "buddyDistance": 3
    },
    {
     "pokemonIndex": "348",
     "species": "Armaldo",
     "genus": "Anorith",
     "type": ["rock", "bug"],
     "candy": 50,
     "region": "Hoenn",
     "buddyDistance": 3
    },
    {
     "pokemonIndex": "349",
     "species": "Feebass",
     "genus": "Feebass",
     "type": ["water"],
     "candy": 100,
     "evolution": "Milotic",
     "gen": 3,
     "region": "Hoenn",
     "buddyDistance": 5,
     "eggDistance": 10
   },
    {
     "pokemonIndex": "350",
     "species": "Milotic",
     "genus": "Feebass",
     "type": ["water"],
     "gen": 3,
     "region": "Hoenn",
     "buddyDistance": 5
   },
   {
    "pokemonIndex": "351",
    "species": "Castform",
    "genus": "Castform",
    "type": ["normal"],
    "gen": 3,
    "region": "Hoenn",
    "buddyDistance": 5
    },
    {
     "pokemonIndex": "353",
     "species": "Shuppet",
     "genus": "Shuppet",
     "type": ["ghost"],
     "candy": 50,
     "evolution": "Banette",
     "gen": 3,
     "region": "Hoenn",
     "buddyDistance": 3,
     "eggDistance": 5
    },
    {
     "pokemonIndex": "354",
     "species": "Banette",
     "genus": "Shuppet",
     "type": ["ghost"],
     "gen": 3,
     "region": "Hoenn",
     "buddyDistance": 3
    },
    {
     "pokemonIndex": "355",
     "species": "Duskull",
     "genus": "Duskull",
     "type": ["ghost"],
     "candy": 50,
     "evolution": "Dusclops",
     "gen": 3,
     "region": "Hoenn",
     "buddyDistance": 3,
     "eggDistance": 5
    },
    {
     "pokemonIndex": "356",
     "species": "Dusclops",
     "genus": "Duskull",
     "type": ["ghost"],
     "gen": 3,
     "region": "Hoenn",
     "buddyDistance": 3
    },
    {
     "pokemonIndex": "357",
     "species": "Tropius",
     "genus": "Tropius",
     "type": ["grass", "flying"],
     "gen": 3,
     "region": "Hoenn",
     "buddyDistance": 5
    },
    {
     "pokemonIndex": "358",
     "species": "Chimecho",
     "genus": "Chimecho",
     "type": ["Psychic"],
     "gen": 3,
     "region": "Hoenn",
     "buddyDistance": 5,
     "eggDistance": 10
    },
    {
     "pokemonIndex": "359",
     "species": "Absol",
     "genus": "Absol",
     "type": ["dark"],
     "gen": 3,
     "region": "Hoenn",
     "buddyDistance": 5
   },
   {
    "pokemonIndex": "360",
    "species": "Wynaut",
    "genus": "Wynaut",
    "type": ["psychic"],
    "candy": 50,
    "evolution": "Wobbuffet",
    "gen": 3,
    "region": "Hoenn",
    "buddyDistance": 3,
    "eggDistance": 5
    },
    {
     "pokemonIndex": "361",
     "species": "Snorunt",
     "genus": "Snorunt",
     "type": ["ice"],
     "candy": 50,
     "evolution": "Glalie",
     "gen": 3,
     "region": "Hoenn",
     "buddyDistance": 3
    },
    {
     "pokemonIndex": "362",
     "species": "Glalie",
     "genus": "Snorunt",
     "type": ["ice"],
     "gen": 3,
     "region": "Hoenn",
     "buddyDistance": 3
    },
    {
     "pokemonIndex": "363",
     "species": "Spheal",
     "genus": "Spheal",
     "type": ["ice", "water"],
     "candy":  25,
     "evolution": "Sealeo",
     "gen": 3,
     "region": "Hoenn",
     "buddyDistance": 3,
     "eggDistance": 2
    },
    {
     "pokemonIndex": "364",
     "species": "Sealeo",
     "genus": "Spheal",
     "type": ["ice", "water"],
     "candy":  100,
     "evolution": "Walrein",
     "gen": 3,
     "region": "Hoenn",
     "buddyDistance": 3
    },
    {
     "pokemonIndex": "365",
     "species": "Walrein",
     "genus": "Spheal",
     "type": ["ice", "water"],
     "gen": 3,
     "region": "Hoenn",
     "buddyDistance": 3
    },
    {
     "pokemonIndex": "369",
     "species": "Relicanth",
     "genus": "Relicanth",
     "type": ["water", "rock"],
     "gen": 3,
     "region": "Hoenn",
     "buddyDistance": 5
    },
    {
     "pokemonIndex": "370",
     "species": "Luvdisc",
     "genus": "Luvdisc",
     "type": ["water"],
     "gen": 3,
     "region": "Hoenn",
     "buddyDistance": 3,
     "eggDistance": 2
    },
    {
     "pokemonIndex": "371",
     "species": "Bagon",
     "genus": "Bagon",
     "type": ["dragon"],
     "candy": 25,
     "evolution": "Shelgon",
     "gen": 3,
     "region": "Hoenn",
     "buddyDistance": 5,
     "eggDistance": 10
   },
    {
     "pokemonIndex": "372",
     "species": "Shelgon",
     "genus": "Bagon",
     "type": ["dragon"],
     "candy": 100,
     "evolution": "Salamence",
     "gen": 3,
     "region": "Hoenn",
     "buddyDistance": 5
   },
    {
     "pokemonIndex": "373",
     "species": "Salamence",
     "genus": "Bagon",
     "type": ["dragon", "flying"],
     "gen": 3,
     "region": "Hoenn",
     "buddyDistance": 5
   },
   {
    "pokemonIndex": "374",
    "species": "Beldum",
    "genus": "Beldum",
    "type": ["steel"],
    "candy": 25,
    "evolution": "Metang",
    "gen": 3,
    "region": "Hoenn",
    "buddyDistance": 5,
    "eggDistance": 10
    },
   {
    "pokemonIndex": "375",
    "species": "Metang",
    "genus": "Beldum",
    "type": ["steel"],
    "candy": 100,
    "evolution": "Metagross",
    "gen": 3,
    "region": "Hoenn",
    "buddyDistance": 5
    },
   {
    "pokemonIndex": "376",
    "species": "Metagross",
    "genus": "Beldum",
    "type": ["steel"],
    "gen": 3,
    "region": "Hoenn",
    "buddyDistance": 5
    }
  ]
}

},{}],2:[function(require,module,exports){
pokemonJson = require('../../pokemon.json');
pokemon = pokemonJson.pokemon;
var util = require('./util.js');
var pokemonSelect = require('./pokemon-select.js');
var pokemonEvolution = require('./pokemon-evolution.js');
var script = require('./script.js');
// selectedPokemon = $('body').attr('data-selection');

var gulp = true;

},{"../../pokemon.json":1,"./pokemon-evolution.js":3,"./pokemon-select.js":4,"./script.js":5,"./util.js":6}],3:[function(require,module,exports){
//Calculate # evolutions possible and XP gained
calculateSum = function(selectedPokemon) {
  var sum1 = 0;
  var sum2 = 0;

  $('.evolvesPossible').each(function() {
    sum1 += parseInt($(this).html());

    //Warn user that roughly 60 evolutions are possible within one luck egg activation
    if (sum1 >= 60 ) {
      $('#eggMessage').html('');
      $('#eggMessage').append('<p class="egg-message">You can only evolve (roughly) 60 Pokémon during one Lucky Egg activation. <br>You may want to get another egg!</p> <a id="removeEggMessage" href="javascript:void(0)" onclick="removeEggMessage();">Got it!</a>');
    } else if (sum1 < 60) {
      $('#eggMessage').html('');
    }
  });
  $('.xpGained').each(function() {
    sum2 += parseInt($(this).html());
  });

  //Add calculations to Evolution Table
  $('#total-1').html(sum1);
  $('#total-2').html(sum2);
  $('#total-3').html(sum2 * 2);
}

// Add Pokémon to Evolution table
addPokemonSpecies = function(selectedPokemon) {
  selectedPokemon = matchElements($('body').attr('data-selection'));

  var tableInner = $('#finalDestination').find('tbody');

  var numberOfPokemon = parseInt($('#pokemonNumber').val(), 10);
  var numberOfCandyHeld = parseInt($('#candyNumber').val(), 10);
  var candyNeeded = numberOfPokemon * selectedPokemon.candy;
  var difCandyNeededHeld = Math.floor(numberOfCandyHeld / selectedPokemon.candy);
  var evolutionsPossible = Math.min(difCandyNeededHeld, numberOfPokemon);


  if (numberOfPokemon === selectedPokemon.candy + 1) {
    $('#metaEvolution').css('display', 'block');
    $('#metaNumCandy').append(selectedPokemon.candy + ' <span class="species-instance">' + selectedPokemon.species + '</span> candy');
    $('#metaEvolveState').append('');
  } else {
    $('#metaEvolution').css('display', 'none');
  }

  //Check wether there's a new evolution taking place
  if ($('#firstEvolve').is(':checked') && evolutionsPossible >= 1) {
    $xpGained = evolutionsPossible * 500 + 500;
  } else {
    $xpGained = evolutionsPossible * 500;
  }

  var rowTemplate = '<tr><td>' + numberOfPokemon + '</td><td class="pokemon-avatar sprite-pokemon' + selectedPokemon.index + '"></td>' + '</td><td class="wide">' + candyNeeded + '</td><td class="wide">' + numberOfCandyHeld + '</td><td class="evolvesPossible">' + evolutionsPossible + '</td><td class="xpGained">' + $xpGained + '</td><td><a id="removeRow" class="circular-button">&#215;</a></td>"</tr>';

  tableInner.append(rowTemplate);
  calculateSum(selectedPokemon);
  resetForm();
}

getPokemonFamily = function(selectedPokemon) {
  matchGenus(selectedPokemon);

}

calculateOptions = function(selectedPokemon, inventory) {
  inventory = parseInt($('#candyNumber').val(), 10);
  var genus = selectedPokemon.genus;
    if(inventory > 0) {

    }
}

// remove row on click
$(document).on('click', '#removeRow', function() {
  $(this).closest('tr').remove();
});

//Redo calculation if user removes a row from the Evolution table
$(document).on('click', $('#removeRow'), function(selectedPokemon) {
  calculateSum(selectedPokemon);
});

},{}],4:[function(require,module,exports){
// ======================================
//  Pokemon Selection Tool Functions
// ======================================

// Remove egg animation time warning
removeEggMessage = function(selectedPokemon) {
  $('#eggMessage').remove();
}

//Add Pokémon avatar
pokemonAvatar = function(selectedPokemon) {
  $("#pokemonAvatars").append('<li class="sprite-pokemon' + selectedPokemon.index + '">' + '</li>');
};

// Generate inputfield to select number of Pokémon to add
pokemonNumberInput = function(selectedPokemon) {
  $('.ui-widget').append('<div class="number-input__wrapper"><label for="pokemonNumber">Number of <span class="species-instance">' + selectedPokemon.species + ':</span></label> <input id="pokemonNumber" type="number" name="pokemonNumber" class="pokemon-number" min="0" value="1"></div>');
}

// Generate inputfield to select Pokémon candy in inventory
pokemonCandyInput = function(selectedPokemon) {
  $('.ui-widget').append('<div class="candy-input__wrapper"><label for="candyNumber">Number of <span class="species-instance">' + selectedPokemon.genus + ' candy in inventory:</span></label> <input id="candyNumber" type="number" name="candyNumber" class="candy-number" min="0" value="1"></div>')
}

// Generate checkbox to indicate a first evolution of the species
pokemonFirstEvolution = function(selectedPokemon) {
  $('.ui-widget').append('<div class="evolution-bonus"><span class="bonus">Adds<br>500 XP!</span><input type="checkbox" name="firstEvolve" id="firstEvolve"><label for="firstEvolve"></label><span>Is this the first time you evolve a <span class="species-instance">' + selectedPokemon.species + '</span>?</span></div>')
}

},{}],5:[function(require,module,exports){
// ======================================
// Document Ready
// ======================================
$(document).ready(function(selectedPokemon) {



  // ======================================
  // Pokemon Input Autocomplete and Selection Process
  // ======================================
  $("#pokemonSelect").autocomplete({
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
  // When a selection is made, return selected Pokemon Family
  // ======================================
  $('#pokemonSelect').on('change', function(e, selectedPokemon, genusArr) {
    selectedPokemon = matchElements(selection);
    $('#userChoice').attr('data-selection', selectedPokemon.species);
    genusArr = matchGenus(selectedPokemon.genus);
    $('.gen').removeClass('hide');

    if ( genusArr.length > 1 ) {
      resetForm();
      $('#familyTree').addClass('active');
      if( genusArr.length > 2 ) {
        $('.evolution2').addClass('active');
      } else {
        $('.evolution2').removeClass('active');
      }
      for(var j = 0; j < genusArr.length; j++) {
        genAvatar = $('.gen .avatar');
        genSpecies = $('.gen h3');
        genAvatar.eq(j).addClass('sprite-pokemon' + genusArr[j].pokemonIndex);
        genSpecies.eq(j).html(genusArr[j].species);
      }
    } else {
      resetForm();
      $('#noEvolution').addClass('active');
      $('#noEvolution .avatar').addClass('sprite-pokemon' + selectedPokemon.pokemonIndex);
      $('#noEvolution .species-instance').html(selectedPokemon.species);
      $('#pokemonSelect').val('');
      return false;
    }
  });

  // ======================================
  // Activate Avatars
  // ======================================
  activateAvatar($('#evolution0Storage'), $('.evolution0 .avatar'));
  activateAvatar($('#evolution1Storage'), $('.evolution1 .avatar'));
  activateAvatar($('#evolution2Storage'), $('.evolution2 .avatar'));

  $('#pokemonSelect').on('change', function() {
    calculateEvolution();
    console.log(getPokemonHeld());
  });

  $('.number-storage').on('change', function() {
    calculateEvolution();
  });

  removePokemon = function() {
    $('.pokemon-delete').on('click', function(){
      console.log('click');
      $(this).parent('.gen').addClass('hide');
      $(this).parent('.gen').find('.avatar').attr('class', 'avatar');
      $(this).parent('.gen').find('h3').html('');
      $(this).parent('.gen').find('.number-storage').val(0);
    });
    if(!$('.pokemon-delete').length) {
      resetForm();
    }
  }

  removePokemon();

  getPokemonHeld = function() {
    var gen0Storage = $('#evolution0Storage').val();
    var gen1Storage = $('#evolution1Storage').val();
    var gen2Storage = $('#evolution2Storage').val();
    var pokemonHeld = [gen0Storage, gen1Storage, gen2Storage];
    return pokemonHeld;
  }
  getPokemonWanted = function() {
    var gen0Storage = $('#evolution0Storage').val();
    var gen1Storage = $('#evolution1Storage').val();
    var gen2Storage = $('#evolution2Storage').val();
    var pokemonHeld = [gen0Storage, gen1Storage, gen2Storage];
    return pokemonHeld;
  }

  calculateEvolution = function(candyInventory, selection) {
    selection = $('#userChoice').attr('data-selection');
    candyInventory = parseInt($('#userChoice').attr('data-candy'));
    var tempInventory;

    candyRequirement1 = parseInt(genusArr[1].candy);
    candyRequirement2 = parseInt(genusArr[2].candy);
    candyRequirementBoth = candyRequirement1 + candyRequirement2;

    babyInventory = $('#evolution0Storage').val();
    teenInventory = $('#evolution1Storage').val();
    adultInventory = $('#evolution1Storage').val();

    if(selectedPokemon != undefined) {

      if ( candyInventory >= candyRequirementBoth && babyInventory > 0 ) {
        evolutions = Math.floor(candyInventory / candyRequirement2) ;
        if( babyInventory <= evolutions ) {
          evolutions = babyInventory;
        }

        $('.evolution2 .avatar').addClass('active');
        $('.evolution2 .evolution-count').html(evolutions);
      } else if ( candyInventory >= candyRequirement2 && teenInventory > 0 ) {
          if ( teenInventory <= evolutions ) {
            evolutions = teenInventory;
          }
        $('.evolution2 .avatar').addClass('active');
        $('.evolution2 .evolution-count').html(evolutions);
      }

      else if ( candyInventory >= candyRequirement1 && babyInventory > 0 ) {
        evolutions = Math.floor(candyInventory / candyRequirement1) ;
        if(babyInventory <= evolutions) {
          evolutions = babyInventory
        }

        $('.evolution1 .avatar').addClass('active');
        $('.evolution1 .evolution-count').html(evolutions);

        candyInventory -= genusArr[1].candy;
        candyInventory++;

      } else {
        $('.evolution1 .avatar, .evolution2 .avatar').removeClass('active');
        $('.evolution1 .evolution-count, .evolution2 .evolution-count').html(0);
      }

    }
  }

  $('#candyNumber').on('change, keyup', function() {
    var candy = parseInt($('#candyNumber').val(), 10);
    $('#userChoice').attr('data-candy', candy);
    calculateEvolution();
  });


}); // Document Ready End

},{}],6:[function(require,module,exports){
// ======================================
// Util
// ======================================

// ======================================
// Get JSON data and parse it towards Autocomplete
// ======================================

 getMapKeyValue = function(obj, key) {
  if (obj.hasOwnProperty(key))
  return obj[key];
  throw new Error("Invalid map key.");
}

getMapKeyArray = function(key){
  var array = [];
  for(var i = 0; i < (pokemonJson.pokemon).length; i++) {
    var value = getMapKeyValue(pokemon[i], key);
    array.push(value);
  }
  return array;
}

matchElements = function (el, selectedPokemon) {
  var pokemonSpeciesArray = getMapKeyArray("species");
  for(var i = 0; i < pokemonSpeciesArray.length; i++) {
    if(el == pokemonSpeciesArray[i]) {
      selectedPokemon = pokemon[i];
    }
  }
  // console.table(selectedPokemon);
  return selectedPokemon;
}

sort = function (prop, arr) {
    prop = prop.split('.');
    var len = prop.length;
    arr.sort(function (a, b) {
        var i = 0;
        var key;

        while( i < len ) {
            key = prop[i];

            if(!a.hasOwnProperty(key)) return 1;
            if(!b.hasOwnProperty(key)) return -1;

            a = a[key];
            b = b[key];
            i++;
        }
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        } else {
            return 0;
        }
    });
    return arr;
};

// Match selected value with object in array
matchGenus = function (genus, index) {
  genusArr = [];
  for(var i = 0; i < pokemon.length; i++) {
    if(pokemon[i].genus == genus) {
      genusArr.push(pokemon[i]);
    }
  }
  sort('candy', genusArr);
  return genusArr;
}

// Overrides the default autocomplete filter function to search only from the beginning of the string
$.ui.autocomplete.filter = function(array, term) {
  var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(term), "i");
  return $.grep(array, function(value) {
    return matcher.test(value.label || value.value || value);
  });
};

//Sort Pokémon Array in select alphabetically
function SortByName(a, b) {
  var aName = a.species.toLowerCase();
  var bName = b.species.toLowerCase();
  return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
};


// ======================================
//  Reset Forms
// ======================================

resetForm = function() {
  $('#pokemonSelect, #pokemonNumber').val('');
  $('#pokemon-desc, .number-input__wrapper, .pokemon-avatar__wrapper li, #pokemonChoice h2, #addPokemonSpecies, .evolution-bonus').remove();
  $('#familyTree').removeClass('active');
  $('#noEvolution').removeClass('active');
  $('.avatar').attr('class', 'avatar');
  return false;
};

resetTable = function() {
  $('#finalDestination').find('tbody').html('');
};

// Reset field
$('#resetPokemonSelect').on('click', function(e) { e.preventDefault(); resetForm(); });
// Reset  table
$('#resetTable').on('click', function(e) { e.preventDefault(); resetTable(); });


// ======================================
//  Tool
// ======================================

activateAvatar = function(el, target) {
  el.on('keyup change', function(){
    num = parseInt(el.val(), 10);
    if(num > 0) {
      target.addClass('active');
    } else if(target.hasClass('active')) {
      return;
    }
    else {
      target.removeClass('active');
    }
  });
}

},{}]},{},[2])

//# sourceMappingURL=all.js.map
