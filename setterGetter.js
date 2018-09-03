class Person {
    constructor(age) {
        this.age = age;
    }
    get birthYear() {
        return 2018 - this.age;
    }

    set birthYear(value) {
        this.age = 2018 - value;
    }
}

var per = new Person(22);
console.log(per.birthYear);
per.birthYear = 1998;
console.log(per.birthYear);