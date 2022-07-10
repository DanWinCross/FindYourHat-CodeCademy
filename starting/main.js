const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';


class Field {
    constructor(fieldArray) {
      this.fieldArray = fieldArray;
    }
  
    print() {
      return this.fieldArray.join();
    }
  
  }
  const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);
  
  console.log(myField.print());
