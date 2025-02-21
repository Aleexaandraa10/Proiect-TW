//                                  MODIFICAREA STILULUI UNUI ELEMENT + MODIFICAREA EVENIMENTELOR GENERATE DE MOUSE
function modificaElem(){
var fragmentText = document.getElementById("text");

    fragmentText.addEventListener("mouseenter", function() {
        fragmentText.style.color = "blue"; 
        fragmentText.style.fontWeight = "bold";
    });
}
modificaElem();



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

//                                             FOLOSIRE METODA FOR EACH DIN CLASA ARRAY
//                     FOLOSIRE CLASS LIST, TARGET, CURENT TARGET PRIN SUBLINIEREA TITLULUI CAND SE TRECE CU MOUSE-UL PESTE EL
//                                                  FOLOSIRE METODE ALE CLASEI STRING

function LitereMari(text) {
    return text.toUpperCase(); 
}

function LitereMici(text) {
    return text.toLowerCase(); 
}

function SubliniereTitlu() {
    var titluri = document.querySelectorAll(".container h3");
    titluri.forEach((titlu, index) => {
        titlu.addEventListener("mouseenter", function(event) {
            var targetTitlu = event.target;
            targetTitlu.classList.add("subliniat");
            targetTitlu.textContent = LitereMici(targetTitlu.textContent);
        });

        titlu.addEventListener("mouseleave", function(event) {
            var curentTargetTitlu = event.currentTarget;
            curentTargetTitlu.classList.remove("subliniat");
            curentTargetTitlu.textContent = LitereMari(curentTargetTitlu.textContent);
        });
    });
}

SubliniereTitlu();
