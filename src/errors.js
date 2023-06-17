export const invalidType = new Error('Character`s type not valid');
export class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = "ValidationError"; 
    }
  }
