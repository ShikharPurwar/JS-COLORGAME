// let arr = ['red', 'green', 'black', 'yellow']
// let val = Math.floor(Math.random() * 4);
// let col = arr[val];
// console.log(col)

let change = () =>{
    let arr = ['RED', 'GREEN', 'BLACK', 'YELLOW', 'BLUE', 'PINK', 'AQUA', 'BROWN', 'ORANGE' ]
let val = Math.floor(Math.random() * 9);
let col = arr[val];
    document.getElementById("body").style.backgroundColor = col;
    document.getElementById("cname").innerHTML = col;
}