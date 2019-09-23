#! /usr/bin/env node
const fs = require("fs");

console.log(__dirname);
fs.readFile(__dirname + '/info.json', 'utf8', function(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        return data;
    }
});