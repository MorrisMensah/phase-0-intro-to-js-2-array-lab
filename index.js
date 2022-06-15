// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

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
    let newCats = [...cats, "Broom"];
    return newCats;
}

function prependCat(){
    let newCats1 = ["Arnold", ...cats];
    return newCats1;
}

function removeLastCat(){
    let newCats2 = cats.slice(0,2);
    return newCats2;
}

function removeFirstCat(){
    let newCats3 = cats.slice(1,3);
    return newCats3;
}