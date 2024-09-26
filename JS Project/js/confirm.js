var mycookies = [];

function readCookie(){
    console.log("readCookie()");
    mycookies = [];
    var keyvalue = document.cookie.split(";");
    console.log(keyvalue);
    for (var id in keyvalue){
        var cookie = keyvalue[id].split("=");
        mycookies[cookie[0].trim()]=cookie[1];
    }
    console.log(mycookies["uuser"]);
    console.log(mycookies["upass"]);
    document.getElementById("cookieOutput1").innerHTML = mycookies["uuser"];
    document.getElementById("cookieOutput2").innerHTML = mycookies["upass"];
    
    printCookie();
}

function printCookie(){
    var x = document.cookie;
    document.getElementById('node-id').innerHTML = x;
}