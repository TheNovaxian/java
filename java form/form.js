function getform(){
    var x = document.getElementById("myform");

    for (var i = 0; i < x.length; i++)
    {
        if(x[i].type !=="submit")
        {
            alert(x[i].value)
        }

    }
}