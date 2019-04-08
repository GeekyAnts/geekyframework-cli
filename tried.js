//const execa = require("execa");
//const Listr = require("listr");

/*

new Listr([
  {
    title: "Listing files",
    task: () => execa("ls", ["-l"])
  }
]).run();

*/
/*
var argv = require("minimist")(process.argv.slice(2));
console.dir(argv);
*/

var vorpal = require("vorpal")();

vorpal.command("foo", 'Outputs "bar".').action(function(args, callback) {
  this.log("bar");
  callback();
});

//vorpal.delimiter("myapp$").show();

vorpal.exec("foo");
