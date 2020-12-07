// **** Creat random array ******
let randomArray = new Array(10);
for (let i= 0; i < randomArray.length; i++){
    randomArray[i] = Math.floor(Math.random()*100)
}

//************ Exercise 1 *********************
function findMax (){
    let myArray = randomArray;
    let max = myArray[0];

    for (let i=1; i < myArray.length; i++){
        if (max < myArray[i]){
            max = myArray[i];
        }
    }
    let myStr = myArray.join();
    let result = 'The array was input: ' + myStr + '</br>' + 'Max value: ' + max + '</br>'
    document.getElementById('findMax').innerHTML = result;
}
//***********************************************


//******** Exercise 2 **************************
function tryRemoveFromArray () {
    let myArray = randomArray;
    let outputArray = [];
    let x = +prompt('Enter a number: ');

    for (let i = 0; i < myArray.length; i++){
        if (x != myArray[i]){
            outputArray.push(myArray[i]);
        }
    }

    let strMyArray = myArray.join();
    let strOutputArray = outputArray.join();
    let result = 'The array was input: ' + strMyArray + '</br>'
        + 'Number was deleted ' + x
        + '</br> The output array: ' + strOutputArray;

    document.getElementById('tryRemoveFromArray').innerHTML = result;
}
//***************************************************


//********* Exercise 3 *****************************
function isFibonacci() {
    let num = prompt('Enter a number: ');

    let result = 'Number ' + num
    + (checkFibonacci(num)? ' is Fibonacci': ' is not Fibonacci');

    document.getElementById('isFibonacci').innerHTML = result;
}

function checkFibonacci (num){
    let a1 = 0;
    let a2 = 1;
    let a3 = 0;
    flag = false;
    do {
        a3 = a1 + a2;
        a1 = a2;
        a2 = a3;
        if (a3 == num){
            flag = true;
        }
    } while (a3<=num);
    return flag;
}
//************************************************************


//************ Exercise 4 ***********************************
function Circles (x, y, radius, color){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;

    this.render = function (){
        let ctx = document.getElementById('renderCircle').getContext('2d');
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, 2* Math.PI);
        ctx.fill();
    }
}
function renderCircle (){
    let circle = new Circles(110, 110, 100, '#000000');
    circle.render();
}
