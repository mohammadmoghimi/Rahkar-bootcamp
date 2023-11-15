let powerOfTwo , powerOfThree  , root = 0;

for( let i = 0 ; i <= 20 ; i ++){
    powerOfTwo = i*i ;
    powerOfThree = powerOfTwo * i ;
    root = Math.pow(i,1/2)
    console.log(powerOfTwo , powerOfThree , root);
} 