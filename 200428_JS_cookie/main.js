
    window.onload = function(){
        var idSave = document.frm.idSave;
        idSave.onclick = function(){
            setCookie("userid", document.frm.id.value, 10);
        }

        function setCookie(name, value, expires){
            var d = new Data();
            d.setData(d.getData() + expires);
            var sc = "";
            sc += name + "=" + encodeURIComponent(value) + ",";
            sc += "expires" = d.toUTCString();
            //alert(ac)
            document.cookie = sc;
        }
    }

    function getCookie(name)
    {
        //alert(document.cookie);
        var gc = document.cookie.replace("","");
        gc = gc.split(";");
        for(var i = 0; i < gc.length; ++i)
        {
            if(gc[i].split("=")[0] == name)
            {
                return gc[i].split("=");
            }
        }
        return null;
    }
    document.frm.id.value = getCookie("userId");
