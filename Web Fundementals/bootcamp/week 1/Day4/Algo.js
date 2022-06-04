/*
    Given a string x, capitlize the first character in the string 
    and return the sentence
    so, given string text
    const text = "hello"
    Expected output "Hello"
*/
console.log(capital("hello world"));
function capital(word) {

    word = word.charAt(0).toUpperCase() + word.slice(1);
    return word;
}

// var word = "hello";
// word.slice()

// /*
//     Given a string x, capitlize every word in the string and return it
//     so, given string text
//     const text = "hello world from javascript"
//     Expected output "Hello World From Javascript"
// */

console.log(capitalWord("hello world"));
function capitalWord(sentence) {
    word = ""
    array = sentence.split(" ");
    for (let index = 0; index < array.length; index++) {
        word += capital(array[index]) + " ";
    }
    return word;

}

// let words = "hello world";

// console.log(word);



//better answer 

console.log(capitalWordBetter("hello world"));
function capitalWordBetter(sentence) {
    array = [];
    sentence.split(" ").forEach(element => {
        array.push(capital(element));
    });
    return array.join(" ");

}



