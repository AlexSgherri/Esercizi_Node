const playerList = ["Joe", "Caroline", "Sabrina"]

function luckyDraw(player) {
    return new Promise((resolve, reject) => {
      const win = Boolean(Math.round(Math.random()));
  
      process.nextTick(() => {
        if (win) {
          resolve(`${player} won a prize in the draw!`);
        } else {
          reject(new Error(`${player} lost the draw.`));
        }
      });
    });
  }

luckyDraw("Joe")
.then( message => console.log(message) )
.then( ()=> luckyDraw("Caroline"))
.then( message => console.log(message) )
.then( ()=> luckyDraw("Sabrina"))
.then( message => console.log(message) )
.catch(lostMessage=> console.log(lostMessage))

// si potrebbe utilizzare l'async await 