import { data } from './data.js';

export const types = Object.keys(data);

export class Character {
  constructor(name, type) {
    this.level = 1;
    this.health = 100;
    if (
      typeof(name) == 'string' &&
      name.length > 1 &&
      name.length < 11
      ) {
        this.name = name;
      } else {
        throw new Error(
          'Name not a string or its length is out of the range 2-10'
        );
    };

    const types = Object.keys(data);
    if (types.includes(type)) {
      this.type = type;
    }
     else {
      throw ({"name": "invalid type",
      "message": 'Character`s type not valid'
    });}

    this.attack = data[this.type]['attack'];
    this.defence = data[this.type]['defence'];
  };

  // damage(points) {
  //   let worsening = points * (1 - defence / 100);
  //   if (worsening > this.health) {
  //     this.health = 0;
  //   } else {
  //   this.health -= points * (1 - defence / 100);
  // }; 

  
//   levelUp() { 
//     if (this.health > 0) {
//       this.level++;
//       this.attack = Number((this.attack * 1.2).toFixed(0));
//       this.defence = Number((this.defence * 1.2).toFixed(0));
//       this.health = 100;
//       return this;
//     } else {
//       throw ({"name": "dead",
//               "message": 'Character died'
//       })
//     }     
//   };
};

// console.log("******");
// const ch1 = new Character("Python", 'Daemon');
// console.log(ch1);
// let a = ch1.levelUp();
// // let b = ch1.levelUp();
// console.log(a);
// // console.log(b);
// console.log("*********");



// Реализуйте в классе Character метод damage(points),
// который меняет внутреннее состояние объекта (points - это урон, наносимый персонажу).
// Метод damage(points) ничего не возвращает и рассчитывает  
// итоговое изменение жизни персонажа(health) по формуле:
// health -= points * (1 - defence / 100), учитывая, что значение health >= 0.
