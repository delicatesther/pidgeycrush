function pokemon(species, candy, candyType, evolve) {
    this.species = species;
    this.candy = candy;
    this.candyType = candyType;
    this.evolve = evolve;
    this.xp = 500;
    this.label = this.species;
    this.resourceName = this.species.replace('\'', '' ).replace(' ', '');
};

var bulbasaur = new pokemon('bulbasaur', 25, 'bulbasaur', true);
var ivysaur = new pokemon('ivysaur', 100, 'bulbasaur', true);
var venusaur = new pokemon('venusaur', 0, 'bulbasaur', false);

var charmander = new pokemon('charmander', 25, 'charmander', true);
var charmeleon = new pokemon('charmeleon', 100, 'charmander', true);
var charizard = new pokemon('charizard', 0, 'charmander', false);

var squirtle = new pokemon('squirtle', 25, 'squirtle', true);
var wartortle = new pokemon('wartortle', 100, 'squirtle', true);
var blastoise = new pokemon('blastoise', 100, 'squirtle', false);

var caterpie = new pokemon('caterpie', 12, 'caterpie', true);
var metapod = new pokemon('metapod', 50, 'caterpie', true);
var butterfree = new pokemon('butterfree', 0, 'caterpie', false);

var weedle = new pokemon('weedle', 12, 'weedle', true);
var kakuna = new pokemon('kakuna', 50, 'weedle', true);
var beedrill = new pokemon('beedrill', 0, 'weedle', false);

var pidgey = new pokemon('pidgey', 12, 'pidgey', true);
var pidgeotto = new pokemon('pidgeotto', 50, 'pidgey', true);
var pidgeot = new pokemon('pidgeot', 50, 'pidgey', false);

var rattata = new pokemon('rattata', 25, 'rattata', true);
var raticate = new pokemon('raticate', 0, 'rattata', false);

var spearow = new pokemon('spearow', 50, 'spearow', true);
var fearow = new pokemon('fearow', 0, 'spearow', false);

var ekans = new pokemon('ekans', 50, 'ekans', true);
var arbok = new pokemon('arbok', 50, 'ekans', false);

var pikachu = new pokemon('pikachu', 50, 'pikachu', true);
var raichu = new pokemon('raichu', 0, 'pikachu', false);

var sandshrew = new pokemon('sandshrew', 50, 'sandshrew', true);
var sandslash = new pokemon('sandslash', 0, 'sandshrew', false);

var nidoranM = new pokemon('nidoranM', 25, 'nidoranM', true);
var nidorino = new pokemon('nidorino', 100, 'nidoranM', true);
var nidoking = new pokemon('nidoking', 0, 'nidoranM', false);

var nidoranF = new pokemon('nidoranF', 25, 'nidoranF', true);
var nidorina = new pokemon('nidorina', 100, 'nidoranF', true);
var nidoqueen = new pokemon('nidoqueen', 0, 'nidoranF', false);

var clefairy = new pokemon('clefairy', 50, 'clefairy', true);
var clefable = new pokemon('clefable', 0, 'clefairy', false);

var vulpix = new pokemon('vulpix', 50, 'vulpix', true);
var ninetales = new pokemon('ninetales', 0, 'vulpix', false);

var jigglypuff = new pokemon('jigglypuff', 50, 'jigglypuff', true);
var wigglytuff = new pokemon('wigglytuff', 0, 'jigglypuff', false);

var zubat = new pokemon('zubat', 50, 'zubat', true);
var golbat = new pokemon('golbat', 0, 'zubat', false);

var oddish = new pokemon('oddish', 25, 'oddish', true);
var gloom = new pokemon('gloom', 100, 'oddish', true);
var vileplume = new pokemon('vileplume', 0, 'oddish', false);

var paras = new pokemon('paras', 50, 'paras', true);
var parasect = new pokemon('parasect', 0, 'paras', false);

var venonat = new pokemon('venonat', 50, 'venonat', true);
var venomoth = new pokemon('venomoth', 0, 'venonat', false);

var diglett = new pokemon('diglett', 50, 'diglett', true);
var dugtrio = new pokemon('dugtrio', 0, 'diglett', false);

var meowth = new pokemon('meowth', 50, 'meowth', true);
var persian = new pokemon('persian', 0, 'meowth', false);

var psyduck = new pokemon('psyduck', 50, 'psyduck', true);
var golduck = new pokemon('golduck', 0, 'psyduck', false);

var mankey = new pokemon('mankey', 50, 'mankey', true);
var primeape = new pokemon('primeape', 0, 'mankey', false);

var growlithe = new pokemon('growlithe', 50, 'growlithe', true);
var arcanine = new pokemon('arcanine', 0, 'growlithe', false);

var poliwag = new pokemon('poliwag', 25, 'poliwag', true);
var poliwhirl = new pokemon('poliwhirl', 100, 'poliwag', true);
var poliwrath = new pokemon('poliwrath', 0, 'poliwag', false);

var abra = new pokemon('abra', 25, 'abra', true);
var kadabra = new pokemon('kadabra', 100, 'abra', true);
var alakazam = new pokemon('alakazam', 0, 'abra', false);

var machop = new pokemon('machop', 25, 'machop', true);
var machoke = new pokemon('machoke', 100, 'machop', true);
var machamp = new pokemon('machamp', 0, 'machop', false);

var bellsprout = new pokemon('bellsprout', 25, 'bellsprout', true);
var weepinbell = new pokemon('weepinbell', 100, 'bellsprout', true);
var victreebel = new pokemon('victreebel', 0, 'bellsprout', false);

var tentacool = new pokemon('tentacool', 50, 'tentacool', true);
var tentacruel = new pokemon('tentacruel', 0, 'tentacool', false);

var geodude = new pokemon('geodude', 25, 'geodude', true);
var graveler = new pokemon('graveler', 100, 'geodude', true);
var golem = new pokemon('golem', 0, 'geodude', false);

var ponyta = new pokemon('ponyta', 50, 'ponyta', true);
var rapidash = new pokemon('rapidash', 0, 'ponyta', false);

var slowpoke = new pokemon('slowpoke', 50, 'slowpoke', true);
var slowbro = new pokemon('slowbro', 0, 'slowpoke', false);

var magnemite = new pokemon('magnemite', 50, 'magnemite', true);
var magneton = new pokemon('magneton', 0, 'magnemite', false);

var farfetchd = new pokemon('farfetch\'d', 0, 'farfetch\'d', false);

var doduo = new pokemon('doduo', 50, 'doduo', true);
var dodrio = new pokemon('dodrio', 0, 'doduo', false);

var seel = new pokemon('seel', 50, 'seel', true);
var dewgong = new pokemon('dewgong', 0, 'seel', false);

var grimer = new pokemon('grimer', 50, 'grimer', true);
var muk = new pokemon('muk', 0, 'grimer', false);

var shellder = new pokemon('shellder', 50, 'shellder', true);
var cloyster = new pokemon('cloyster', 0, 'shellder', false);

var gastly = new pokemon('gastly', 25, 'gastly', true);
var haunter = new pokemon('haunter', 100, 'gastly', true);
var gengar = new pokemon('gengar', 0, 'gastly', false);

var onix = new pokemon('onix', 0, 'onix', false);

var drowzee = new pokemon('drowzee', 50, 'drowzee', true);
var hypno = new pokemon('hypno', 0, 'drowzee', false);

var krabby = new pokemon('krabby', 50, 'krabby', true);
var kingler = new pokemon('kingler', 0, 'krabby', false);

var voltorb = new pokemon('voltorb', 50, 'voltorb', true);
var electrode = new pokemon('electrode', 0, 'voltorb', false);

var exeggcute = new pokemon('exeggcute', 50, 'exeggcute', true);
var exeggcutor = new pokemon('exeggcutor', 0, 'exeggcute', false);

var cubone = new pokemon('cubone', 50, 'cubone', true);
var marowak = new pokemon('marowak', 0, 'cubone', false);


var hitmonlee = new pokemon('hitmonlee', 0, 'hitmonlee', false);
var hitmonchan = new pokemon('hitmonchan', 0, 'hitmonchan', false);

var lickitung = new pokemon('lickitung', 0, 'lickitung', false);

var koffing = new pokemon('koffing', 50, 'koffing', true);
var weezing = new pokemon('weezing', 0, 'koffing', false);

var rhyhorn = new pokemon('rhyhorn', 50, 'rhyhorn', true);
var rhydon = new pokemon('rhydon', 0, 'rhyhorn', false);

var chansey = new pokemon('chansey', 0, 'chansey', false);

var tangela = new pokemon('tangela', 0, 'tangela', false);

var kangaskhan = new pokemon('kangaskhan', 0, 'kangaskhan', false);

var horsea = new pokemon('horsea', 50, 'horsea', true);
var seadra = new pokemon('seadra', 0, 'horsea', false);

var goldeen = new pokemon('goldeen', 50, 'goldeen', true);
var seaking = new pokemon('seaking', 0, 'goldeen',  false);

var staryu = new pokemon('staryu', 50, 'staryu', true);
var starmie = new pokemon('starmie', 0, 'staryu', false);

var mrMime = new pokemon('mr mime', 0, 'mr mime', false);

var scyther = new pokemon('scyther', 0, 'scyther', false);

var jynx = new pokemon('jynx', 0, 'jynx', false);

var electrabuzz = new pokemon('electrabuzz', 0, 'electrabuzz', false);

var magmar = new pokemon('magmar', 0, 'magmar', false);

var pinsir = new pokemon('pinsir', 0, 'pinsir', false);

var tauros = new pokemon('tauros', 0, 'tauros', false);

var magikarp = new pokemon('magikarp', 400, 'magikarp', true);
var gyarados = new pokemon('gyarados', 0, 'magikarp', false);

var lapras = new pokemon('lapras', 0, 'lapras',  false);

var ditto = new pokemon('ditto', 0, 'ditto', false);

var eevee = new pokemon('eevee', 25, 'eevee', true);
var vaporeon = new pokemon('vaporeon', 0, 'eevee', false);
var jolteon = new pokemon('jolteon', 0, 'eevee', false);
var flareon = new pokemon('flareon', 0, 'eevee', false);

var porygon = new pokemon('porygon', 0, 'porygon', false);

var omanyte = new pokemon('omanyte', 50, 'omanyte',  true);
var omastar = new pokemon('omastar', 0, 'omanyte', false);

var kabuto = new pokemon('kabuto', 50, 'kabuto', true);
var kabutops = new pokemon('kabutops', 0, 'kabuto', false);

var aerodactyl = new pokemon('aerodactyl', 0, 'aerodactyl', false);

var snorlax = new pokemon('snorlax', 0, 'snorlax', false);

var dratini = new pokemon('dratini', 25, 'dratini',true);
var dragonair = new pokemon('dragonair', 100, 'dratini', true);
var dragonite = new pokemon('dragonite', 0, 'dratini', false);

var mewtwo = new pokemon('mewtwo', 0, 'mewtwo', false);

var mew = new pokemon('mew', 0, 'mew',  false);

var pokemonArray = [bulbasaur, ivysaur, venusaur, charmander, charmeleon, charizard, squirtle, wartortle, blastoise, caterpie, metapod, butterfree, weedle, kakuna, beedrill, pidgey, pidgeotto, pidgeot, rattata, raticate, spearow, fearow, ekans, arbok, pikachu, raichu, sandshrew, sandslash, nidoranF, nidorina, nidoqueen, nidoranM, nidorino, nidoking, clefairy, clefable, vulpix, ninetales, jigglypuff, wigglytuff, zubat, golbat, oddish, gloom, vileplume, paras, parasect, venonat, venomoth, diglett, dugtrio, meowth, persian, psyduck, golduck, mankey, primeape, growlithe, arcanine, poliwag, poliwhirl, poliwrath, abra, kadabra, alakazam, machop, machoke, machamp, bellsprout, weepinbell, victreebel, tentacool, tentacruel, geodude, graveler, golem, ponyta, rapidash, slowpoke, slowbro, magnemite, magneton, farfetchd, doduo, dodrio, seel, dewgong, grimer, muk, shellder, cloyster, gastly, haunter, gengar, onix, drowzee, hypno, krabby, kingler, voltorb, electrode, exeggcute, exeggcutor, cubone, marowak, hitmonlee, hitmonchan, lickitung, koffing, weezing, rhyhorn, rhydon, chansey, tangela, kangaskhan, horsea, seadra, goldeen, seaking, staryu, starmie, mrMime, scyther, jynx, electrabuzz, magmar, pinsir, tauros, magikarp, gyarados, lapras, ditto, eevee, vaporeon, jolteon, flareon, porygon, omanyte, omastar, kabuto, kabutops, aerodactyl, snorlax, dratini, dragonair, dragonite, mewtwo, mew];
