/* Traccia:
1 - Chiedere all’utente il suo nome e salvarlo in una variabile
2 - Chiededere poi il suo cognome e salvarlo in una variabile
3 - Chiedere poi il suo colore preferito e salvarlo in una variabile
4 - Recuperare un elemento in pagina
5 - Scrivere sulla pagina nomecognomecolorepreferito21 
*/

console.log('JS OK');

// Punto 1

const userName = prompt('Come ti chiami?');
console.log(userName);

// Punto 2

const userSurname = prompt(`Qual'è il tuo cognome?`);
console.log(userSurname);

// Punto 3

const userFavoriteColor = prompt(`Qual'è il tuo colore preferito?`);
console.log(userFavoriteColor);

// Punto 4

const pageElement = document.getElementById('result');
console.log(pageElement);

// Punto 5

pageElement.innerHTML = userName + userSurname + userFavoriteColor + '21'
