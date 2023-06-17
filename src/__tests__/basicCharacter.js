import { Character } from '../character.js';
import { data } from '../data.js';

import { Bowman } from '../bowman.js';

test ('testing of "level" parameter', () => {
  const result = new Character("Python", 'Daemon').level; 
  expect(result).toBe(1);
});

// name.length > 1
test ('testing of "health" parameter', () => {
  const result = new Character("Python", 'Daemon').health; 
  expect(result).toBe(100);
});  
// typeof(name) == 'string'
test ('invalidNameType', () => {
  const name = new Character("Python", 'Daemon').name;
  const result = typeof(name);
  expect(result).toBe('string');  
});

// name.length > 1
test ('minName', () => {
  const result = new Character("Py", 'Daemon').name;
  expect(result).toBe("Py");  
});

// name.length <= 1
test ('lessThenMinName', () => {
  expect(() => {
    new Character("P", 'Daemon').name.toThrow();   
  })
}); 

test ('maxName', () => {
  const result = (new Character("Python", 'Daemon').name);
  expect(result).toBe("Python");  
});

// name.length >= 11
test ('moreThenMaxName', () => {
  expect(() => {
    new Character("Ppppppppppppppppppp", 'Daemon').name.toThrow();    
  })
}); 

test ('name', () => {
  const result = new Character("Python", 'Daemon').name;
  expect(result).toBe("Python");
}); 

test ('nameError', () => {
  expect(() => {
    new Character("P", 'Daemon').name.toThrow(
      'Name not a string or its length is out of the range 2-10');    
  })
}); 

test ('nameError', () => {
  expect(() => {
    (new Character("P", 'Daemon').name).toThrow();
      // 'Name not a string or its length is out of the range 2-10');    
  })
});

// test('boom!', () => {
//   expect(() => {
//     functionWithException(0);
//   }).toThrow();
// });

// test ('notNameError', () => {
//   // const result = new Character("P", 'Daemon').name;
//   expect(() => {
//     new Character("P", 'Daemon').name.not.toThrow();
//       // 'Character`s name not a string or its length is out of the range 2-10');    
//   })
// }); 


// test ('additionalTest', () => {
//   expect(() => {
//     additional('word').toBe('Hi');    
//   });
//   expect(() => {
//     additional('dddddd').toBe('ddddddrow');    
//   });
//   expect(() => {
//     additional('xxxxx').toBe('ddddddrow');    
//   });
// });
