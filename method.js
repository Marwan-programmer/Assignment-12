//(1)(A)--displays only the even numbers from 1 to 20.

function  evenNumbers(arry=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]){
    return arry.filter(num=>num%2==0)
}

// /////////////////////////end////////////////////




//(1)(B)--defines an array of 20 number (positive, negative and zeros) and displayes their average.

function getAvarage(arr=[0,2,3,-4,5,-6,7,8,9,10,11,12,-13,14,15,16,17,18,19,20]){
// return number+nextnumber ;
return arr.reduce((num1,num2)=>(num1+num2)/arr.length);
}

////////////////////////////////////////end///////////////////////////////////////////////





//(1)(C)-- defines an array of 20 number (positive, negative and zeros) and displayes the largest number.

function maxNmber(array=[0,2,3,-4,5,-6,7,8,9,10,11,12,-13,14,15,16,17,18,19,20]){
   return Math.max(...array);
}

///////////////////////////////////////end///////////////////////////////////////////////////////






//(1)(D)-- for each number in the array display the following: "(number) is even||odd"
function evenOod(array=[0,2,3,-7,-8]){
return(array.map(test=>(test%2==0)?test+" is even":test+" is odd"))
}

////////////////////////////////////end///////////////////////////////////////////






//(1)(E) display whether this number is narcissistic or not.

function digits(num=153){
 let number = String(num).split("").map((num)=>{
   return Number(num)
 })
 numbers = number.length;
firstdig=number[0]**numbers;
let rducer =number.reduce((a , b) => (a)+(b**numbers));
if( rducer + firstdig-number[0]==num){
 return num +" is narcissistic "
}else{
 return num +" is not narcissistic "
}
}

/////////////////////////////end/////////////////////////////






//2. write a function called "containsZero" 
//that takes an array as a parameter and returns true if the array contains at least one zero. false otherwise.

function containsZero(arry=[1,4,6,8,9,0,0,0]){
return (arry.includes(0));
}

///////////////////////////////////////////////////////end///////////////////////////////////////




//3. write a function called "allPositive" 
//that takes an array as a parameter and returns true if all numbers are greater than zero. false otherwise.

function allPositive(arry=[5,6,8,-8]) {
 return( arry.every(num => num>0 ))
}
/////////////////////////////////////////end///////////////////////////////////////////////////////////////





//4. implement a function called "joinStrings" which is similar to Array.prototype.join(). 
//this function will take as the first parameter an array of strings, and as the second parameter a character. 
//if the second character is not specified it should be a comma ',' by default. 
//the function shall concatinate the elements in the array with each other, 
//and place the second parameter between each two strings.


function joinStrings(str=["hello" ,"my", "name", "is"], chart="," ){

return str.join(chart);
}
//////////////////////end/////////////////////////////////////////////////////////////////////////////////////




