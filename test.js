const x = 2
let y = 4

function update(int){
    return Math.random()+y*int;
}

y=2;

if (y <3){
    y = 3;
}

const results = update(x);
console.log(results)