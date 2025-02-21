//                                                  FOLOSIRE SET TIME OUT
function afisareConcerte() {
    var concerte = document.querySelectorAll(".grid-item2");
    
    concerte.forEach(function(concert, index) {
        setTimeout(function() {
            concert.style.opacity = '1'; 
        }, (index + 1) * 1000);
    });
}
afisareConcerte();

//                                 CREARE SI STERGERE DE ELEMENTE + MODIFICAREA ELEMENTELOR GENERATE DE MOUSE
function modificareIncadrareImagine() {
    var imagini = document.querySelectorAll('.grid-item1 img');

    imagini.forEach(function(imagine) {
        imagine.addEventListener('mouseenter', function() {
            this.parentNode.classList.add('highlight');
            
        });

        imagine.addEventListener('mouseleave', function() {
            this.parentNode.classList.remove('highlight');
            
        });
    });
}
modificareIncadrareImagine();

function InceputPagina(){
    const scrollTop=document.getElementById("scrollTopBtn");

    scrollTop.addEventListener("click", () => {
        window.scrollTo({
            top:0,
            behavior: "smooth"
        });
    });
}
InceputPagina();