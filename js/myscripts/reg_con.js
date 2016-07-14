
$(document).ready(function(){
    function message_error(num){
        $("#output").text("Incorrect."+num.toString());
        return true;
    }

    $("#but_send").click(function(){
        var regCon = /([+-*/])/
        var str = $("#inp-num").val();
        var regNum =/\d/g;
        if (str){
            var resnum = str.match(regNum);
            var resCon = str.match(regCon)
            if ((regNum.length == 2)&&(regCon.length==1)){
                regCon
            }
        }
        else{

        }

    })


})
