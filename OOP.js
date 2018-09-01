var Me = {
    name: "Cao Vĩnh Kha",
    age: 22,
    class: "CN14B",
    family: {
        nameFather: "Cao Anh",
        nameMother: "Nguyễn Thị Bạch Tuyết",
        nameBrother1: "Cao Vĩnh Thụy",
        nameBrother2: "Cao Vĩnh San",
        nameSister: "Cao Thục Chinh"
    },
    work: function() {
        console.log("Tôi là sinh viên");
    }
};

console.log(Me);
console.log(Me.family.nameFather);
Me.work();