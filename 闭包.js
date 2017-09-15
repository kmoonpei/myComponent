


foo();
function foo(){
    console.log(2);
}
var foo = function(){
    console.log(1);
}



var i=3;
var data = [];
for(i=0;i<3;i++){
    data[i] = function(){
        console.log(i);
    }
 }

 data[0]();//3
 data[1]();//3
 data[2]();//3


var i=3;
var data = [];
for(i=0;i<3;i++){
    data[i] = (function(k){
        return function(){
            console.log(k);
        }
    })(i);
}

data[0]();//0
data[1]();//1
data[2]();//2
data;


for (var i = 0; i < 5; ++i) {
    setTimeout(function (i) {
        return function() {
            console.log(i + ' ');
        }
    }(i), 100);
}
for (var i = 0; i < 5; ++i) {
    (function (i) {
        setTimeout(function () {
        console.log(i + ' ');
        }, 100);
    }(i));
}

function fn(i){
    this.i = i;
}
var a = fn(1);
var b = a;
console.log(b === a);