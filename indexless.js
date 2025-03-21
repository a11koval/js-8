//forEach - Перебирає, Може змінювати, Нічого не повертає
players.forEach(el => console.log(el.name))

//map - Викор. для трансформації масиву, Перебирає, Не змінює, Повертає колекцію
const playerNames = players.map(el => el.name)
console.log(playerNames)

const updatedPlayers = players.map(player => {
  return {
    ...player,
    points: player.points * 1.2
  }
});
console.log(updatedPlayers)

// filter - Викор. для фільтрації масиву, Перебирає, Не змінює, Повертає колекцію
const onlinePlayers = players.filter(player => player.online)
console.log(onlinePlayers)

// find - Викор. для пошуку унікального елемента масиву, Перебирає, Не змінює, Повертає колекцію
const playerById = players.find(player => player.id === 'player-3')
console.log(playerById)

// every and some - Перебирає, Не змінює, Повертає true або false
const allOnline = players.every(player => player.online);
console.log(allOnline)

const anyOnline = players.some(player => player.online);
console.log(anyOnline)