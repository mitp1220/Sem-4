//  ek folder create karo named (AA) in temporary directory and in this (AA) folder, creat a file named temp1.txt. if u use platform(Win32) print "you are working on 32 bit os" else if make it print "you are working on 64 bit platform".

var fs = require('fs')
os = require('os')

var tmp = os.tmpdir()
var plt = os.platform()

fs.mkdirSync(tmp+"/AA")
if(plt=="win32") { 
    fs.writeFileSync(tmp+"/AA/temp1.txt","you are working on a 32 bit OS.")
}
else {
    fs.writeFileSync(tmp+"/AA/temp1.txt","you are working on a 64 bit OS.")
}

// aa program notes ma available che atle ema verify kari leje aa run nathi kryu so dont trust blindly.
// to create a folder (tmp+"/AA")
//  to create a file (tmp+"AA/file name")