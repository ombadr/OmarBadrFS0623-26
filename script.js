// Esercizio 1

class User {

    constructor(firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

    ageConfrontation(otherAge, otherName) {
        if (this.age === otherAge) {
            return 'Le due persone hanno la stessa età'
        } else if (this.age < otherAge) {
            return this.firstName + ' è più giovane di ' + otherName
        } else {
            return this.firstName + ' è più vecchio di ' + otherName
        }
    }
}

const utente1 = new User('Omar', 'Badr', 24)
const utente2 = new User('Elon', 'Musk', 52)

console.log(utente1.ageConfrontation(utente2.age, utente2.firstName))
console.log(utente2.ageConfrontation(utente1.age, utente1.firstName))


// Esercizio 2


let pets = [] // array globale dove pushare i pets creati 

class Pet {
    constructor(petName, petOwner, species, breed) {
        this.petName = petName;
        this.petOwner = petOwner;
        this.species = species;
        this.breed = breed;
    }

    sameOwner(otherOwner) {
        return this.petOwner === otherOwner
    }
}


document.getElementById('petForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const petName = document.getElementById('petName').value;
    const petOwner = document.getElementById('petOwner').value;
    const species = document.getElementById('species').value;
    const breed = document.getElementById('breed').value;

    const newPet = new Pet(petName, petOwner, species, breed);

    pets.push(newPet);

    addPetToList(newPet)
    cleanForm();

    console.log(pets)

    if (pets.length > 1) {

        // console.log(pets[0].sameOwner(pets[1].petOwner)) // check if first pet has same owner as second pet

        console.log(pets[pets.length - 2].sameOwner(pets[pets.length - 1].petOwner)) // check if new pet has same owner as previus pet

    }
})


function addPetToList(pet) {
    const petList = document.getElementById('petList');
    const listItem = document.createElement('li');
    listItem.textContent = `Nome: ${pet.petName}, Proprietario: ${pet.petOwner}, Specie: ${pet.species}, Razza: ${pet.breed}`;
    petList.appendChild(listItem);
}

function cleanForm() {
    document.getElementById('petName').value = '';
    document.getElementById('petOwner').value = '';
    document.getElementById('species').value = '';
    document.getElementById('breed').value = '';
}


