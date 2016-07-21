
$(document).ready(function(){
    function message_error(){
        $("#output").text("Incorrect.";
        return true;
    }

    $("#but_send").click(function(){
        var word = $("#inp_word").val();
        if (word){
            var reg_word = new RegExp("/"+word"/");
        }
        else{
            message_error()
        }

    });


});
