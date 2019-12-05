//javascript code




for (var teller = 1; teller <= 100; teller++) {

    if (teller % 3 == 0 && teller % 5 == 0) {
        document.getElementById("result").innerHTML += `<strong>vet cool </strong><br>`;
    }

    if (teller % 3 == 0) {

        document.getElementById("result").innerHTML += `<strong>vet</strong><br>`;
    }
    else if (teller % 5 == 0) {
        document.getElementById("result").innerHTML += `cool  </br>`;
    }

    else {
        document.getElementById("result").innerHTML += teller + "<br>";
    }



}
