let database = "MERN_STACK";

use(database);

db.createCollection("Student");
db.Student.insertOne({
    name:"Sachin",
    age:20,
    course:"CSE",
});
db.Student.find();
db.Student.deleteOne({name:"Sachin"});