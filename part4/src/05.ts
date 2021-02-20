(function () {
    //抽象类，不能用来创建对象
    //抽象类可以添加抽象方法
    abstract class Animal{
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        //抽象方法
        abstract sayHello():void;

    }

    class Dog extends Animal{
        sayHello() {
            console.log('hehhehehe ')
        }
    }


    const dog = new Dog("旺财",5);
    dog.sayHello();

})();