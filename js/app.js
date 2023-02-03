// Creo un array con dentro delle mail
const emails = ['ciao@gmail.com', 'pincopallino@gmail.com', 'pippo@gmail.com']
console.log(emails)
// Creo il prompt per inserimento mail
let userEmail = prompt('Inserisci la tua mail')
// Controllo se la mail inserita è già presente
let message = 'false'
let feedback = document.getElementById('feedback')

for (i = 0; i < emails.length; i++) {
    if (userEmail === emails[i]) {
        message = 'true'
        console.log('uguale')
        feedback.innerHTML += 'già presente nei nostri sistemi'
}
}
console.log(message)

if (message == 'false') {
    feedback.innerHTML += 'registrata correttamente'
    emails.push(userEmail)
}

console.log(emails)


// Se è presente alert, sennò conferma di inserimento