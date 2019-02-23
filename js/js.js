
let end = 104000;
let primes= [];
let counter= 0;


function isPrime(num) {

  //iterating from 2 to num(function param)
  for(let i = 2; i < num; i++){

    //if divisable by 0, num is not prime
    if(num % i === 0){

      return false;
    }
   }


   if(counter === 10001){

     console.log('10001th', num);
   }


    primes.push(num);
    counter = counter +1;
    return num > 1;
}
for(let k = 2; k < end; k++){

    //  console.log
    isPrime(k);

}
console.log('primesLength' , primes.length - 1);
