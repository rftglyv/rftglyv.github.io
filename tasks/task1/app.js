let regions = [
	{
		name: "Cəbrayıl",
		libVillages: ["Böyük Mərcanlı", "Nüzgar", "Mehdili", "Çaxırlı", "Aşağı Maralyan", "Şəybəy", "Quycaq", "Karxulu", "Şükürbəyli", "Yuxarı Maralyan", "Çərəkən", "Daşkəsən", "Horovlu", "Decal", "Mahmudlu", "Cəfərabad", "Şıxəli Ağalı", "Sarıcalı", "Məzrə", "Qaracallı", "Süleymanlı", "Əfəndilər", "Qışlaq", "Doşulu", "Soltanlı", "Əmirvarlı", "Maşanlı", "Həsənli", "Əlikeyxanlı", "Qumlaq", "Hacılı", "Göyərçinveysəlli", "Niyazqullar", "Keçəl Məmmədli", "Şahvəlli", "Hacı İsmayıllı", "İsaqlı", "Safarşa", "Həsənqaydı", "Fuğanlı", "İmambağı", "Daş Veysəlli", "Ağtəpə", "Yarəhmədli", "Balyand", "Papı", "Tulus", "Hacılı", "Tinli", "Sirik", "Şıxlar", "Məstalıbəyli", "Dərzili", "Dağ Tumas", "Nüsüs", "Xələfli", "Minbaşılı", "Veysəlli", "Qovşudlu", "Sofulu", "Dağ Maşanlı", "Kürdlər", "Hovuslu", "Çələbilər", "Qazanzəmi", "Xanağabulaq", "Çullu", "Quşçular", "Qaraağac", "Xudaverdili", "Qurbantəpə", "Şahvələdli", "Xubyarlı", "Çaprand", "Hacı İsaqlı", "Qoşabulaq", "Mirək", "Kavdar", "Yuxarı Məzrə", "Yanarhac", "Hüseynalılar", "Söyüdlü", "Aşağı Sirik", "Qalacıq", "Mollahəsənli", "Əsgərxanlı", "Yuxarı Nüsüs", "Aşıq Məlikli", "Niftalılar", "Qərər", "Çələbilər kəndləri"],
	},
	{
		name: "Füzuli",
		libVillages: ["Füzuli şəhəri", "Qaraxanbəyli", "Qərvənd", "Kənd Horadiz", "Yuxarı Əbdürrəhmanlı", "Aşağı Əbdürrəhmanlı", "Yuxarı Güzlək", "Gorazıllı", "Qaradağlı", "Xatunbulaq", "Qarakollu", "Arış kəndi", "Qoçəhmədli", "Çimən", "Cuvarlı", "Pirəhmədli", "Musabəyli", "İşıqlı", "Dədəli", "Dördçinar", "Kürdlər", "Yuxarı Əbdürrəhmanlı", "Qarğabazar", "Aşağı Veysəlli", "Yuxarı Aybasanlı", "Gecəgözlü", "Aşağı Seyidəhmədli", "Zərgər", "Mollavəli", "Yuxarı Rəfədinli", "Aşağı Rəfədinli", "Mandılı", "Yuxarı Veysəlli", "Yuxarı Seyidəhmədli", "Qorqan", "Üçüncü Mahmudlu", "Qacar", "Divanalılar", "Qobu Dilağarda", "Yal Pirəhmədli", "Yuxarı Yağlıvənd", "Dilağarda", "Seyid Mahmudlu", "Ələsgərli", "Aşağı Güzdək", "Qovşatlı", "Mirzəcamallı", "Şəkərcik", "Mərdinli", "Şıxlı", "Qaraməmmədli", "Dövlətyarlı", "Hacılı", "Hüseynbəyli", "Saracıq kəndləri"],
	},
	{
		name: "Zəngilan",
		libVillages: ["Zəngilan şəhəri", "Havalı", "Zərnəli", "Məmmədbəyli", "Həkəri", "Şərifan", "Muğanlı kəndləri", "Mincivan qəsəbəsi", "Xurama", "Xumarlı", "Sarıl", "Babaylı", "Üçüncü Ağalı", "Hacallı", "Qırax Müşlan", "Üdgün", "Turabad", "İçəri Müşlan", "Məlikli", "Cahangirbəyli", "Baharlı", "Kolluqışlaq", "Malatkeşin", "Kənd Zəngilan", "Genlik", "Vəliqulubəyli", "Qaradərə", "Çöpədərə", "Tatar", "Tiri", "Əmirxanlı", "Qarqulu", "Bartaz", "Dəlləkli ", "Ağbənd qəsəbəsi", "Vənədli", "Mirzəhəsənli", "Birinci Alıbəyli", "İkinci Alıbəyli", "Rəbənd", "Yenikənd", "Birinci Ağalı", "İkinci Ağalı", "Üçüncü Ağalı", "Zərnəli", "Aladin", "Vejnəli", "Dərə Gilətağ", "Böyük Gilətağ", "Məşədiismayıllı", "Şəfibəyli", "Beşdəli", "Keçikli", "Ördəkli", "Sobu", "Qaragöz", "İsgəndərbəyli kəndləri", "Bartaz qəsəbəsi"],
	},
	{
		name: "Xocavənd",
		libVillages: ["Bulutan", "Məlikcanlı", "Kəmərtük", "Təkə", "Tağaser", "Edişə", "Düdükçü", "Edilli", "Çiraquz", "Xırmancıq", "Ağbulaq", "Axullu", "Ağcakənd", "Mülküdərə", "Daşbaşı", "Günəşli", "Çinarlı", "Dolanlar", "Bünyadlı", "Ataqut", "Tsakuri", "Susanlıq", "Domi", "Tuğ", "Akaku", "Azıx", "Böyük Tağlar", "Salakətin", "Zoğalbulaq", "Aragül", "Tağavard", "Böyük Tağavard", "Zərdanaşen", "Şəhər kəndləri"],
	},
	{
		name: "Tərtər",
		libVillages: ["Suqovuşan", "Talış", "Çaylı kəndləri"],
	},
	{
		name: "Qubadlı",
		libVillages: ["Qubadlı şəhəri", "Zilanlı", "Kürd Mahrızlı", "Muğanlı", "Alaqurşaq", "Padar", "Əfəndilər", "Yusifbəyli", "Çaytumas", "Xanlıq", "Sarıyataq", "Mollabürhan", "Qiyaslı", "Əbilcə", "Qılıcan", "Kavdadıq", "Məmər", "Mollalı", "İşıqlı", "Muradxanlı", "Milanlı", "Başarat", "Qarakişilər", "Qaracallı", "Qəzyan", "Balasoltanlı", "Mərdanlı", "Yuxarı Mollu", "Aşağı Mollu", "Xocik", "Qaramanlı", "Xəndək", "Həmzəli", "Mahrızlı", "Hal", "Ballıqaya", "Ulaşlı", "Tinli", "Xocahan", "Boyunəkər", "Qaraqoyunlu", "Çərəli kəndləri"],
	},
	{
		name: "Xocalı",
		libVillages: ["Qarabulaq", "Moşxmaat", "Dəmirçilər", "Çanaqçı", "Mədətkənd", "Sığnaq", "Şuşakənd", "Muxtar", "Daşaltı kəndləri"],
	},
	{
		name: "Şuşa",
		libVillages: ["Şuşa Şəhəri"],
	},
	{
		name: "Laçın",
		libVillages: ["Güləbürd", "Səfiyan", "Türklər kəndləri"],
	},
];

const cards = document.querySelector(".cards");

for (let i in regions) {
	let card = `<div class="card border-primary m-1 p-0 col-5">
    <div class="card-header">${regions[i].name} rayonu</div>
    <div class="card-body text-primary">
     <h5 class="card-title">Azad olunmuş əraziləri : </h5>
      <p class="card-text">${regions[i].libVillages.join(", ")}</p>
   </div>
  </div>`;
	cards.innerHTML += card;
}

function biggestRegionIndex() {
	let lensOfArrs = [];
	for (i in regions) {
		lensOfArrs.push(regions[i].libVillages);
	}
	return lensOfArrs.map(i => i.length).indexOf(Math.max(...lensOfArrs.map(i => i.length)))
}

function longestRegionNameIndex() {
	let namesOfVillsArr = [];
	for (i in regions) {
		namesOfVillsArr.push(regions[i].name);
	}
	return namesOfVillsArr.indexOf(namesOfVillsArr.reduce(function (a, b) { return a.length > b.length ? a : b; }))
}

var regionsWhichNameStartsWithA = []
function regionWhichNameStartsWithA() {
	let namesOfRegionsArr = []
	for (ii in regions){
		namesOfRegionsArr.push(regions[ii].name)
	}

	for (i in namesOfRegionsArr){
		if (namesOfRegionsArr[i].match(/[a]/ig))
		{
			regionsWhichNameStartsWithA.push(regions[i].name)
		}
	}
}
regionWhichNameStartsWithA()

function sumOfVillages() {
	let lensOfArrs = [];

	for (i in regions) {
		lensOfArrs.push(regions[i].libVillages);
	}
	return lensOfArrs.join().split(',').length;
}

document.querySelector(".funcResultCards").innerHTML = `<div class="card border-danger m-1 p-0 col-2">
          <div class="card-header text-center">Ən çox kəndə sahib olan rayon</div>
          <div class="card-body text-danger d-flex flex-column justify-content-center">
          <h5 class="card-title text-center">${regions[biggestRegionIndex()].name}</h5>
         </div>
        </div>
		<div class="card border-danger m-1 p-0 col-2">
          <div class="card-header text-center">Azad edilən rayonlar arasında adı ən uzun olan rayon və kəndlərinin sayı</div>
          <div class="card-body text-danger">
            <h5 class="card-title text-center">${regions[longestRegionNameIndex()].name}</h5>
          <p class="card-text text-center">${regions[longestRegionNameIndex()].libVillages.length} kəndi var</p>
         </div>
        </div>
		<div class="card border-danger m-1 p-0 col-2">
          <div class="card-header text-center">Azad edilən rayonların adında a hərfi olan rayonların siyahısı</div>
          <div class="card-body text-danger">
          <p class="card-text text-center">${regionsWhichNameStartsWithA.join(", ")}</p>
         </div>
        </div>
		<div class="card border-danger m-1 p-0 col-2">
          <div class="card-header text-center">Ümumi azad edilən kənd sayı</div>
          <div class="card-body text-danger d-flex flex-column justify-content-center">
		  <h5 class="card-title text-center">${sumOfVillages()}</h5>
         </div>
        </div>`