var b;
b = { name: "孙悟空" };
var c;
var d;
d = function (n1, n2) {
    return n1 + n2;
};
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var i;
i = {
    name: '孙悟空',
    gender: Gender.Male
};
