// b1
// let a = [
//     [1, 2, 1, 24],
//     [8, 11, 9, 4],
//     [7, 0, 7, 27],
//     [7, 4, 28, 14],
//     [3, 10, 26, 7]
// ];
// for (let i = 0; i < a.length; i++) {
//     console.log(`row ${i}`)
//     for (let j = 0; j < a[i].length; j++) {
//         console.log(a[i][j])
//     }
// }
// b2
// let a =  [ 'c', 's', 'c', '2', '6', '1' ];
// let first = 0;
// let last = a.length-1
// while (first<last){
//     let b = a[first]
//     a[first] = a[last]
//     a[last] = b;
//     first++;
//     last--
// }
// console.log(a)

// b3
// let n = parseInt(prompt("Nhập vào kích thước của mảng"))
// let a = []
// for (let i = 0; i < n; i++) {
//     x = (prompt(`Nhập vào phần tử thứ ${i} :`))
//     a.push(x);
// }
// console.log(a)
// let b = []
// for (let i = 0 ; i<a.length ; i++){
//     let d = (milliseconds(parseInt(a[i])));
//     if(d == true){
//         b.push(a[i])
//     }
// }
// function milliseconds(x) {
//     if (isNaN(x)) {
//         return false;
//     }
//     return true;
// }
// console.log(b)
// b4
// let a = prompt("Nhập vào chuỗi")
// function WordCount(str) {
//     return str.split(" ").length;
// }
//
// console.log(WordCount(a));

// b5
// let a = [1,2,3,4,5]
// let b = [1,2,3,4,5]
// let count;
// let dema = 0;
// let demb = 0;
// if(a.length >= b.length){
//     count = a.length
// }
// else{
//     count = b.length;
// }
// for(let i = 0; i < count;i++){
//     if(a[i] === b[i]){
//         console.log(`Phần tử ${a[i]} giống `)
//         dema++;
//         demb++;
//     }
//     else{
//         console.log(`Phần tử ${a[i]} không giống `)
//         dema++;
//     }
// }
// if(a.length === dema && dema == demb && demb == b.length){
//     console.log(`Mảng ${a} bằng mảng ${b}`)
// }
// else{
//     console.log(`Mảng ${a} không bằng mảng ${b}`)
// }

// b6
// let n = parseInt(prompt("Nhập vào kích thước của mảng"))
// let a = []
// for (let i = 0; i < n; i++) {
//     x = (prompt(`Nhập vào phần tử thứ ${i} :`))
//     a.push(x);
// }
// for (let key in a) {
//     if(a[key] == "-"){
//         a[key] = "_"
//     }
// }
// console.log(a)
