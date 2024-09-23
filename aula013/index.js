//               01234567
let umaString = "Um texto";

console.log(umaString.charAt(5));

//                01234567
let doisString = "Um texto";

console.log(doisString.indexOf('texto'));

//                01234567
let tresString = "Um texto";

console.log(tresString.lastIndexOf('m', 3));

//                  01234567
let quatroString = "Um texto";

console.log(quatroString.replace(/t/g, '1'));

//                 01234567
let cincoString = "Um texto";

console.log(cincoString.length);

//                01234567
let seisString = "Um texto";

console.log(seisString.toUpperCase ());
console.log(seisString.toLowerCase());

console.log(seisString.split('x'));