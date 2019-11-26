//javascript code

function checkSaldo(){
    var geldOpnamen = document.getElementById("geldOpnamen").value;

    

    var bankSaldo = 500;
    
    if(bankSaldo == 500){
        alert("je salaris is gestort");
    }

    if(bankSaldo > 500){
        alert("je bonus is gestort");
    }

    if(bankSaldo < 500){
        alert("er is geen geld gestort");
    }

}