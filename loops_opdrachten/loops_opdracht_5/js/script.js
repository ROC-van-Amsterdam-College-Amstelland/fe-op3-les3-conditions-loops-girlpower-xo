// Javascript code



for (var teller = 1; teller <= 20; teller++) {
    // console.log(teller);
    //     if (teller & 1) {
    //         console.log("oneven");
    //     }
    //     else {
    //         console.log("even");
    //     }
    // if (teller % 2 == 0)
    //     return true;
    // else
    //     return false;
    if (teller % 2 == 0) {
        // console.log(teller + ' is even');
        document.getElementById("result").innerHTML += `is even ${teller} </br>`

    } else {
        console.log(teller + ' is oneven');

    }

} 