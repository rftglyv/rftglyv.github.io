jQuery(function($){
    var ilys = ['I love you', 'أحبك', 'আমি তোমাকে ভালবাসি', '我爱你', 'Minä rakastan sinua', "Je t'aime", 'Ich liebe dich', "Σ'αγαπώ", 'Szeretlek', 'Aku mencintaimu', 'Is tú mo ghrá', '愛してる', '사랑해', 'Kocham cię', 'Eu te amo', 'Я люблю тебя', 'Te amo', 'Nakupenda', 'Mahal kita', 'ฉันรักคุณ', 'Seni seviyorum', '	میں تم سے پیار کرتا ہوں', 'איך האָב דיך ליב', 'Səni sevirəm'];
    var counter = 0;
    var $ily = $('#ily')
    $ily.text('Səni sevirəm');
    setInterval(function(){
        $ily.text(ilys[counter++]);
        if(counter >= ilys.length){
            counter = 0;
        }
    }, 3000)
})
