(function (){

    class Person{

        private _name:string
        private _age:number

        constructor(name:string,age:number) {
            this._name = name;
            this._age = age;
        }
        //TS 中设置 getter 方法的方式
        get name(){
            return this._name
        }

        set name(value:string){
            this._name = value;
        }
    }

    const per = new Person("孙悟空",18);
    per.name = "猪八戒";
    console.log(per);

})()