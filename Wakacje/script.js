// Tablica z tekstami, z niej losuję jedną rzecz
let ciekawostki = [
    "Na wyspie jest więcej kotów niż ludzi.",
    "Koty są dokarmiane przez mieszkańców.",
    "Wyspa stała się popularna dzięki internetowi.",
    "Kotki jedzą rybki."
];
 
// Funkcja losuje numer i wstawia tekst do paragrafu
function pokazCiekawostke() {
 
    // Math.random daje liczbę od 0 do 1 więc mnożę przez długość tablicy
    let losowyNumer = Math.floor(Math.random() * ciekawostki.length);
 
    // tutaj zmieniam zawartość paragrafu
    document.getElementById("ciekawostka").innerText = ciekawostki[losowyNumer];
}
 
// Lista nazw plików
let zdjecia = [
    "ogryzek1.jpg",
    "ogryzek2.jpeg",
    "ogryzek3.jpg",
    "ogryzek4.jpg",
    "ogryzek5.jpg",
    "ogryzek6.jpeg",
    "ogryzek7.jpg",
    "ogryzek8.jpg",
    "ogryzek9.jpeg",
    "ogryzek10.jpg"
];
 
let aktualne = 0; // numer aktualnego zdjęcia
 
// Zmienia zdjęcie na kolejne
function nastepneZdjecie() {
 
    aktualne++; // dodaję 1 żeby przeskoczyć dalej
 
    // jak wyjdzie poza zakres to wraca na początek
    if (aktualne >= zdjecia.length) {
        aktualne = 0;
    }
 
    document.getElementById("sliderImage").src = zdjecia[aktualne];
}
 
// Cofanie zdjęcia
function poprzednieZdjecie() {
 
    aktualne--;
 
    // jeśli spadnie poniżej 0 to idzie na ostatnie
    if (aktualne < 0) {
        aktualne = zdjecia.length - 1;
    }
 
    document.getElementById("sliderImage").src = zdjecia[aktualne];
}

//Trochę nie slider żaden ale zdjęcia zmienia
 
// Funkcja dostaje przycisk który kliknięto i informację czy dobra odpowiedź
function sprawdz(przycisk, czyPoprawna) {
 
    // Jeśli true to nadaje klasę poprawna, jeśli false to bledna
    if (czyPoprawna) {
        przycisk.classList.add("poprawna");
    } else {
        przycisk.classList.add("bledna");
    }
}
 
// Reset usuwa klasy z przycisków
function resetQuiz() {
 
    // Pobieram wszystkie przyciski z quizu
    let przyciski = document.querySelectorAll(".quiz button");
 
    // przechodzę przez każdy i usuwam kolory
    przyciski.forEach(function(btn) {
        btn.classList.remove("poprawna");
        btn.classList.remove("bledna");
    });
}