$(document).ready(function(){
    // Эта функция отвечает за вывод сообщения в случае не корректного ввода
    function message_error(){
        $("#output").text("Incorrect. Input time 00:00 in range(00:00 - 23:59)");
        return true;
    };
    //Эта функция срабатывает когда нажимаешь на кнопку
    $("#but_send").click(function(){
        // Присваеваем переменной str значение из поля с атрибутом ID=inp_num
        var str = $("#inp_num").val();
        // Присваеваем переменной regNum регулярное выражения которое будет искать цифры.
        var regNum =/\d/g;
        // Выполняется проверка условие: Если str не пустое, то выпонится условие №1, в противном случае выпонится условие №2.
        if (str){
            // Условие №1
            // Создаем массив элементов, в котором будут хранится все найденные цифры,и присваеваем его к переменной result.
            var result = str.match(regNum)
            // Выполняется проверка условие: Если длина массива равна 4,то выпонится условие №3, в противном случае выпонится условие №4.
            if ((result.length == 4)){
                // Условие №3
                // Создаем строку из 0 и 1 элемента массива, и присваеваем её к переменной first_numb_in_str
                var first_numb_in_str = result[0]+result[1],
                // Создаем строку из 2 и 3 элемента массива, и присваеваем её к переменной second_numb_in_str
                second_numb_in_str = result[2]+result[3],
                // Преобразуем first_numb_in_str в тип переменной number, и присваеваем к переменной first_numb_in_num
                first_numb_in_num = parseInt(first_numb_in_str),
                // Преобразуем second_numb_in_str в тип переменной number, и присваеваем к переменной second_numb_in_num
                second_numb_in_num = parseInt(second_numb_in_str);
                // Выполняется проверка условие: Если first_numb_in_num находится в диапазоне от 0 до 23, и second_numb_in_num находится в диопазоне от 0 до 59 ,то выпонится условие №5, в противном случае выпонится условие №6.
                if(((first_numb_in_num>=0)&&(first_numb_in_num<=59))&&((second_numb_in_num>=0)&&(second_numb_in_num<=59))){
                    // Условие №5
                    // Вставляет текст в блок div с атрибутом ID=output
                    $("#output").text(first_numb_in_str+":"+second_numb_in_str);
                }
                else{
                    // Условие №6
                    // Запускаеться функция message_error
                    message_error()

                }
            }
            else{
                // Условие №4
                // Запускаеться функция message_error
                message_error();
            }
        }
        else{
            // Условие №2
            // Запускаеться функция message_error
            message_error();
        }
    })


});
