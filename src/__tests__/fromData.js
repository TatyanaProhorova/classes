import { data } from '../data.js';
import { Character } from '../character.js';

test ('dataKeys', () => {
    expect(() => {
        types = Object.keys(data).toBe(
        ['Bowman',
         'Swordsman',
         'Magician',
         'Undead',
         'Zombie',
         'Daemon']);    
    })
  });

//   test ('rightType', () => {
//     expect(() => {
//         types = Object.keys(data);
//         (types.includes(type)).toBe('true');    
//     })
//   });
