2.link:
1.Write a function called “addFive”.
var num = 10;
function addFive(num) { return num+5; }
var result = addFive(num)

2.Write a function called “getOpposite”.
var num = 5;
function getOpposite(num) {
if(Number.isInteger(num)){return num*(-1);}
else(){return -1}
}
var result = getOpposite(num)

3.Fill in your code that takes an number minutes and converts it to seconds.
var min = 5;
function toSeconds(min) {return min*60;}
var secs = toSeconds(min)

4.Create a function that takes a string and returns it as an integer.
var mystr = "5";
function toInteger(mystr) {return parseInt(mystr);}
var myint = toInteger(mystr)

5.Create a function that takes a number as an argument, increments the number by +1 and returns the result.
var myint = 0;
function nextNumber(myint) {return myint+1;}
var myNextint = nextNumber(myint)

6.Create a function that takes an array and returns the first element.
var arr = [1, 2, 3];
function getFirstElement(arr) {return arr[0];}
var data = getFirstElement(arr)

7.Convert Hours into Seconds
Write a function that converts hours into seconds.
var arr = [1, 2, 3];function hourToSeconds(arr) {
for(i=0;i<arr.length;i++){
arr[i] = 3600*arr[i];
}
return arr
}
var data = hourToSeconds(arr)

8.Find the Perimeter of a Rectangle
Create a function that takes height and width and finds the perimeter of a rectangle.
function findPerimeter(num1,num2){return 2*(num1+num2)};
var peri = findPerimeter(6,7)

9.Less Than 100?
Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
function lessThan100(num1,num2) {
if(num1+num2 < 100){
return true}
else{
return false
}
}
var res = lessThan100(22,15)

10.Old macdonald had a farm:
MacDonald is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
turkey = 2 legs
horse = 4 legs
pigs = 4 legs
The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.
function CountAnimals(tur,horse,pigs) {
var a = 2*tur;
var b = 4*(horse+pigs);
return a+b
}
var legs = CountAnimals(2,3,5)

11.Check if an Integer is Divisible By Five
Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.
function divisibleByFive(num1) {
if(num1%5===0){return true}
else{return false}
}
var divisible = divisibleByFive(5)

12.Write a function called “isEven”.
Given a number, “isEven” returns whether it is even.
function isEven(num){
if(parseInt(num)==num){
if(num%2===0){return true}
else{return false}
}
else{return -1} 
}
var even = isEven(5)

13.Write a function called “areBothOdd”.
Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.
function areBothOdd(num1, num2){
 if((num1%2!=0)&&(num2%2!=0)){return true}
 else{return false}
}

14.Write a function called “getFullName”.
Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.
function getFullName(firstName, lastName){
 if((firstName!='')&&(lastName!='')){return firstName + ' ' + lastName}
 else{return firstName + lastName}
}

15.Write a function called “getLengthOfWord”.
Given a word, “getLengthOfWord” returns the length of the given word.
function getLengthOfWord(word1){
 if(typeOf(word1)==string){return word1.length}
 else{return -1}
}

16.Create a function to calculate the distance between two points defined by their x, y coordinates
console.log(getDistance(100, 100, 400, 300));
function getDistance(x1, y1, x2, y2)
{
var d1 = (x1-x2)*(x1-x2);d2=(y1-y2)*(y1-y2);
return d1+d2
}

17.Write a function called “getNthElement”.
Given an array and an integer, “getNthElement” returns the element at the given integer, within the given array. If the array has a length of 0, it should return ‘undefined’.
function getNthElement(array,n){return array[n-1]}

18.Write a function called “getLastElement”.
Given an array, “getLastElement” returns the last element of the given array. If the given array has a length of 0, it should return ‘-1’.
function getLastElement(array){return array[array.length-1]}

19.Write a function called “getProperty”.
Given an object and a key, “getProperty” returns the value of the property at the given key. If there is no property at the given key, it should return undefined.
var obj = {
 mykey: “value”
};
function getProperty(obj, key) {return obj.key};

20.Write a function called “addProperty”.
Given an object and a key, “addProperty” adds a new property on the given object with a value of true.
var obj = {
 mykey: “value”
};
function addProperty(obj, key){obj.key=true; return obj}

21.Find the maximum number in an array of numbers
function findMax(ar)
{
var ma = ar[0];
for(i=0;i<ar.length;i++){
if(ma<ar[i]){ma = ar[i];}
}
return ma
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log(“Max: “, max);

22.Reverse a string
var s = reverseString("JavaScript");
console.log(s);
function reverseString(s)
{
   var arr = s.split('').reverse().join('');
   return arr
}

23.Calculate the sum of numbers received in a comma delimited string
console.log(sumCSV(“1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9”));
function sumCSV(s)
{
  var sum=0; k = s.split(' ');
  for(i=0;i<k.length;i++){
    sum+= +k[i];
  }
return sum
}
3 .Do the below programs in arrow functions:

a.Print odd numbers in an array
       
       const arr=userInput[0];
       const odd=arr.filter(number =>
                {return number%2 !== 0}
                );
       console.log(odd);

 b.Convert all the strings to title caps in a string array

           const array=userInput[0] ;
           const strings=array.map((array) => array[0].toUpperCase() 
                                +array.slice(1).toLowerCase())
            console.log(strings);

 c. Sum of all numbers in an array
         
       const array=userInput[0] ;
      let sum = array.reduce(function (accumulator, current) {
          return accumulator + current;
        });
        console.log(sum);

d. Return all the prime numbers in an array

    const newArray =userInput[0];
      const isPrime = num => { for (let i = 2; i < num; i++) 
    {
             if (num % i === 0) return false;
    } 
             return num !== 1
     };
    const myPrimeArray = newArray.filter(element => isPrime(element));
    console.log(myPrimeArray);                                        


e.Return all the palindromes in an array 

const getAllPalindromes = function (words) {
return words.filter(function (word) {
return word.split("").reverse().join("") === word;
});
};

console.log(getAllPalindromes(userInput[0]);
