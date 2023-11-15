let uservalues = [] ;
let sum = 0 ;
let greater_than_zero = [] ;
for (i = 1 ; i <= 5 ; i++){
    uservalues.push(parseFloat(window.prompt("enter five values . " ) + ' '))
}

numberdeterminator(uservalues)

function numberdeterminator(uservalues){
    for(i = 0 ; i <= uservalues.length ; i++)
        if(uservalues[i] < 0){
            sum += uservalues[i]
    }
    else if(uservalues[i] >= 0) 
    {
         greater_than_zero.push(uservalues[i])
    }
    let quantity = greater_than_zero.length

    console.log("sum of values less than zero : " + sum + "\n",
    "number of values greater than zero: " + quantity);

}