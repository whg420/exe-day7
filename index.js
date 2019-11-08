#! /usr/bin/env node
const child_process=require('child_process');
const path=require('path');
const fs=require('fs');
let child = child_process.spawn('node',['server.js']);

child.stdout.on('data',data => {
    console.log(data)
})  

child.stderr.on('data',error => {
    console.log(error)
})