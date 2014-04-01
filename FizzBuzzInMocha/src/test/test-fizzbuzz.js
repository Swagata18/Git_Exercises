/**
 * Created by Swagata on 3/31/14.
 */



var fizzbuzz = require('../../lib/fizzbuzz');
var assert = require('assert');

var num_div_by_three_five = assertCompleteArray().num_div_by_three_five;
var num_div_by_three = assertCompleteArray().num_div_by_three;
var num_div_by_five = assertCompleteArray().num_div_by_five;
var num_not_divisible = assertCompleteArray().num_not_divisible;

var actualFizzBuzz = assertCompleteArray().actualFizzBuzz;
var expectedFizzBuzz = assertCompleteArray().expectedFizzBuzz;


describe("FizzBuzz test", function () {

    it("should return FizzBuzz if the number is divisible by both 3 and 5", function () {
        for (var i=0; i<num_div_by_three_five.length; i++){
            assert.equal("FizzBuzz", fizzbuzz(num_div_by_three_five[i]));

        }
    })

    it("should return Fizz if the number is divisible by 3", function () {
        for (var i=0; i<num_div_by_three.length; i++){
            assert.equal("Fizz", fizzbuzz(num_div_by_three[i]));


        }
    })

    it("should return Buzz if the numbers is divisible by 5", function(){
        for(var i=0; i<num_div_by_five.length; i++){
            assert.equal("Buzz", fizzbuzz(num_div_by_five[i]));

        }
    })


    it("should return Fizz/Buzz/FizzBuzz for numbers divisible by 3/5/both respectively", function(){
        for(var i=0; i<actualFizzBuzz.length; i++){
            assert.equal(actualFizzBuzz[i], expectedFizzBuzz[i]);
            console.log(actualFizzBuzz[i]);
        }
    })


    it("should return the number if it is not divisible by 3 or 5 or both", function(){
        for(var i=0; i<num_not_divisible.length; i++){
            assert.equal(num_not_divisible[i], fizzbuzz(num_not_divisible[i]));
        }
    })

})



function assertCompleteArray(){

    var num_div_by_three_five = [], num_div_by_three = [], num_div_by_five = [],
        num_not_divisible =[], actualFizzBuzz = [], expectedFizzBuzz = [];

    for (var i = 1; i <= 100; i++) {
        var val = fizzbuzz(i);
        actualFizzBuzz.push(val);

        if (i % 15 == 0) {
            num_div_by_three_five.push(i);
            expectedFizzBuzz.push("FizzBuzz");
        } else if (i % 3 == 0) {
            num_div_by_three.push(i);
            expectedFizzBuzz.push("Fizz");
        } else if (i % 5 == 0) {
            num_div_by_five.push(i);
            expectedFizzBuzz.push("Buzz");
        } else {
            num_not_divisible.push(i);
            expectedFizzBuzz.push(i);
        }
    }
    return {num_div_by_three_five: num_div_by_three_five, num_div_by_three: num_div_by_three,
        num_div_by_five : num_div_by_five, num_not_divisible: num_not_divisible,
        actualFizzBuzz: actualFizzBuzz, expectedFizzBuzz: expectedFizzBuzz};
}
