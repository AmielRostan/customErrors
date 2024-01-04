const ValidationError = require('./validation-error');

// Your code here

class MaximumLengthExceededError extends ValidationError {
  constructor (difference) {
    super();
    this.name = 'MaximumLengthExceededError';
    if(difference != undefined) {
      this.message = `Maximum length exceeded by ${difference}`;
    } else {
      this.message = 'Maximum length exceeded';
    }
  }
}


/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = MaximumLengthExceededError;
} catch {
  module.exports = null;
}
