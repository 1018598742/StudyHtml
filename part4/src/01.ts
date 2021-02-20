class Person{
    //定义属性（实例属性）
    name:string = "孙悟空";

    //在属性前使用static关键字可以定义类属性（静态属性）
    static age:number = 18;

    //只读属性 readonly
    readonly desc:string = "只读属性描述"

    //实例方法
    sayHello(){
        console.log("Hello hi!!!")
    }
}

const per = new Person();
console.log(per);
console.log(Person.age)
per.name = "tom";
console.log(per);
console.log(per.desc);
per.sayHello();
