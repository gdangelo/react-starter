var run = require('./run');

module.exports = function build(){
  return new Promise(function(resolve, reject){
    var clean = run(require('./clean'));
    return clean.then(function(){
      run(require('./bundle')).then(function(){
        resolve();
      });
    });
  });
};
