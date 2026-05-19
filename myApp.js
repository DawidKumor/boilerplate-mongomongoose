require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI);


let Person;

let personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Imię jest wymagane"]
  },
  age: Number,
  favoriteFoods: [String]
});
Person = mongoose.model("Person", personSchema);

/*const createAndSavePerson = (done) => {
  const person = new Person({
    name: "Dante",
    age: 35,
    favoriteFoods:["pizza", "pasta"]
  })
  person.save(function(err, data) {
    if (err) {
      return done(err)
    } 
    return done(null, data)
  })
}; */

/*const createAndSavePerson = (done) => {
  const person = new Person({
    name: "Dante",
    age: 35,
    favoriteFoods: ["pizza", "pasta"]
  });

  person.save()
    .then((data) => done(null, data))
    .catch((err) => done(err));
};*/


const createAndSavePerson = async (done) => {
  const person = new Person({
    name: "Dante",
    age: 35,
    favoriteFoods: ["pizza", "pasta"]
  });

  try {
    const data = await person.save();
    done(null, data);
  } catch (err) {
    done(err);
  }
};


// Stary styl - callback
/*const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function(err, data) {
    if (err) return done(err);
    done(null, data);
  });
};*/

// Nowy styl - .then().catch() (bezpieczny dla FreeCodeCamp)
/*const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople)
    .then((data) => done(null, data))
    .catch((err) => done(err));
};*/

const createManyPeople = async (arrayOfPeople, done) => {
  try {
    const data = await Person.create(arrayOfPeople);
    done(null, data);
  } catch (err) {
    done(err);
  }
};

// Stary styl - callback
/*const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, function(err, data) {
    if (err) return done(err);
    done(null, data);
  });
};*/

// Nowy styl - async/await
const findPeopleByName = async (personName, done) => {
  try {
    const data = await Person.find({ name: personName });
    done(null, data);
  } catch (err) {
    done(err);
  }
};

const findOneByFood = async (food, done) => {
  try {
    const data = await Person.findOne({ favoriteFoods: food });
    done(null, data);
  } catch (err) {
    done(err);
  }
};

const findPersonById = async (personId, done) => {
  try {
    const data = await Person.findById(personId);
    done(null, data);
  } catch (err) {
    done(err);
  }
};

const findEditThenSave = async (personId, done) => {
  try {
    // KROK 1: znajdź osobę po _id
    const person = await Person.findById(personId);

    // KROK 2: dodaj "hamburger" do tablicy favoriteFoods
    person.favoriteFoods.push("hamburger");

    // KROK 3: zapisz zaktualizowany dokument
    const data = await person.save();
    done(null, data);
  } catch (err) {
    done(err);
  }
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
