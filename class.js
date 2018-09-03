// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.work = function() {
//         console.log("di hoc");
//     }
// }

class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    work() {
        console.log("Toi ten la " + this.name);
    }
}

// const per1 = Person();
const per2 = new Person("Kha", 22);
const per3 = new Person();

console.log(per2.name);
per2.work();