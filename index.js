var is = require('is') 

module.exports = function str(d){
  return !d ? ''
       : is.num(d) ? String(d)
       : JSON.stringify(d)
}