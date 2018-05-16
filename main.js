const schedule = require('node-schedule');
const fs = require('fs');
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

schedule.scheduleJob('0 0 1 * * *', function () {
    let date = new Date();
    let time = date.getFullYear() + (date.getMonth() >= 9 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1)) + (date.getDate() > 9 ? date.getDate() : "0" + date.getDate())
    //init folder date
    console.log("start upload file")
    let path = "./test-report";
    if (fs.existsSync(path)) {
        files = fs.readdirSync(path);
        files.forEach(function (file, index) {
            var curPath = path + "/" + file;
            if (fs.statSync(curPath).isDirectory()) { // recurse
                deleteFolder(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
    fs.mkdirSync(path);
    fs.writeFileSync(path + "/test.txt", date, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
    console.log("end upload file")
    //init data

    console.log("start git")
    let git_add = "git add " + path + "/test.txt";
    exec(git_add, function (err, stdout, stderr) {
        if (err) {
            console.log('error:' + stderr);
        }
    });
    let git_commit = "git commit  -m '" + time + "'";
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
    console.log("end git")

});


