function pokemon(species, candy, genus, evolution) {
  this.species = species;
  this.candy = candy;
  this.genus = genus;
  this.evolution = evolution;
  this.xp = 500;
  this.label = this.species;
  this.resourceName = this.species.replace('\'', '' ).replace(' ', '');
};

var bulbasaur = new pokemon('bulbasaur', 25, 'bulbasaur', 'ivysaur');
var ivysaur = new pokemon('ivysaur', 100, 'bulbasaur', 'venusaur');
var venusaur = new pokemon('venusaur', 'bulbasaur');

var charmander = new pokemon('charmander', 25, 'charmander', 'charmeleon');
var charmeleon = new pokemon('charmeleon', 100, 'charmander', 'charizard');
var charizard = new pokemon('charizard', 'charmander');

var squirtle = new pokemon('squirtle', 25, 'squirtle', 'wartortle');
var wartortle = new pokemon('wartortle', 100, 'squirtle', 'blastoise');
var blastoise = new pokemon('blastoise', 'squirtle');

var caterpie = new pokemon('caterpie', 12, 'caterpie', 'metapod');
var metapod = new pokemon('metapod', 50, 'caterpie', 'butterfree');
var butterfree = new pokemon('butterfree', 'caterpie');

var weedle = new pokemon('weedle', 12, 'weedle', 'kakuna');
var kakuna = new pokemon('kakuna', 50, 'weedle', 'beedrill');
var beedrill = new pokemon('beedrill','weedle');

var pidgey = new pokemon('pidgey', 12, 'pidgey', 'pidgeotto');
var pidgeotto = new pokemon('pidgeotto', 50, 'pidgey', 'pidgeot');
var pidgeot = new pokemon('pidgeot', 'pidgey');

var rattata = new pokemon('rattata', 25, 'rattata', 'raticate');
var raticate = new pokemon('raticate','rattata');

var spearow = new pokemon('spearow', 50, 'spearow', 'fearow');
var fearow = new pokemon('fearow','spearow');

var ekans = new pokemon('ekans', 50, 'ekans', 'arbok');
var arbok = new pokemon('arbok', 'ekans');

var pikachu = new pokemon('pikachu', 50, 'pichu', 'raichu');
var raichu = new pokemon('raichu','pichu');

var sandshrew = new pokemon('sandshrew', 50, 'sandshrew', 'sandslash');
var sandslash = new pokemon('sandslash','sandshrew');

var nidoranM = new pokemon('nidoranM', 25, 'nidoranM', 'nidorino');
var nidorino = new pokemon('nidorino', 100, 'nidoranM', 'nidoking');
var nidoking = new pokemon('nidoking','nidoranM');

var nidoranF = new pokemon('nidoranF', 25, 'nidoranF', 'nidorina');
var nidorina = new pokemon('nidorina', 100, 'nidoranF', 'nidoqueen');
var nidoqueen = new pokemon('nidoqueen','nidoranF');

var clefairy = new pokemon('clefairy', 50, 'cleffa', 'clefable');
var clefable = new pokemon('clefable','clefairy');

var vulpix = new pokemon('vulpix', 50, 'vulpix', 'ninetales');
var ninetales = new pokemon('ninetales','vulpix');

var jigglypuff = new pokemon('jigglypuff', 50, 'jigglypuff', 'wigglytuff');
var wigglytuff = new pokemon('wigglytuff','jigglypuff');

var zubat = new pokemon('zubat', 50, 'zubat', 'golbat');
var golbat = new pokemon('golbat', 100, 'zubat', 'crobat');

var oddish = new pokemon('oddish', 25, 'oddish', 'gloom');
var gloom = new pokemon('gloom', 100, 'oddish', 'vileplume\/bellossom');
var vileplume = new pokemon('vileplume','oddish');

var paras = new pokemon('paras', 50, 'paras', 'parasect');
var parasect = new pokemon('parasect','paras');

var venonat = new pokemon('venonat', 50, 'venonat', 'venomoth');
var venomoth = new pokemon('venomoth','venonat');

var diglett = new pokemon('diglett', 50, 'diglett', 'dugtrio');
var dugtrio = new pokemon('dugtrio','diglett');

var meowth = new pokemon('meowth', 50, 'meowth', 'persian');
var persian = new pokemon('persian','meowth');

var psyduck = new pokemon('psyduck', 50, 'psyduck', 'golduck');
var golduck = new pokemon('golduck','psyduck');

var mankey = new pokemon('mankey', 50, 'mankey', 'primeape');
var primeape = new pokemon('primeape','mankey');

var growlithe = new pokemon('growlithe', 50, 'growlithe', 'arcanine');
var arcanine = new pokemon('arcanine','growlithe');

var poliwag = new pokemon('poliwag', 25, 'poliwag', 'poliwhirl');
var poliwhirl = new pokemon('poliwhirl', 100, 'poliwag', 'poliwrath\/politoed');
var poliwrath = new pokemon('poliwrath','poliwag');

var abra = new pokemon('abra', 25, 'abra', 'kadabra');
var kadabra = new pokemon('kadabra', 100, 'abra', 'alakazam');
var alakazam = new pokemon('alakazam','abra');

var machop = new pokemon('machop', 25, 'machop', 'machoke');
var machoke = new pokemon('machoke', 100, 'machop', 'machamp');
var machamp = new pokemon('machamp','machop');

var bellsprout = new pokemon('bellsprout', 25, 'bellsprout', 'weepinbell');
var weepinbell = new pokemon('weepinbell', 100, 'bellsprout', 'victreebel');
var victreebel = new pokemon('victreebel','bellsprout');

var tentacool = new pokemon('tentacool', 50, 'tentacool', 'tentacruel');
var tentacruel = new pokemon('tentacruel','tentacool');

var geodude = new pokemon('geodude', 25, 'geodude', 'graveler');
var graveler = new pokemon('graveler', 100, 'geodude', 'golem');
var golem = new pokemon('golem','geodude');

var ponyta = new pokemon('ponyta', 50, 'ponyta', 'rapidash');
var rapidash = new pokemon('rapidash','ponyta');

var slowpoke = new pokemon('slowpoke', 50, 'slowpoke', 'slowbro\/slowking');
var slowbro = new pokemon('slowbro','slowpoke');

var magnemite = new pokemon('magnemite', 50, 'magnemite', 'magneton');
var magneton = new pokemon('magneton','magnemite');

var farfetchd = new pokemon('farfetch\'d','farfetch\'d');

var doduo = new pokemon('doduo', 50, 'doduo', 'dodrio');
var dodrio = new pokemon('dodrio','doduo');

var seel = new pokemon('seel', 50, 'seel', 'dewgong');
var dewgong = new pokemon('dewgong','seel');

var grimer = new pokemon('grimer', 50, 'grimer', 'muk');
var muk = new pokemon('muk','grimer');

var shellder = new pokemon('shellder', 50, 'shellder', 'cloyster');
var cloyster = new pokemon('cloyster','shellder');

var gastly = new pokemon('gastly', 25, 'gastly', 'haunter');
var haunter = new pokemon('haunter', 100, 'gastly', 'gengar');
var gengar = new pokemon('gengar','gastly');

var onix = new pokemon('onix', 50, 'steelix');

var drowzee = new pokemon('drowzee', 50, 'drowzee', 'hypno');
var hypno = new pokemon('hypno','drowzee');

var krabby = new pokemon('krabby', 50, 'krabby', 'kingler');
var kingler = new pokemon('kingler','krabby');

var voltorb = new pokemon('voltorb', 50, 'voltorb', 'electrode');
var electrode = new pokemon('electrode','voltorb');

var exeggcute = new pokemon('exeggcute', 50, 'exeggcute', 'exeggcutor');
var exeggcutor = new pokemon('exeggcutor','exeggcute');

var cubone = new pokemon('cubone', 50, 'cubone', 'marowak');
var marowak = new pokemon('marowak','cubone');


var hitmonlee = new pokemon('hitmonlee','tyrogue');
var hitmonchan = new pokemon('hitmonchan','tyrogue');

var lickitung = new pokemon('lickitung','lickitung');

var koffing = new pokemon('koffing', 50, 'koffing', 'weezing');
var weezing = new pokemon('weezing','koffing');

var rhyhorn = new pokemon('rhyhorn', 50, 'rhyhorn', 'rhydon');
var rhydon = new pokemon('rhydon','rhyhorn');

var chansey = new pokemon('chansey','chansey');

var tangela = new pokemon('tangela','tangela');

var kangaskhan = new pokemon('kangaskhan','kangaskhan');

var horsea = new pokemon('horsea', 50, 'horsea', 'seadra');
var seadra = new pokemon('seadra', 100, 'horsea', 'kingdra');

var goldeen = new pokemon('goldeen', 50, 'goldeen', 'seaking');
var seaking = new pokemon('seaking','goldeen');

var staryu = new pokemon('staryu', 50, 'staryu', 'starmie');
var starmie = new pokemon('starmie','staryu');

var mrMime = new pokemon('mr mime','mr mime');

var scyther = new pokemon('scyther', 50, 'scizor');

var jynx = new pokemon('jynx','smoochum');

var electabuzz = new pokemon('electabuzz','elekid');

var magmar = new pokemon('magmar','magby');

var pinsir = new pokemon('pinsir','pinsir');

var tauros = new pokemon('tauros','tauros');

var magikarp = new pokemon('magikarp', 400, 'magikarp', 'gyarados');
var gyarados = new pokemon('gyarados','magikarp');

var lapras = new pokemon('lapras','lapras');

var ditto = new pokemon('ditto','ditto');

var eevee = new pokemon('eevee', 25, 'eevee', 'vaporeon\/jolteon\/flareon\/espeon\/umbreon');
var vaporeon = new pokemon('vaporeon','eevee');
var jolteon = new pokemon('jolteon','eevee');
var flareon = new pokemon('flareon','eevee');

var porygon = new pokemon('porygon', 50, 'porygon', 'porygon2');

var omanyte = new pokemon('omanyte', 50, 'omanyte', 'omastar');
var omastar = new pokemon('omastar','omanyte');

var kabuto = new pokemon('kabuto', 50, 'kabuto', 'kabutops');
var kabutops = new pokemon('kabutops','kabuto');

var aerodactyl = new pokemon('aerodactyl','aerodactyl');

var snorlax = new pokemon('snorlax','snorlax');

var dratini = new pokemon('dratini', 25, 'dratini', 'dragonair');
var dragonair = new pokemon('dragonair', 100, 'dratini', 'dragonite');
var dragonite = new pokemon('dragonite','dratini');

var mewtwo = new pokemon('mewtwo','mewtwo');

var mew = new pokemon('mew','mew');

var tyrogue = new pokemon('tyrogue', 25, 'tyrogue', 'hitmonlee\/hitmonchan\/hitmontop');

var smoochum = new pokemon('smoochum', 25, 'smoochum', 'jynx');

var elekid = new pokemon('elekid', 25, 'elekid', 'electabuzz');

var magby = new pokemon('magby', 25, 'magby', 'magmar');

var chikorita = new pokemon('chikorita', 25, 'chikorita', 'bayleef');
var bayleef = new pokemon('bayleef', 100, 'chikorita', 'meganium');
var meganium = new pokemon('meganium', 'chikorita');

var cyndaquil = new pokemon('cyndaquil', 25, 'cyndaquil', 'quilava');
var quilava = new pokemon('quilava', 100, 'cyndaquil', 'typhlosion');
var typhlosion = new pokemon('typhlosion', 'cyndaquil');

var totodile = new pokemon('totodile', 25, 'totodile', 'croconaw');
var croconaw = new pokemon('croconaw', 100, 'totodile', 'feraligatr');
var feraligatr = new pokemon('feraligatr', 'totodile');

var sentret = new pokemon('sentret', 25, 'sentret', 'furret');
var furret = new pokemon('furret', 'sentret');

var hoothoot = new pokemon('hoothoot', 50, 'hoothoot', 'noctowl');
var noctowl = new pokemon('noctowl', 'hoothoot');

var ledyba = new pokemon('ledyba', 50, 'ledyba', 'ledian');
var ledian = new pokemon('ledian', 'ledyba');

var spinarak = new pokemon('spinarak', 50, 'spinarak', 'ariados');
var ariados = new pokemon('ariados', 'spinarak');

var crobat = new pokemon('crobat', 'zubat');

var pichu = new pokemon('pichu', 100, 'pichu', 'pikachu');

var cleffa = new pokemon('cleffa', 25, 'cleffa', 'clefairy');

var igglybuff = new pokemon('igglybuff', 25, 'igglybuff', 'jigglypuff');

var togepi = new pokemon('togepi', 50, 'togepi', 'togetic');
var togetic = new pokemon('togetic', 'togepi');

var natu = new pokemon('natu', 50, 'natu', 'xatu');
var xatu = new pokemon('xatu', 'natu');

var mareep = new pokemon('mareep', 25, 'mareep', 'flaaffy');
var flaaffy = new pokemon('flaaffy', 100, 'mareep', 'ampharos');
var ampharos = new pokemon('ampharos', 'mareep');

var bellossom = new pokemon('bellossom', 'oddish');

var marill = new pokemon('marill', 50, 'marill', 'azumarill');
var azumarill = new pokemon('azumarill', 'marill');

var sudowoodo = new pokemon('sudowoodo', 'sudowoodo');

var politoed = new pokemon('politoed', 'poliwag');

var hoppip = new pokemon('hoppip', 25, 'hoppip', 'skiploom');
var skiploom = new pokemon('skiploom', 100, 'hoppip', 'jumpluff');
var jumpluff = new pokemon('jumpluff', 'hoppip');

var aipom = new pokemon('aipom', 'aipom');

var sunkern = new pokemon('sunkern', 50, 'sunkern', 'sunflora');
var sunflora = new pokemon('sunflora', 'sunkern');

var yanma = new pokemon('yanma', 'yanma');

var wooper = new pokemon('wooper', 50, 'wooper', 'quagsire');
var quagsire = new pokemon('quagsire', 'wooper');

var espeon = new pokemon('espeon','eevee');
var umbreon = new pokemon('umbreon','eevee');

var murkrow = new pokemon('murkrow', 'murkrow');

var slowking = new pokemon('slowking', 'slowpoke');

var misdreavus = new pokemon('misdreavus', 'misdreavus');

var unown = new pokemon('unown', 'unown');

var girafarig = new pokemon('girafarig', 'girafarig');

var pineco = new pokemon('pineco', 50, 'pineco', 'forretress');
var forretress = new pokemon('forretress', 'pineco');

var gligar = new pokemon('gligar', 'gligar');

var steelix = new pokemon('steelix', 'onix');

var snubbull = new pokemon('snubbull', 50, 'snubbull', 'granbull');
var granbull = new pokemon('granbull', 'snubbull');

var qwilfish = new pokemon('qwilfish', 'qwilfish');

var scizor = new pokemon('scizor', 'scyther');

var shuckle = new pokemon('shuckle', 'shuckle');

var heracross = new pokemon('heracross', 'heracross');

var sneasel = new pokemon('sneasel', 'sneasel');

var teddiursa = new pokemon('teddiursa', 50, 'teddiursa', 'ursaring');
var ursaring = new pokemon('ursaring', 'teddiursa');

var slugma = new pokemon('slugma', 50, 'slugma', 'magcargo');
var magcargo = new pokemon('magcargo', 'slugma');

var corsola = new pokemon('corsola', 'corsola');

var remoraid = new pokemon('remoraid', 50, 'remoraid', 'octillery');
var octillery = new pokemon('octillery', 'remoraid');

var delibird = new pokemon('delibird', 'delibird');

var mantine = new pokemon('mantine', 'mantine');

var houndour = new pokemon('houndour', 50, 'houndour', 'houndoom');
var houndoom = new pokemon('houndoom', 'houndour');

var kingdra = new pokemon('kingdra', 'horsea');

var phanpy = new pokemon('phanpy', 50, 'phanpy', 'donphan');
var donphan = new pokemon('donphan', 'phanpy');

var porygon2 = new pokemon('porygon2', 'porygon');

var stantler = new pokemon('stantler', 'stantler');

var smeargle = new pokemon('smeargle', 'smeargle');

var hitmontop = new pokemon('hitmontop', 'tyrogue');

var miltank = new pokemon('miltank', 'miltank');

var blissey = new pokemon('blissey', 'blissey');

var raikou = new pokemon('raikou', 'raikou');

var entei = new pokemon('entei', 'entei');

var suicune = new pokemon('suicune', 'suicune');

var larvitar = new pokemon('larvitar', 25, 'larvitar', 'pupitar');
var pupitar = new pokemon('pupitar', 100, 'larvitar', 'tyranitar');
var tyranitar = new pokemon('tyranitar', 'larvitar');

var lugia = new pokemon('lugia', 'lugia');

var hoOh = new pokemon('ho-oh', 'ho-oh');

var celebi = new pokemon('celebi', 'celebi');

var pokemonArray = [];

pokemonArray.push(bulbasaur, ivysaur, venusaur, charmander, charmeleon, charizard, squirtle, wartortle, blastoise, caterpie, metapod, butterfree, weedle, kakuna, beedrill, pidgey, pidgeotto, pidgeot, rattata, raticate, spearow, fearow, ekans, arbok, pikachu, raichu, sandshrew, sandslash, nidoranF, nidorina, nidoqueen, nidoranM, nidorino, nidoking, clefairy, clefable, vulpix, ninetales, jigglypuff, wigglytuff, zubat, golbat, oddish, gloom, vileplume, paras, parasect, venonat, venomoth, diglett, dugtrio, meowth, persian, psyduck, golduck, mankey, primeape, growlithe, arcanine, poliwag, poliwhirl, poliwrath, abra, kadabra, alakazam, machop, machoke, machamp, bellsprout, weepinbell, victreebel, tentacool, tentacruel, geodude, graveler, golem, ponyta, rapidash, slowpoke, slowbro, magnemite, magneton, farfetchd, doduo, dodrio, seel, dewgong, grimer, muk, shellder, cloyster, gastly, haunter, gengar, onix, drowzee, hypno, krabby, kingler, voltorb, electrode, exeggcute, exeggcutor, cubone, marowak, hitmonlee, hitmonchan, lickitung, koffing, weezing, rhyhorn, rhydon, chansey, tangela, kangaskhan, horsea, seadra, goldeen, seaking, staryu, starmie, mrMime, scyther, jynx, electabuzz, magmar, pinsir, tauros, magikarp, gyarados, lapras, ditto, eevee, vaporeon, jolteon, flareon, porygon, omanyte, omastar, kabuto, kabutops, aerodactyl, snorlax, dratini, dragonair, dragonite, tyrogue, smoochum, elekid, magby, mewtwo, mew, chikorita, bayleef, meganium, cyndaquil, quilava, typhlosion, totodile, croconaw, feraligatr, sentret, furret, hoothoot, noctowl, ledyba, ledian, spinarak, ariados, crobat, pichu, cleffa, igglybuff, togepi, togetic, natu, xatu, mareep, flaaffy, ampharos, bellossom, marill, azumarill, hoppip, skiploom, jumpluff, aipom, sunkern, sunflora, yanma, wooper, quagsire, espeon, umbreon, murkrow, slowking, misdreavus, unown, girafarig, pineco, forretress, gligar, steelix, snubbull, granbull, qwilfish, scizor, shuckle, heracross, sneasel, teddiursa, ursaring, slugma, magcargo, corsola, remoraid, octillery, delibird, mantine, houndour, houndoom, phanpy, donphan, porygon2, stantler, smeargle, hitmontop, miltank, blissey, raikou, entei, suicune, larvitar, pupitar, tyranitar, lugia, hoOh, celebi);
