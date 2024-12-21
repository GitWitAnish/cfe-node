const os = require('os');

// It returns the list of network interfaces
console.log("List of network Interfaces: ", os.networkInterfaces());

// It returns the operating system's default directory for temp files
console.log("OS default directory for temp files: ", os.tmpdir());

// It returns the endianness of system
// Endianness is the order in which bytes in computer memory are read in a computer's architecture and storage system. There are two options for endianness ordering: big-endian or little-endian (LE).
console.log("Endianness of system: ", os.endianness());

// It returns hostname of system
console.log("Hostname: ", os.hostname());

// It returns operating system name
console.log("Operating system name: ", os.type());

// It returns the platform of OS
console.log("Operating system platform: ", os.platform());

// It returns the operating system's release
console.log("OS release: ", os.release());
