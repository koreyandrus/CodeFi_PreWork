const hero = {
    name: 'Bruce Wayne',
    alias: "Batman",
    catchphrase: "To the Batcave",
    speak: function() {
        return 'Attention! ' + this.catchphrase;
    },
    attack: function(sound) {
        return `(punches bad guy) ${sound}`;
    }
};


const thingToLookFor = 'alias';

console.log(hero.name);
console.log(hero['name']);
console.log(hero[thingToLookFor]);

// accessing methods
console.log(hero.speak());
console.log(hero.attack("pow!"));

console.log('this is my string'.toUpperCase());