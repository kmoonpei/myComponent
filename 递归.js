function sum(b){
    if(b==1){
        return 1;
    }
    return arguments.callee(b-1)+b;
}

console.log(sum(3));