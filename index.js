var is = require('is') 

module.exports = function str(d){
  return !d ? ''
       : is.obj(d) ? JSON.stringify(d)
       : String(d)
}