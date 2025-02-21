//                                         FOLOSIREA DE IMPUTURI FUNCTIONALE (TEXTAREA)
//                                                      FOLOSIRE LOCAL STORAGE
function trimiteFeedback() {
    var feedback = document.getElementById('feedbackTextarea').value;

    if (feedback.trim() === '') {
        alert('Te rugăm să introduci un feedback sau o recenzie.');
    } else {
        alert('Feedback-ul tău a fost trimis cu succes!');

        //localStorage.getItem("feedbackuri") este folosit pentru a obține valoarea stocată în localStorage sub cheia "feedbackuri". 
        //Această valoare este un șir de 
        //caractere JSON care conține feedback-urile anterioare sau este un șir gol dacă nu există feedback-uri stocate.
        var feedbackuri = JSON.parse(localStorage.getItem("feedbackuri")) || [];
        //JSON.parse() este apoi folosit pentru a parsa acest șir JSON și a-l transforma într-un obiect JavaScript. 
        //Dacă șirul JSON nu poate fi parsat (de exemplu, dacă este gol sau este în alt format decât cel corect pentru un obiect JSON), 
        //JSON.parse() va arunca o excepție. Pentru a evita această situație, utilizăm operatorul || [] care 
        //furnizează un obiect gol în cazul în care parsarea JSON eșuează, 
        //astfel încât să nu avem o valoare null sau undefined.

        feedbackuri.push(feedback);

        //localStorage.setItem(key, value) este o metodă în JavaScript care 
        //stochează date în localStorage sub o anumită cheie.
        localStorage.setItem("feedbackuri", JSON.stringify(feedbackuri));

        afiseazaFeedbackuri();
        
        document.getElementById('feedbackTextarea').value = '';
    }
}

function afiseazaFeedbackuri() {
    var feedbackuri = JSON.parse(localStorage.getItem("feedbackuri")) || [];
    var listaFeedbackuri = document.getElementById("listaFeedbackuri");
    // Șterge conținutul anterior al listei
    listaFeedbackuri.innerHTML = "";
    // Adaugă fiecare feedback în lista de pe pagină
    feedbackuri.forEach(function(feedback) {
        var li = document.createElement("li");
        li.textContent = feedback;
        listaFeedbackuri.appendChild(li);
    });
}

// La încărcarea paginii, afișează feedback-urile salvate în localStorage
window.onload = function() {
    afiseazaFeedbackuri();
};


//                           SCHIMBAREA ALEATORIE A UNEI CULORI + FOLOSIREA A DOUA METODE A OBIECTULUI MATH
function culoareAleatoare(){
    var rosu = Math.floor(Math.random() * 256);
    var verde = Math.floor(Math.random() * 256);
    var albastru = Math.floor(Math.random() * 256);
    var culoare = "rgb(" + rosu + ", " + verde + ", " + albastru + ")";
    return culoare;
}


//                                                    FOLOSIRE SET INTERVAL
function afiseazaIntrebareCuCuloare() {
    var question = document.getElementById('intrebare');
    
    var questionsArray = ["Tu ce crezi?", "Ai avut o experiență memorabilă la Hard Rock Cafe?", "Ce ai apreciat cel mai mult?", "Ce crezi că ar putea fi îmbunătățit?"];
    
    var index = 0;
    var intervalID = setInterval(function() {
        question.textContent = questionsArray[index];
        index = (index + 1) % questionsArray.length; 
        var culoareText = culoareAleatoare();
        question.style.color = culoareText;
    }, 4000); 
}
afiseazaIntrebareCuCuloare();

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