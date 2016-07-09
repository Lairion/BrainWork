    function showDlg(msg, tit, btnCaption) {
            btnCaption = btnCaption || "Close";title = tit || "Information";var result = true;

            if (!msg) {result = false;}

            $('<div></div>').dialog({
                    modal: true,
                    title: tit,
                    open: function () {
                        $(this).html(msg);
                    },
                    buttons: [{
                            text: btnCaption,
                            click: function () {
                                $(this).dialog("close");
                            }
                        },
                        {
                            text: btnCaption,
                            click: function () {
                                $(this).dialog("close");
                            }                        
                    },]
            });

        return result;
        }

        
            $('#aaa').click(function(){
                showDlg('Message', 'Title', 'Caption')
            });
            $('#bbb').focusout(function(){
                alert('Something happens!')
            });