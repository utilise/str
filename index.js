var is = require('is') 

module.exports = function str(d){
  return is.num(d) 
       ? String(d)
       : JSON.stringify(d)
}