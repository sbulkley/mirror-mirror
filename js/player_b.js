
/*
var child_process = require('child_process');

// exec: spawns a shell.
child_process.exec('ls -lah /tmp', function(error, stdout, stderr){
	console.log(stdout);
});
 
// execFile: executes a file with the specified arguments
child_process.execFile('hypest', ['2bjcw'], function(error, stdout, stderr){
	console.log(stdout);
});

//function playIt(id) {
//	child = exec('hypest', [id]);
//}

//playIt("2bjcw");
*/

function cmd_exec(cmd, args, cb_stdout, cb_end) {
  var spawn = require('child_process').spawn,
    child = spawn(cmd, args),
    me = this;
  me.exit = 0;  // Send a cb to set 1 when cmd exits
  child.stdout.on('data', function (data) { cb_stdout(me, data) });
  child.stdout.on('end', function () { cb_end(me) });
}
foo = new cmd_exec('netstat', ['-rn'], 
  function (me, data) {me.stdout += data.toString();},
  function (me) {me.exit = 1;}
);
function log_console() {
  console.log(foo.stdout);
}
setTimeout(
  // wait 0.25 seconds and print the output
  log_console,
250);