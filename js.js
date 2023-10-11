// // №279 1
// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.map(x => Math.sqrt(x));
// console.log(newArr); 
// // №279 2
// let arr = ['hello', 'world', 'javascript'];
// let newArr = arr.map(x => x + '!');
// console.log(newArr); 
// // №279 3
// let arr = ['hello', 'world', 'javascript'];
// let newArr = arr.map(x => x.split('').reverse().join(''));
// console.log(newArr); 
// // №279 4
// let arr = ['123', '456', '789'];
// let newArr = arr.map(x => x.split('').map(y => parseInt(y)));
// console.log(newArr); 
// // №279 5
// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.map((x, i) => x * (i + 1));
// console.log(newArr); 
// №280 1
// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// arr.forEach(x => sum += x * x);
// console.log(sum); 
// №281 1
// let arr = [1, -2, 3, 0, -4, 5];
// let newArr = arr.filter(x => x > 0);
// console.log(newArr); 
// // №281 2
// let arr = [1, -2, 3, 0, -4, 5];
// let newArr = arr.filter(x => x < 0);
// console.log(newArr); 
// // №281 3
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArr = arr.filter(x => x > 0 && x < 10);
// console.log(newArr); 
// // №281 4
// let arr = ['hello', 'world', 'javascript', 'python', 'java'];
// let newArr = arr.filter(x => x.length > 5);
// console.log(newArr); 
// // №281 5
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArr = arr.filter((x, i) => x * (i + 1) < 3
// // №281 6
// let arr = [1, 2, [3, 4], 5, [6, 7]];
// let newArr = [];

// function filterArr(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       filterArr(arr[i]);
//     } else {
//       newArr.push(arr[i]);
//     }
//   }
// }

// filterArr(arr);
// console.log(newArr); 
// №282 1
// let arr = [1, 2, 3, 4, 5];
// let result = arr.every((x, i) => x * (i + 1) < 30);
// console.log(result); // true
// №282 2
// let arr = [1, 2, 3, 4, 5];
// let result = arr.every(x => x > 0);
// console.log(result); // true
// №283 1
// let arr = [1, 2, 3, 4, 5];
// let result = arr.some(x => x > 0);
// console.log(result); // true

// // №283 2
// let arr = [1, 2, 3, 4, 5];
// let result = arr.some((x, i) => x * (i + 1) > 30);
// console.log(result); // true


// на этом разделе задания по изучению перебирающих функций закончились 