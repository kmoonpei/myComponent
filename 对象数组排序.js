
    $.extend({
        sayHello: function(name) {
            console.log('Hello,' + (name ? name : 'Dude') + '!');
        }
    })
    $.sayHello(); //调用
    $.sayHello('Wayou'); //带参调用

   

    //对象数组排序
    function keysrt(key,desc) {
        return function(a,b){
            return desc ? ~~(a[key] > b[key]) : ~~(a[key] < b[key]);
        }
    }
    var ary=[{id:1,name:"b"},{id:2,name:"a"}];
    ary.sort(keysrt('id',true));
