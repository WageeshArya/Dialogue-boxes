alert("Welcome!");
let name = prompt("Enter your name");
alert(`Welcome, ${name}`);
let sum = prompt('What is the sum of 1+1?');
let count = 0;
let tryAgain;
console.log(typeof sum);
console.log(parseInt(sum));
console.log(parseInt(sum)===2);

if(parseInt(sum) === 2){
    console.log('hello');
}

else{
    while( count<2 ){

        tryAgian = confirm('Incorrect answer. Would you like to try again?');

        if(tryAgain === true){
            sum = prompt('What is the sum of 1+1?');
        }
        else{
            break;
        }
        if(parseInt(sum) === 2){
            break;
        }
    }
}
