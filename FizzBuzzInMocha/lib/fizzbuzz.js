/**
 * Created by swags on 3/31/14.
 */


var fizzbuzz = function(num){

    if(num%15==0){

        return 'FizzBuzz';
    }
    else if(num%3==0){

        return 'Fizz';
    }
    else if(num%5==0){

        return 'Buzz';
    }
    else{

        return num;
    }
}
module.exports = fizzbuzz;