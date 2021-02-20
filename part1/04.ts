let b: { name: string, age?: number };
b = {name: "孙悟空"};

let c: { name: string, [propName: string]: any };

let d: (a: number, b: number) => number;
d = function (n1, n2) {
    return n1 + n2;
}

enum Gender{
    Male,
    Female
}

let i:{name:string,gender:Gender};
i = {
    name:'孙悟空',
    gender:Gender.Male
}

type myType = 1 | 2 | 3;
let k:myType;
k = 3;