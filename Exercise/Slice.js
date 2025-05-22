//first lets see slice(start Index, End Index)

let arr = [23, 56, 87, 32, 75, 13];
// Extracted array
let new_arr = arr.slice(2, 4); // upto 4th index, the 4th index is not icluded 
console.log(new_arr);
let new_arr2 = arr.slice();
console.log(new_arr2);

let new_arr3 = arr.slice(2); // from 2nd index all r printed
console.log(new_arr3);

let arr1 = [23, [87, 32, 75, 27,3,10,18 ,13]]; // nest array ..
    // Extracted array
    let new_arr4 = arr1[1].slice(2, 4); // arr1[1]
    console.log(new_arr4);


  //  const getFileExtension= (str) => str.slice(str.lastIndexOf('.')) ;
let str= 'Bhavishya';
console.log(str.lastIndexOf('a'))
