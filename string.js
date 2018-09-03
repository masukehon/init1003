const str = "Cao Vinh Kha 11a4";

console.log(str.length);

str[5] = 'K'; //ko thay đổi
console.log(str);

var index = str.indexOf("Vinh"); // vị trí chữ a đầu tiên của chuỗi
console.log("indexOf 'Vinh' : " + index);

index = str.lastIndexOf("a"); // vị trí chữ a cuối cùng của chuỗi

console.log("lastIndexOf 'a': " + index);

index = str.indexOf("a", 4); // vị trí chữ a đầu tiên của chuỗi tính từ vị trí truyền vào (tham số thứ 2 position)
console.log("indexOf 'a' (string,position): " + index);



console.log("substring: " + str.substring(4, 8)); // 2 tham số start và end
console.log("substr: " + str.substr(4, 4)); // 2 tham số start và length

//split
console.log("split theo khoang trang: ");
console.log(str.split(' '));

//join
console.log(['Cao', 'Vinh', 'Kha'].join(' '));

//replace
console.log(str.replace("Kha", "Hon"));

//include
console.log(str.includes("x"));

//startsWith
console.log(str.startsWith("C"));

//endsWith
console.log(str.endsWith("a4"));

//trim | trimLeft | trimRight 
console.log("   abcd\n".trim());

//localeCompare > return 1; < return -1; = return 0
console.log("kha".localeCompare("kha"));