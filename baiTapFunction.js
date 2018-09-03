function getRandomFunction(x) {
    return Math.random();
}

function getRandomFuncWithFloor(x) {
    var y = Math.random();
    console.log(y);
    console.log(Math.floor(x * y));
    //Math.random() trả 1 số ngẫu nhiên từ 0 đến 1.
    //Math.floor làm tròn xuống.
}

// console.log(getRandomFunction(2));
// getRandomFuncWithFloor(2);

//vẽ hình
function veHinh(x) {
    var string = "";
    for (var i = 0; i < x; i++) {
        string += "*";
        console.log(string);
    }
}

function veHinhVer2(x) {
    var string = "";
    for (var i = 0; i < x; i++) {
        string = "";
        for (var j = 0; j <= i; j++) {
            string += "*";
        }
        console.log(string);
    }
}

function veHinhVer3(x) {
    let string = "";
    for (; string.length <= x; string += "*")
        console.log(string);
}

// veHinh(5);
// console.log("==============");
// veHinhVer2(5);
// console.log("==============");
// veHinhVer3(5);

//Bai 1


function Bai1(x, y) {
    console.log("=======Bai 1=======");
    console.log("A: " + x);
    console.log("B: " + y);
    console.log("A + B: " + (x + y));
    console.log("A - B: " + (x - y));
    console.log("A * B: " + (x * y));
    console.log("A / B: " + (x / y));
    console.log("A % B: " + (x % y));
}
//Bai1(5, 8);

//Bai 2 cho n = 87531


function Bai2(n) {
    console.log("=======Bai 2=======");
    for (let i = 0; i <= n; i++)
        if (i % 154 == 0) console.log(i);
}
//Bai2(87531);
//Bai 3

function Bai3(dong) {
    console.log("        ");
    console.log("=======Bai 3=======");
    for (let i = 1; i <= dong; i++) {
        let string = "";

        for (let j = 1; j <= i; j++) {
            string += " " + j;
        }
        console.log(string);
    }
}


function Bai4(dong) {
    console.log("                   ");
    console.log("=======Bai 4=======");

    for (let i = 0; i <= dong; i++) {
        let string = "";
        let number = 0;

        for (let j = 0; j < dong; j++) {
            if (j >= (dong - i))
                string += " " + ++number;
            else
                string += "  ";
        }
        console.log(string);
    }
}

function Bai5(dong) {
    console.log("        ");
    console.log("=======Bai 5=======");

    for (let i = 0; i < dong; i++) {
        let string = "";
        let count = 0;

        for (let j = 0; j < dong * 2; j++) {
            if (j >= (dong - i) && j <= (dong + i))
                string += " " + ++count;
            else
                string += "  ";
        }
        console.log(string);
    }
}

function Bai6(dong) {
    console.log("        ");
    console.log("=======Bai 6=======");

    for (let i = 0; i < dong * 2; i++) {
        let string = "";
        let count = 0;

        for (let j = 0; j < dong; j++) {
            if (i < dong) {
                if (j >= (dong - i))
                    string += " " + ++count;
                else
                    string += "  ";
            } else {
                if (j >= (i - dong))
                    string += " " + ++count;
                else
                    string += "  ";
            }
        }
        console.log(string);
    }
}

function Bai7(dong) {
    console.log("        ");
    console.log("=======Bai 7=======");

    for (let i = 0; i <= dong * 2; i++) {
        let string = "";
        let count = 0;
        let check = false;
        for (let j = 0; j < dong * 2; j++) {
            if (i < dong) {
                if (j >= dong - i && j <= dong + i) {
                    string += " " + ++count;
                } else
                    string += "  ";
            } else if (i > dong + 1) {
                if (j >= i - dong && j <= dong * 2 - (i - dong)) {
                    string += " " + ++count;
                } else
                    string += "  ";
            } else
                check = true;
        }
        if (!check)
            console.log(string);
    }
}

function Bai8(dong) {
    console.log("        ");
    console.log("=======Bai 8=======");

    for (let i = 0; i <= dong * 2; i++) {
        let string = "";
        let count = 0;
        let check = false;
        for (let j = 0; j < dong * 2; j++) {
            if (i < dong) {
                if (j == dong - i || j == dong + i) {
                    string += " " + ++count;
                } else if (j >= dong - i && j <= dong + i) {
                    string += "  ";
                    count++;
                } else {
                    string += "  ";
                }
            } else if (i > dong + 1) {
                if (j == i - dong || j == dong * 2 - (i - dong)) {
                    string += " " + ++count;
                } else if (j >= i - dong && j <= dong * 2 - (i - dong)) {
                    string += "  ";
                    count++;
                } else {
                    string += "  ";
                }
            } else
                check = true;
        }
        if (!check)
            console.log(string);
    }
}

function Bai9(dong) {
    console.log("        ");
    console.log("=======Bai 9=======");

    let countAnother = 0;
    for (let i = 0; i <= dong * 2; i++) {
        let string = "";
        let count = 0;
        let test = 0;
        let check = false;

        for (let j = 0; j < dong * 2; j++) {
            if (i == dong - 1 && j < dong * 2 - 1) {
                if (test == 0) string += "  ";
                test++;
                string += " " + ++count;
            } else if (i < dong) {
                if (j == dong) {
                    string += " " + ++countAnother;
                    count++;
                } else if (j == dong - i || j == dong + i) {
                    if (j < dong * 2 - 1)
                        string += " " + ++count;
                } else if (j >= dong - i && j <= dong + i) {
                    string += "  ";
                    count++;
                } else {
                    string += "  ";
                }
            } else if (i > dong + 1) {
                if (j == dong && i < dong * 2) {
                    string += " " + ++countAnother;
                    count++;
                } else if (j == i - dong || j == dong * 2 - (i - dong)) {
                    string += " " + ++count;
                } else if (j >= i - dong && j <= dong * 2 - (i - dong)) {
                    string += "  ";
                    count++;
                } else {
                    string += "  ";
                }
            } else
                check = true;
        }
        if (!check)
            console.log(string);
    }
}
// Bai3(5);
// Bai4(5);
// Bai5(5);
// Bai6(5);
// Bai7(5);
// Bai8(5);
Bai9(5);