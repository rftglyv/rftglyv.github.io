proverbsPlainText = `Ağıllı düşmən nadan dostdan yaxşıdır.
Baş-başa verməyincə daş yerindən qalxmaz.
Birisi minə bağlıdır, mini də birə.
Bir gün duz yediyin yerə, qırx gün salam ver.
Dostsuz insan qanadsız quş kimidir.
Birlik harada, dirilik orada.
Bir su ki, girdi qaba, oldu içməli
Vəfalı dost yad olmaz, görməsə yüz il səni.
Qarı düşmən dost olmaz.
Qoyun quzusunun ayağını basmaz.
Qonşu qonşuya baxar, Canını oda yaxar.
Qonşu qonşunun itini bayatı çağıra-çağıra tapar.
Qonşu iti qonşuya hürməz.
Qonşu qonşu olsa kor qız ərə gedər.
Qonşu muncuğunu götürən, onu ancaq gorda taxar.
Qonşum sağ olsun, ocağından od verməsin.
Qonşunu iki inəkli istə ki, özün bir inəkli olasan.
Qonşunun haqqı axirət haqqıdır.
Qonşu payı dolu gələr, dolu gedər.
Qonşu paxıl olmasa, bağ çəpəri neylər?!
Dağ dağa qovuşmaz, insan insana qovuşar.
Doğru dostluq qərəzsiz olmaz.
Dost başa baxar, düşmən ayağa.
Dost dost tən gərək, tən olsa gen gərək.
Dost dosta yaman gündə gərəkdir.
Dost dar gündə tanınar.
Dost ziyankar olmaz, ziyankar da dost olar.
Dost yaman gündə tanınar.
Dost yolunda boran olar, qar olar.
Dost yolunda can qurban.
Dostluqla tutub, düşmənliklə yıxma.
Dost min isə azdır, düşmən bir isə çoxdur.
Dostun versə qum, Al ovcunda yum!
Əli ələ vurarsan, səs çıxmaz
Ət ilə dırnaq arasına girən iyiyər, çıxar.
Yaxşı dostu yaman gündə sına.
Yaxşı gündə düşmən gələr dost olar, igid odur yaman gündə dayansın.
Yeməklə dost olan illərlə küsülü qalmaz.
Yoldaşını nişan ver, özünü tanıt.
Sidq ilə dost olan ürəkdən də bir gərək.
Tək əldən səs çıxmaz.
Hər şeyin təzəsi, dostun köhnəsi.
Çox qarışqa bir şiri öldürər.
Çörək itirən, çörək tapmaz.`
proverbs = proverbsPlainText.split(/\r?\n/)

const proverbsCard = document.getElementById("proverb-card")
document.getElementById("body").onload = function() {proverbsCard.innerHTML= proverbs[Math.floor(Math.random() * proverbs.length)]}
