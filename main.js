const schedule = require('node-schedule');
const exec = require('child_process').execSync;

// *    *    *    *    *    *
// ┬    ┬    ┬    ┬    ┬    ┬
// │    │    │    │    │    │
// │    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
// │    │    │    │    └───── month (1 - 12)
// │    │    │    └────────── day of month (1 - 31)
// │    │    └─────────────── hour (0 - 23)
// │    └──────────────────── minute (0 - 59)
// └───────────────────────── second (0 - 59, OPTIONAL)


// let j = schedule.scheduleJob('0 * * * *', function () {
//     //init folder date
//     let date = new Date();
//     let time = date.getFullYear() + '-' + (date.getMonth() >= 9 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1)) + '-' + (date.getDate() > 9 ? date.getDate() : "0" + date.getDate())
//     let path = "./" + time;

//     console.log(time);


// });

let git_add = "git add main.js";
exec(git_add, function (err, stdout, stderr) {
    if (err) {
        console.log('error:' + stderr);
    }
});
let git_commit = "git commit  -m  'test.'";
exec(git_commit, function (err, stdout, stderr) {
    if (err) {
        console.log('error:' + stderr);
    }
});

let git_push = "git push";
exec(git_push, function (err, stdout, stderr) {
    if (err) {
        console.log('error:' + stderr);
    }
});

// git add file2.txt
// git add file3.txt
// git commit  -m  "add 3 files."
