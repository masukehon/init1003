var People = [
    { name: "Kha", age: 22, male: true },
    { name: "Huu", age: 12, male: true },
    { name: "Tuyen", age: 15, male: false }
];
var array = [1, 45, 6, 32, 2];
//hàm filter lọc trong mảng ra theo điều kiện
var filterArray = People.filter(person => person.age > 13 && !person.male);

// console.log(filterArray);

Array.prototype.myFilter = function(checkFn) {
    var output = [];
    for (let i = 0; i < this.length; i++) {
        if (checkFn(this[i])) output.push(this[i]);
    }
    return output;
}

var myFilterArray = People.myFilter(person => person.age > 13 && !person.male);
// console.log(myFilterArray);

//hàm map sẽ trả về các kết quả đã được thay đổi mà người dùng truyền vào
var mapArray = People.map(person => person.age + 1);

Array.prototype.myMap = function(transform) {
    var output = [];
    for (let i = 0; i < this.length; i++) {
        let element = this[i];
        output.push(transform(element));
    }
    return output;
}

var myMapArray = People.myMap(person => 2018 - person.age);
// console.log(myMapArray);

//hàm some sẽ trả về giá trị kiểu bool tương ứng với điều kiện mình truyền vào.
//chỉ cần 1 đối tượng trong mảng thỏa điều kiện thì auto true
Array.prototype.mySome = function(checkFn) {
    for (let i = 0; i < this.length; i++) {
        let element = this[i];
        if (checkFn(element)) return true;
    }
    return false;
}

// var mySome = People.mySome(person => person.age > 20);
// console.log(mySome);

//hàm some sẽ trả về giá trị kiểu bool tương ứng với điều kiện mình truyền vào.
//chỉ cần 1 đối tượng trong mảng không thỏa điều kiện thì auto false;

Array.prototype.myEvery = function(checkFn) {
    for (let i = 0; i < this.length; i++) {
        let element = this[i];
        if (!checkFn(element)) return false;
    }
    return true;
}

var myEvery = People.myEvery(person => { return person.age > 11 && person.name.length > 1 });
// console.log(myEvery);

Array.prototype.myFind = function(checkFn) {
    for (let i = 0; i < this.length; i++) {
        let element = this[i];
        if (checkFn(element)) return element;
    }
    return undefined;
}

var myFind = People.myFind(person => { return person.age < 11 });
// console.log(myFind);

Array.prototype.myForeach = function(implement) {
    for (let i = 0; i < this.length; i++) {
        let element = this[i];
        implement(element);
    }
}

// People.myForeach(person => {
//     console.log(`Xin chao toi ten la ${person.name}, ${person.age} tuoi`);
// });

// People.forEach((person, index) => {
//     console.log(`${index++} Xin chao toi ten la ${person.name}, ${person.age} tuoi`);
// });

//hàm sort
// var myArray = People.sort((personA, personB) => { return personA.age - personB.age });
// console.log(myArray);

//hàm reduce
var myArray = array.reduce((a, b) => a + b);
console.log(myArray);

var myArray = People.reduce((person1, person2) => person1.age + person2.age);
console.log(myArray);
// Giải thích tại sao đây lại ra NaN
// sau lần gộp thứ nhất. Mảng People sẽ như sau [34 , {name: "Tuyen", age: 15, male: false}]
// sang lần gộp thứ hai: object thứ nhất là 34. (34.age) really nigga.
// 34.age + person2.age => NaN

var myArray = People.map(per => per.age).reduce((a, b) => a + b);
console.log(myArray);