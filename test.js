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

veHinh(5);
console.log("==============");
veHinhVer2(5);
console.log("==============");
veHinhVer3(5);