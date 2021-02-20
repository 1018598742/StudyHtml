(function () {
    class Animal{
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        sayHello() {
            console.log("动物在叫...");
        }
    }

    class Dog extends Animal{
        sayHello() {
            console.log("小狗在叫...");
        }
    }

    class Cat extends Animal{
        sayHello() {
            console.log("小猫在叫...");
        }
    }


    const dog = new Dog("旺财",5);
    const cat = new Cat("喵喵",3);
    dog.sayHello()
    cat.sayHello()
})();