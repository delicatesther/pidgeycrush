function pokemon(species, candy, evolve) {
    this.species = species;
    this.candy = candy;
    this.evolve = evolve;
    this.xp = 500;
    this.label = this.species;
};

var bulbasaur = new pokemon('bulbasaur', 25, true);
var ivysaur = new pokemon('ivysaur', 100, true);
var venusaur = new pokemon('venusaur', 0, false);

var charmander = new pokemon('charmander', 25, true);
var charmeleon = new pokemon('charmeleon', 100, true);
var charizard = new pokemon('charizard', 0, false);

var squirtle = new pokemon('squirtle', 25, true);
var wartortle = new pokemon('wartortle', 100, true);
var blastoise = new pokemon('blastoise', 100, false);

var caterpie = new pokemon('caterpie', 12, true);
var metapod = new pokemon('metapod', 50, true);
var butterfree = new pokemon('butterfree', 0, false);

var weedle = new pokemon('weedle', 12, true);
var kakuna = new pokemon('kakuna', 50, true);
var beedrill = new pokemon('beedrill', 0, false);

var pidgey = new pokemon('pidgey', 12, true);
var pidgeotto = new pokemon('pidgeotto', 50, true);
var pidgeot = new pokemon('pidgeot', 50, false);

var rattata = new pokemon('rattata', 25, true);
var raticate = new pokemon('raticate', 0, false);

var spearow = new pokemon('spearow', 50, true);
var fearow = new pokemon('fearow', 0, false);

var ekans = new pokemon('ekans', 50, true);
var arbok = new pokemon('arbok', 50, false);

var pikachu = new pokemon('pikachu', 50, true);
var raichu = new pokemon('raichu', 0, false);

var sandshrew = new pokemon('sandshrew', 50, true);
var sandslash = new pokemon('sandslash', 0, false);

var nidoranM = new pokemon('nidoranM', 25, true);
var nidorino = new pokemon('nidorino', 100, true);
var nidoking = new pokemon('nidoking', 0, false);

var nidoranF = new pokemon('nidoranF', 25, true);
var nidorina = new pokemon('nidorina', 100, true);
var nidoqueen = new pokemon('nidoqueen', 0, false);

var clefairy = new pokemon('clefairy', 50, true);
var clefable = new pokemon('clefable', 0, false);

var vulpix = new pokemon('vulpix', 50, true);
var ninetales = new pokemon('ninetales', 0, false);

var jigglypuff = new pokemon('jigglypuff', 50, true);
var wigglytuff = new pokemon('wigglytuff', 0, false);

var zubat = new pokemon('zubat', 50, true);
var golbat = new pokemon('golbat', 0, false);

var oddish = new pokemon('oddish', 25, true);
var gloom = new pokemon('gloom', 100, true);
var vileplume = new pokemon('vileplume', 0, false);

var paras = new pokemon('paras', 50, true);
var parasect = new pokemon('parasect', 0, false);

var venonat = new pokemon('venonat', 50, true);
var venomoth = new pokemon('venomoth', 0, false);

var diglett = new pokemon('diglett', 50, true);
var dugtrio = new pokemon('dugtrio', 0, false);

var meowth = new pokemon('meowth', 50, true);
var persian = new pokemon('persian', 0, false);

var psyduck = new pokemon('psyduck', 50, true);
var golduck = new pokemon('golduck', 0, false);

var mankey = new pokemon('mankey', 50, true);
var primeape = new pokemon('primeape', 0, false);

var growlithe = new pokemon('growlithe', 50, true);
var arcanine = new pokemon('arcanine', 0, false);

var poliwag = new pokemon('poliwag', 25, true);
var poliwhirl = new pokemon('poliwhirl', 100, true);
var poliwrath = new pokemon('poliwrath', 0, false);

var abra = new pokemon('abra', 25, true);
var kadabra = new pokemon('kadabra', 100, true);
var alakazam = new pokemon('alakazam', 0, false);

var machop = new pokemon('machop', 25, true);
var machoke = new pokemon('machoke', 100, true);
var machamp = new pokemon('machamp', 0, false);

var bellsprout = new pokemon('bellsprout', 25, true);
var weepinbell = new pokemon('weepinbell', 100, true);
var victreebel = new pokemon('victreebel', 0, false);

var tentacool = new pokemon('tentacool', 50, true);
var tentacruel = new pokemon('tentacruel', 0, false);

var geodude = new pokemon('geodude', 25, true);
var graveler = new pokemon('graveler', 100, true);
var golem = new pokemon('golem', 0, false);

var ponyta = new pokemon('ponyta', 50, true);
var rapidash = new pokemon('rapidash', 0, false);

var slowpoke = new pokemon('slowpoke', 50, true);
var slowbro = new pokemon('slowbro', 0, false);

var magnemite = new pokemon('magnemite', 50, true);
var magneton = new pokemon('magneton', 0, false);

var farfetchd = new pokemon('farfetch\'d', 0, false);

var doduo = new pokemon('doduo', 50, true);
var dodrio = new pokemon('dodrio', 0, false);

var seel = new pokemon('seel', 50, true);
var dewgong = new pokemon('dewgong', 0, false);

var grimer = new pokemon('grimer', 50, true);
var muk = new pokemon('muk', 0, false);

var shellder = new pokemon('shellder', 50, true);
var cloyster = new pokemon('cloyster', 0, false);

var gastly = new pokemon('gastly', 25, true);
var haunter = new pokemon('haunter', 100, true);
var gengar = new pokemon('gengar', 0, false);

var onix = new pokemon('onix', 0, false);

var drowzee = new pokemon('drowzee', 50, true);
var hypno = new pokemon('hypno', 0, false);

var krabby = new pokemon('krabby', 50, true);
var kingler = new pokemon('kingler', 0, false);

var voltorb = new pokemon('voltorb', 50, true);
var electrode = new pokemon('electrode', 0, false);

var exeggcute = new pokemon('exeggcute', 50, true);
var exeggcutor = new pokemon('exeggcutor', 0, false);

var cubone = new pokemon('cubone', 50, true);
var marowak = new pokemon('marowak', 0, false);


var hitmonlee = new pokemon('hitmonlee', 0, false);
var hitmonchan = new pokemon('hitmonchan', 0, false);

var lickitung = new pokemon('lickitung', 0, false);

var koffing = new pokemon('koffing', 50, true);
var weezing = new pokemon('weezing', 0, false);

var rhyhorn = new pokemon('rhyhorn', 50, true);
var rhydon = new pokemon('rhydon', 0, false);

var chansey = new pokemon('chansey', 0, false);

var tangela = new pokemon('tangela', 0, false);

var kangaskhan = new pokemon('kangaskhan', 0, false);

var horsea = new pokemon('horsea', 50, true);
var seadra = new pokemon('seadra', 0, false);

var goldeen = new pokemon('goldeen', 50, true);
var seaking = new pokemon('seaking', 0, false);

var staryu = new pokemon('staryu', 50, true);
var starmie = new pokemon('starmie', 0, false);

var mrMime = new pokemon('mr mime', 0, false);

var scyther = new pokemon('scyther', 0, false);

var jynx = new pokemon('jynx', 0, false);

var electrabuzz = new pokemon('electrabuzz', 0, false);

var magmar = new pokemon('magmar', 0, false);

var pinsir = new pokemon('pinsir', 0, false);

var tauros = new pokemon('tauros', 0, false);

var magikarp = new pokemon('magikarp', 400, true);
var gyarados = new pokemon('gyarados', 0, false);

var lapras = new pokemon('lapras', 0, false);

var ditto = new pokemon('ditto', 0, false);

var eevee = new pokemon('eevee', 25, true);
var vaporeon = new pokemon('vaporeon', 0, false);
var jolteon = new pokemon('jolteon', 0, false);
var flareon = new pokemon('flareon', 0, false);

var porygon = new pokemon('porygon', 0, false);

var omanyte = new pokemon('omanyte', 50, true);
var omastar = new pokemon('omastar', 0, false);

var kabuto = new pokemon('kabuto', 50, true);
var kabutops = new pokemon('kabutops', 0, false);

var aerodactyl = new pokemon('aerodactyl', 0, false);

var snorlax = new pokemon('snorlax', 0, false);

var dratini = new pokemon('dratini', 25, true);
var dragonair = new pokemon('dragonair', 100, true);
var dragonite = new pokemon('dragonite', 0, false);

var mewtwo = new pokemon('mewtwo', 0, false);

var mew = new pokemon('mew', 0, false);

var pokemonArray = [bulbasaur, ivysaur, venusaur, charmander, charmeleon, charizard, squirtle, wartortle, blastoise, caterpie, metapod, butterfree, weedle, kakuna, beedrill, pidgey, pidgeotto, pidgeot, rattata, raticate, spearow, fearow, ekans, arbok, pikachu, raichu, sandshrew, sandslash, nidoranF, nidorina, nidoqueen, nidoranM, nidorino, nidoking, clefairy, clefable, vulpix, ninetales, jigglypuff, wigglytuff, zubat, golbat, oddish, gloom, vileplume, paras, parasect, venonat, venomoth, diglett, dugtrio, meowth, persian, psyduck, golduck, mankey, primeape, growlithe, arcanine, poliwag, poliwhirl, poliwrath, abra, kadabra, alakazam, machop, machoke, machamp, bellsprout, weepinbell, victreebel, tentacool, tentacruel, geodude, graveler, golem, ponyta, rapidash, slowpoke, slowbro, magnemite, magneton, farfetchd, doduo, dodrio, seel, dewgong, grimer, muk, shellder, cloyster, gastly, haunter, gengar, onix, drowzee, hypno, krabby, kingler, voltorb, electrode, exeggcute, exeggcutor, cubone, marowak, hitmonlee, hitmonchan, lickitung, koffing, weezing, rhyhorn, rhydon, chansey, tangela, kangaskhan, horsea, seadra, goldeen, seaking, staryu, starmie, mrMime, scyther, jynx, electrabuzz, magmar, pinsir, tauros, magikarp, gyarados, lapras, ditto, eevee, vaporeon, jolteon, flareon, porygon, omanyte, omastar, kabuto, kabutops, aerodactyl, snorlax, dratini, dragonair, dragonite, mewtwo, mew];
