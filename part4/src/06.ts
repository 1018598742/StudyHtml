(function (){

    //描述一个对象的类型
    type myTpe = {
        name:string,
        age:number
    };

    //接口用来定义一个类结构
    interface myInterface{
        name:string;
        age:number;
    }

    const obj:myInterface = {
        name:'sss',
        age:111
    }

    /*
    接口在定义类的时候去限制类的结构
     */
    interface myInter{
        name:string;
        sayHello():void;
    }

    class MyClass implements myInter{
        name: string = "hello";

        sayHello(): void {
            
        }

    }

})();