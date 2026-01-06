// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

 

// Example 1:

// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"
// Example 2:

// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"


let address = "1.1.1.1";

function defangedIp(address) {
    let bracket = '[.]';

    let str = '';
    for (let ch of address) {
        // str += add;
        if (ch == '.') {
            str += bracket
        } else {
            str += ch
        }
    }

    return str;
}

let test = defangedIp(address);
console.log(test)


// ----------------------------------------------------------------------

function defangedIp1(address) {
    return address.replaceAll('.', '[.]');
}
