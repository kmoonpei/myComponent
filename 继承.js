
    // function Fn(name,age){
    //     this.name = name;
    //     this.age = age;
    // }
    // Fn.prototype = {
    //     add:function(){
    //         var num = 10;
    //         return num+=10;
    //     }
    // }

    // var fn1 = new Fn("li",12);
    // var fn2 = new Fn("mi",13);
    // alert(fn1.add());
    // alert(fn2.add());
    


    function Sup(name){
        this.name = name;
    }
    Sup.prototype = {
        getSupname:function(){
            return this.name;
        }
    }
    
    function Sub(age){
        this.age = age;
    }
    Sub.prototype = new Sup("lili");
    Sub.prototype.getsubage = function(){
        return this.age;
    }

    var sup = new Sup("mimi");
    var sub = new Sub(23);
    console.log(sub.getSupname());


