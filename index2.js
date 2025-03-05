const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

let string = '';
for (let i = 0; i < friends.length; i++) {
  string += friends[i];
  if (i < friends.length - 1) {
    string += ', ';
  }
}
console.log(string); 


const cards = ['Карточка-1', 'Карточка-2', 'Карточка-3', 'Карточка-4', 'Карточка-5'];


const cardToRemove = 'Карточка-3';
const indexToRemove = cards.indexOf(cardToRemove);
if (indexToRemove !== -1) {
  cards.splice(indexToRemove, 1);
}

console.log('Після видалення:', cards);


const cardToInsert = 'Карточка-6';
const insertIndex = 2; 
cards.splice(insertIndex, 0, cardToInsert);

console.log('Після додавання:', cards);


const cardToUpdate = 'Карточка-4';
const updateIndex = cards.indexOf(cardToUpdate);
if (updateIndex !== -1) {
  cards[updateIndex] = 'Оновлена картка-4';
}

console.log('Після оновлення:', cards);