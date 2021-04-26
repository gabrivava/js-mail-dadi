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
