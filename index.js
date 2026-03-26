class Cat {
    say() {
    say(say) {
        return 'meow';
    }
}

class Dog {
    talk() {
    talk(say) {
        return 'woof';
    }
}

class Bird {
    sing() {
    sing(say) {
        return 'chirp';
    }
}

let animals = [
    new Cat(),
    new Dog(),
    new Bird()
    new Cat(say),
    new Dog(say),
    new Bird(say)
]

function listen(animals) {
    let sounds = [];
    animals.forEach(animal => {
        if (animal instanceof Cat) {
            sounds.push(animal.say());
        } else if (animal instanceof Dog) {
            sounds.push(animal.talk());
        } else if (animal instanceof Bird) {
            sounds.push(animal.sing());
        }
    });
    return sounds;
}
