// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `Kalvian-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `Kalvian-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.
var kalvian1 = "Abraham";
console.log("The driver's name is", kalvian1)
var kavlian2 = "Naveen";
console.log("The navigator's name is", kavlian2)
// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
var driver_length = kalvian1.length
var navigator_length = kavlian2.length
if (driver_length>navigator_length){
    console.log("The driver has the longest name, it has", driver_length ,"characters.")
} else if (navigator_length>driver_length){
    console.log("It seems that the navigator has the longest name, it has" ,navigator_length ,"characters.")
} else {
    console.log("Wow, you both have equally long names,", driver_length ,"characters!.")
}
// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String Kalvian - a and i are vowels. Print Kalvian a i a 1 4 5. 
var string = "Kalvian"
var vowels = "aeiouAeiou"
var result = [];
var vowel =[];
for (let i=0;i<string.length;i++){
    var currentchar = string[i+1];
    if (vowels.indexOf(currentchar) !== -1) {
        result.push(i+1);
        vowel.push(currentchar);
    }
}
if (vowel.length>0){
    console.log(string+ " " + vowel.join(" ") + " " + result.join(" "));
}
// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters
var inpstring = "KAlvian"
let uppercase = 0;
let lowercase = 0;
for (let i=0; i<inpstring.length;i++){
    const currentchar = inpstring[i];
    if (currentchar >= "A" && currentchar<="Z"){
        uppercase++;
    } else {
        lowercase++;
    }
}
console.log("the number of upper case characters:",uppercase)
console.log("the number of lower case characters",lowercase)
// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "Kalvian"
var DriverName = "abraham";
var result2 = "";
for (let i=0; i<DriverName.length;i++){
    result2+=DriverName[i].toUpperCase()+"  ";
}
console.log(result2)
// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. Example "naivlaK"
var NavigatorName = "naveen";
var result3 =""
for (let i=NavigatorName.length-1; i>-1;i--){
    result3+=NavigatorName[i];
}
console.log(result3)
// 3.3 Merge both the characters such that driver is followed by Navigator like "DriverName NavigatorName"
// - Now bring the NavigatorName to the start and send DriverName to the back like "NavigatorName DriverName"
DriverName = "abraham";
NavigatorName = "naveen"
var mergedstrings = ""
for (let i=0;i<DriverName.length;i++){
    mergedstrings+=DriverName[i];
}
mergedstrings+=" "
for (let i=0;i<NavigatorName.length;i++){
    mergedstrings+=NavigatorName[i];
}
console.log(mergedstrings);


// Now, reverse the order to "NavigatorName DriverName"
var DriverName = "abraham";
var NavigatorName = "naveen";
var reversedString = "";
for (let i=0; i<DriverName.length; i++) {
    reversedString+=DriverName[i];
}
reversedString += " ";
for (let i=0;i<NavigatorName.length;i++) {
    reversedString+=NavigatorName[i];
}
var parts=reversedString.split(" ");
var reversedString=parts[1] + " " + parts[0];
console.log(reversedString);

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
if (DriverName<NavigatorName){
    console.log("The driver's name goes first.")
} else if(DriverName>NavigatorName){
    console.log("Yo, the navigator goes first definitely.")
} else{
    console.log("What?! You both have the same name?")
}
// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 
