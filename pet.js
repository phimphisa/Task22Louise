var petArray = [];

function createPet(name, age, type){
    this.name = name;
    this.age = age;
    this.type = type;
    petArray.push({name, age, type});
}

function getPets(){
    return petArray;
}

module.exports = {
    createPet,
    getPets
}