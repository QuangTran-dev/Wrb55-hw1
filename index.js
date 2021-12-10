var fs = require('fs');
const path = require('path');

//Create
var  content = [{name:'Trần Minh Quang', age:21}];
fs.writeFile('student.json', JSON.stringify(content), (err) => {
    if (err) { 
        console.log(err); 
        return; 
    };
    console.log("Create file successfully!");
});

//Read
fs.readFile(path.resolve(__dirname, 'student.json'), 'utf8', function(err,data) {
    if (err) return;
    console.log("File description:", data);
});

//Update
var content = {name:'Trần Minh Quân', age:18};
fs.readFile(path.resolve(__dirname, 'student.json'), 'utf8', function(err,data) {
    if (err) return;
    var dataParse = JSON.parse(data);
    dataParse.push(content);

    fs.writeFile('student.json', JSON.stringify(dataParse), (err) => {
        if (err) { 
            console.log(err); 
            return; 
        };
        console.log("Update file successfully!");
    });
});

//Delete
fs.unlink('student.json', function (err) {
    if (err) throw err;
    console.log('File deleted!');
});