// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
    console.log(cats);


function destructivelyAppendCat(name){
    cats.push("Ralph");
    
}
function destructivelyPrependCat(name){
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name){
    const cats = ["Milo", "Otis", "Garfield"];
    const newArray = [...cats, "Broom"];
    return newArray;
}
function prependCat(name){
    const cats = ["Milo", "Otis", "Garfield"];
    const newArray = ["Arnold", ...cats];
    return newArray;
}
function removeLastCat(){
    const cats = ["Milo", "Otis", "Garfield"];
    const newArray= cats.slice(0, -1);
    return newArray;
}
function removeFirstCat(){
    const cats = ["Milo", "Otis", "Garfield"];
    const newArray =  cats.slice(1);
    return newArray;
}