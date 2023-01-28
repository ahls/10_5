
/*function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }*/

const createInstructor = (firstName,lastName)=> ({firstName,lastName})

/*var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"*/
let favoriteNumber = 42;
const instructor = {firstName: "Colt", [favoriteNumber]:"That's my favorite!"};
/*
var instructor = {
    firstName: "Colt",
    sayHi: function(){
      return "Hi!";
    },
    sayBye: function(){
      return this.firstName + " says bye!";
    }
  }
  */

const instructor2 = {
    firstName:"Colt",
    sayHi() {return "Hi!"},
    SayBye(){return this.firstName + " says bye!"}

}

const createAnimal = (species, verb, noise)=>
({
    species,
    [verb](){return noise}
})


const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa"

