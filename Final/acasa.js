//                      MODIFICAREA UNOR PROPRIETATI(CONTINUT) + FOLOSIREA UNOR METODE DIN CLASA DATE

//                        + VALIDAREA DATELOR DINTR-UN FORMULAR FOLOSIND EXPRESII REGULATE
function validareEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //expresie regulata
    return regex.test(email);
}

function validareTelefon(telefon) {
    var regex = /^[0-9]{10}$/; 
    return regex.test(telefon);
}

function validareFormular(){
    var email = document.getElementById("email").value;
    var telefon = document.getElementById("telefon").value;
    var data = document.getElementById("data");

    var dataSelectata = new Date(data.value); 
    var dataCurenta = new Date();
    
    if(!validareEmail(email)){
        document.getElementById("error-email").innerHTML = "Adresă de email invalidă";
        return false;
    }
    else {
    document.getElementById("error-email").innerHTML = "";
    }
    if (!validareTelefon(telefon)) {
        document.getElementById("error-telefon").innerHTML = "Număr de telefon invalid";
        return false;
    } else {
    document.getElementById("error-telefon").innerHTML = "";
    }

    if (dataSelectata <= dataCurenta) {
        document.getElementById("error-data").innerHTML = "Selectați o dată viitoare pentru rezervare";
        return false;
    } else {
        document.getElementById("error-data").innerHTML = "";
    }
    
return true;
}

document.getElementById("formular-rezervare").onsubmit = function() {
    return validareFormular();
};




//                               !!!!FOLOSIREA EVENIMENTELOR GENERATE DE TASTATURA!!!!!!!!
function SlidePoze() {
    document.addEventListener("DOMContentLoaded", function() {
        const slider = document.querySelector('.slider');
        const thumbnails = document.querySelectorAll('.thumbnails img');
        let currentIndex = 0;
        
        thumbnails.forEach((thumbnail, index) => {
            thumbnail.addEventListener('click', () => {
                goToImage(index);
            });

            thumbnail.addEventListener('keydown', (event) => {
                if (event.key === "Enter") {
                    goToImage(index);
                }
            });
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === "ArrowLeft") {
                goToImage(currentIndex - 1);
            } else if (event.key === "ArrowRight") {
                goToImage(currentIndex + 1);
            }
        });

        function goToImage(index) {
            if (index < 0 || index >= thumbnails.length) {
                return; // Verifică dacă indexul este valid
            }

            const moveAmount = index * 550;
            slider.scrollTo({
                left: moveAmount,
                behavior: 'smooth'
            });
            currentIndex = index; // Actualizează indexul imaginii curente
        }
    });
}
SlidePoze();


function EvidentiereTastatura() {
    document.addEventListener('DOMContentLoaded', function() {
        var images = document.querySelectorAll('.thumbnails img');
        var currentIndex = 0;

        // Adaugă clasa 'active' pe prima imagine din galerie
        images[currentIndex].classList.add('active');

        // Ascultă evenimentul keydown pe întreaga pagină
        document.addEventListener('keydown', function(event) {
            if (event.key === 'ArrowLeft') {
                changeImage(-1);
            }
            else if (event.key === 'ArrowRight') {
                changeImage(1);
            }
            else if (event.key === "Enter") {
                var img = document.querySelector('img[alt="G' + (currentIndex + 1) + '"]');
                if (img) {
                    var largeImg = img.src;
                    window.location.href = largeImg;
                }
            }
        });

        // Funcție pentru schimbarea imaginii
        function changeImage(direction) {
            // Dezactivează clasa 'active' pentru imaginea curentă
            images[currentIndex].classList.remove('active');

            // Calculează noul index al imaginii
            currentIndex = (currentIndex + direction + images.length) % images.length;

            // Activează clasa 'active' pentru noua imagine
            images[currentIndex].classList.add('active');
        }
    });
}

EvidentiereTastatura();

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

//-----------------------------------------PENTRU NODE CERERE AJAX--------------
document.addEventListener('DOMContentLoaded', () => {
    const rezervariContainer = document.querySelector('.rightcolumn');

    // Funcție pentru preluarea datelor din fișierul JSON
    async function fetchRezervari() {
        try {
            const response = await fetch('/exemplu');
            const data = await response.json();
            displayRezervari(data.rezervari);
        } catch (error) {
            console.error('Eroare la preluarea datelor:', error);
        }
    }

    //Funcție pentru afișarea datelor în pagina HTML!!!!!!!!!!!!!!!!!!!!!
    
    function displayRezervari(rezervari) {
        rezervari.forEach(rezervare => {
            const rezervareCard = document.createElement('div');
            rezervareCard.classList.add('card');
            
            rezervareCard.innerHTML = `
                <h2>Rezervare</h2>
                <p><strong>Nume:</strong> ${rezervare.nume}</p>
                <p><strong>Email:</strong> ${rezervare.email}</p>
                <p><strong>Telefon:</strong> ${rezervare.telefon}</p>
                <p><strong>Data:</strong> ${rezervare.data}</p>
                <p><strong>Mesaj:</strong> ${rezervare.mesaj}</p>
            `;

            rezervariContainer.appendChild(rezervareCard);
        });
    }

    // Apelarea funcției pentru preluarea și afișarea datelor
    fetchRezervari();
});







