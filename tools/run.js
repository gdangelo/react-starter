/**
 * Script inspired from https://github.com/kriasoft/react-starter-kit/blob/master/tools/run.js.
 */

function format(time) {
  return time.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');
}

module.exports = run = function (fn, options) {
  return new Promise(function(resolve, reject){
    var start = new Date();
    console.log("[" + format(start) + "] Starting '" + fn.name + "'...");
    fn(options).then(function(){
      var end = new Date();
      var time = end.getTime() - start.getTime();
      console.log("[" + format(end) + "] Finished '" + fn.name + "' after " + time + " ms");
      resolve();
    });
  });
}

if (process.mainModule.children.length === 0 && process.argv.length > 2){
    var module = process.argv[2];
    run(require('./' + module + '.js'));
}
