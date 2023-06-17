import { data } from './data.js';

import { Character } from './character.js';

export class Bowman extends Character {
  constructor(name) { 
    super(name, 'Bowman');
    this.attack = data[this.type]['attack'];
    this.defence = data[this.type]['defence'];
  };  
};


let b = new Bowman('Tomas',);
console.log("!!!!!!!!!");
console.log(b);
console.log("!!!!!!!!!");
