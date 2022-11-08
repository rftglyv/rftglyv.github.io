jQuery(function($){
    var strings = ['Nigar', 'dərs', 'oxu', '!'];
    var counter = 0;
    var $str = $('#study')
    setInterval(function(){
        $str.text(strings[counter++]);
        if(counter >= strings.length){
            counter = 0;
        }
    }, 1000)
})