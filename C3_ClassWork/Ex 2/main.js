const _user_ = {
    name: "Korey",
    age: 36,
    occupation: "Robot Programmer"
}

const _user2_ = {
    name: "Brian",
    age: 42,
    occupation: "Electrical Engineer"
}

const displayUser = ({ name, age, occupation }) => {
    console.log(`This is ${name}, ${age} years old, ${occupation}`);
}

// displayUser(_user_);