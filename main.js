/* Mail

Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo. */

//richiesta mail
var emailUtente = prompt('inserisci la tua mail');
console.log(emailUtente);
//lista di mail
var emailApprovate = ['email_1@gmail.com', 'email_2@gmail.com', 'email_3@gmail.com', 'email_4@gmail.com', 'email_5@gmail.com'];
//conrollo validità mail e restituzione messaggio
var i;
var messaggioBenvenuto = 'benvenuto, utente riconosciuto';

for (var i = 0; i < 5; i++) {
    if (emailUtente === emailApprovate[i]) {
        document.getElementById('messaggio_benvenuto').innerHTML = messaggioBenvenuto;
        break;
    }
}

/* Gioco dei dadi

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve? */

var numeroUtente = Math.floor(Math.random() * 6) + 1;
var numeroComputer = Math.floor(Math.random() * 6) + 1;
document.getElementById('numero_utente').innerHTML = numeroUtente;
document.getElementById('numero_computer').innerHTML = numeroComputer;

//confronto numeri
if (numeroUtente > numeroComputer) {
    document.getElementById('vincitore').innerHTML = "ha vinto l utente";
} else if (numeroComputer > numeroUtente) {
    document.getElementById('vincitore').innerHTML = "ha vinto il computer";
} else {
    document.getElementById('vincitore').innerHTML = "che coincidenza, uno stallo."
}