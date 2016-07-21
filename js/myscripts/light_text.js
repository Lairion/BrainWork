
$(document).ready(function(){
    function message_error(){
        $("#output").text("Incorrect.");
        return true;
    }

    $("#but_send").click(function(){
        var word = $("#inp_word").val();
        if (word){
            var reg_word = new RegExp(word,"g","i");
        }
        else{
            message_error()
            return false
        }
        var str = $('p').text()
        var match=reg_word.exec(str);
        console.log(match.index);
        console.log(moment().format('MMMM Do YYYY, h:mm:ss a')); // July 19th 2016, 8:57:38 pm
console.log(moment().format('dddd'));                    // Tuesday
console.log(moment().format("MMM Do YY"));               // Jul 19th 16
console.log(moment().format('YYYY [escaped] YYYY'));     // 2016 escaped 2016
console.log(moment().format());                          // 2016-07-19T20:57:38+03:00

//        var datatoday = new Date();
//        console.log(datatoday);

    });


});
