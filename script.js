"use strict";


//tas mygtukas paspaudimo metu isvestu informacija 
//i console log


// Klientus

// document.querySelector("#show").addEventListener("click", function() {
    // console.log("Mygtukas paspaustas");
function showClients() {
    var xhttp = new XMLHttpRequest(); //objektas

    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            document.querySelector("#output").innerHTML = this.responseText; // 
        }
    };

    xhttp.open("POST", "action.php", false);
    xhttp.send();
    
}


function createClient(vardas, pavarde, teises_id) {
    var xhttp = new XMLHttpRequest(); //objektas

    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            document.querySelector("#alert-space").innerHTML = this.responseText; // 
        }
    };
    //???????
    xhttp.open("GET", "addClient.php?vardas=" + vardas + "&pavarde=" + pavarde + "&teises_id=" + teises_id, false); //duomenis surasome taip, jeigu norime visus duomenis perduoti i php dokumenta 

    xhttp.send();

    showClients();
}

// showClients();

// });








//padaro forma matoma ir nematoma

document.querySelector("#create").addEventListener("click", function() { //fiksuoja mygtuko pasmaudima

var clientForm = document.querySelector("#clientForm"); // visu pirma turime pasirinkti elementa kuri norime fiksuoti (elemento div pasirinkimas) irasome elemento div, input, id, pavadinima (id, class, name) ir jis bus pasirinktas
clientForm.classList.toggle("d-none"); // parasom klases pavadinima, tada parasome klases sarasa (classList), jeigu elementas sia klase tures panaikins jeigu netures uzdes ( klase d-non)
//pasirenkam klases pavadinima, tada klases sarasa (jis nusako ka daryti su klase pvz remove arba add), ir tada pasirenkam ka norime daryti su ta klase add arba remowe

//informacijos atvaizdavimas is input laukeliu


// jeigu paslepta - atsiranda
// jeigu matoma - pasislepia

document.querySelector("#vardas").value = ""; 
document.querySelector("#pavarde").value = "";
document.querySelector("#teises_id").value = "";





// document.querySelector("#output").innerHTML = vardas + " " + pavarde + " " + teises_id;
//informacijos atvaizdavimas is input laukeliu
});



document.querySelector("#createClient").addEventListener("click", function() { //mygtukas, kuri paspaudus atvaizduos suvesta i inputus informacija, atvaizduos suvesta varda pavarde teieses_id
    var vardas = document.querySelector("#vardas").value;//input laukeliu pavadinimo pasirinkimas, input laukeliuose surasyta informacija vardas pavarde ir t.t ir mes su siuo kodu pasiimam info is input laukeliu atvaizdavimui, nurodem reiksmes kurios bus vedamos i inout laukeli, vardas pavarde teises_id
    var pavarde = document.querySelector("#pavarde").value;
    var teises_id =  document.querySelector("#teises_id").value;
    
    //ajax uzklausa
    
    createClient(vardas,pavarde,teises_id);
    //paims ir atliks atvaizdavimo uzklausa?










    // SITA EILUTE ATSAKINGA UZ INFORMACIJOS ATVAIZDAVIMA

    // informacijos atvaizdavimas is input laukeliu

    // document.querySelector("#output").innerHTML = vardas + " " + pavarde + " " + teises_id;
    
});    
