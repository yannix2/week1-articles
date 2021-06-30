let i = 2;
for (i=2 ; i<=10; i++) { 
  if (i%2==0)
  {console.log ( i )}
}
// QUESTION :Use the for loop to output even numbers from 2 to 10//

let i=0
while (i<3){
    console.log( `number ${i}!` )
    i++
}

// QUESTION :Rewrite the code changing the for loop to while without altering its behavior (the output should stay same)// 

let a 
do {
  console.log('write ur number')
  //hot e lire(a)
} while (a>=100)
//QUESTION3: Write a loop which prompts for a number greater than 100//


let n =90

fonctionpremier : 
for (let i=2; i<=n; i++) { 

  for (let j = 2; j<=i/2; j++) {
    if (i % j == 0) continue fonctionpremier 
  }
  console.log( i ) 
}

//QUESTION : Write the code which outputs prime numbers in the interval from 2 to n