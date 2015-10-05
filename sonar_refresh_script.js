refreshObject=document.getElementsByClassName("reload")
var counter = 0;
var i = setInterval(function(){
    console.log(counter)
    refreshObject[0].click();

    counter++;
    if(counter === 1000) {
        clearInterval(i);
    }
}, 2000);
