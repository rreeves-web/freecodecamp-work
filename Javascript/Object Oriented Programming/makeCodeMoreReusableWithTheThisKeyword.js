/* Modify the dog.sayLegs method to remove any references to dog. */

let dog = {
    name: "Pupper",
    numLegs: 4,
    sayLegs: function() {return "This dog has "+ this.numLegs + " legs.";}
};

dog.sayLegs;