var argv = require("minimist")(process.argv.slice(2));

if (argv._ && argv._[0] == "init" && argv._[1]) {
  projectName = argv._[1];
  console.log("Creating project with " + projectName + "...");
} else {
  console.error("Usage: geek init projectName");
}
