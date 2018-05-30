var fs = require('fs');
var data = fs.readFileSync('./test_music/guitarup_full.wav');

function hex2ascii (hexBuffer, bytesLength) {
  // Buffer (4 bytes) to Hex String
  var Hexstr = hexBuffer.toString(16);
  var ascii = '';
  for(var i = 0, count = 0; count < bytesLength; i+=2, count++) {
      // Hex String covert to Hex Int
      // And put into String.fromCharCode
      // For converting Hex Int to ASCII
      ascii += String.fromCharCode(parseInt(Hexstr.substr(i, 2), 16));
  }
  return ascii;
}

var ChunkID = hex2ascii(data.readUInt32BE(0), 4);
var ChunkSize = data.readUInt32LE(4).toString(10);
var Format = hex2ascii(data.readUInt32BE(8), 4);
var SubChunk1ID = hex2ascii(data.readUInt32BE(12), 4);
var SubChunk1Size = data.readUInt32LE(16).toString(10);
var AudioFormat = data.readUInt16LE(20).toString(10);
var NumChannels = data.readUInt16LE(22).toString(10);
var SampleRate = data.readUInt32LE(24).toString(10);
var ByteRate = data.readUInt32LE(28).toString(10);
var BlockAlign = data.readUInt16LE(32).toString(10);
var BitsPerSample = data.readUInt16LE(34).toString(10);
var SubChunk2ID = hex2ascii(data.readUInt32BE(36), 4);
var SubChunk2Size = data.readUInt32LE(40).toString(10);

console.log('ChunkID:', ChunkID);
console.log('ChunkSize:', ChunkSize);
console.log('Format:', Format);
console.log('SubChunk1ID:', SubChunk1ID);
console.log('SubChunk1Size:', SubChunk1Size);
console.log('AudioFormat:', AudioFormat);
console.log('NumChannels:', NumChannels);
console.log('SampleRate:', SampleRate);
console.log('ByteRate:', ByteRate);
console.log('BlockAlign:', BlockAlign);
console.log('BitsPerSample:', BitsPerSample);
console.log('SubChunk2ID:', SubChunk2ID);
console.log('SubChunk2Size:', SubChunk2Size);
