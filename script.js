let euros = document.getElementById("euros"); 
let dollars = document.getElementById("dollars");
let livres = document.getElementById("livres"); 

euros.addEventListener("input", function(){convmonnaie(this.id, this.value);});
dollars.addEventListener("input", function(){convmonnaie(this.id, this.value);});
livres.addEventListener("input", function(){convmonnaie(this.id, this.value);});

function convmonnaie(id, valeur){
    alert("salut")
    if(id == "euros"){
        dollars.value = valeur * 1.05;
        livres.value = valeur * 0.86;
    }else if(id == "dollars"){
        euros.value = valeur * 0.95;
        livres.value = valeur * 0.81;
    }else if(id == "livres"){
        euros.value = valeur * 1.17;
        dollars.value = valeur * 1.23;
    }
}

