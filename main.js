"use strict";

function load() {
    console.log('debugMainProcess pid:', process.pid);
    process._debugProcess(process.pid);
}
exports.load = load;

function unload() {
    console.log('cancel debugMainProcess pid:', process.pid);
    process._debugEnd(process.pid);
}
exports.unload = unload;
