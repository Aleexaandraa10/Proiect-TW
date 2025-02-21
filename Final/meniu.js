//                                             FOLOSIRE STOP PROPAGATION
function afisareText(){
    var food=document.querySelector('.right');
    var popup=document.querySelector('.popup');

    food.addEventListener('click', function(event){
        // Afișăm popup-ul cu detalii
        popup.classList.add('active');
        // Oprirea propagării evenimentului pentru a preveni închiderea popup-ului atunci când se face clic în interiorul său
        event.stopPropagation();
    });

    // Oprirea propagării evenimentului pentru a preveni închiderea popup-ului atunci când se face clic în interiorul său
    popup.addEventListener('click', function(event){
        event.stopPropagation();
    });

    document.addEventListener('click', function(event) {
        // Închidem popup-ul dacă utilizatorul face clic în afara sa
        popup.classList.remove('active');
    });
}
afisareText();

//                                            FOLOSIRE GET COMPUTED STYLE
function modificareLink(){
    var link=document.querySelector('popup a');
    link.addEventListener('mouseenter', function(){
        // Folosim getComputedStyle pentru a accesa stilurile calculate ale link-ului
        var computedStyle=window.getComputedStyle(link);
        // Obținem culoarea textului la hover
        var color=computedStyle.color;
        link.style.color = "red"; 
        link.style.fontWeight = "bold"; 
    });
    link.addEventListener("mouseleave", function() {
        // Resetăm stilurile link-ului la valorile implicite atunci când mouse-ul părăsește link-ul
        link.style.color = ""; // Revenim la culoarea implicită a textului
        link.style.fontWeight = ""; // Revenim la greutatea fontului implicită
    });
}

modificareLink();




