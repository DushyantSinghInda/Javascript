// singleton
// Constructor

const tinderUser = new Object(); //This is singleton object
// const tinderUser = {};  //None singleton objects
tinderUser.id = "123abc";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstName: "Dushyant",
      lastName: "Singh",
    },
  },
};

// console.log(regularUser.fullname.userfullname.firstName);

const object1 = {
  1: "a",
  2: "b",
};
const object2 = { 3: "c", 4: "d" };
const object4 = { 5: "e", 6: "f" };

// const object3 = { object1, object2 };
// const object3 = Object.assign(object1, object2, object4); // This will provide reference of each object to the new object
// const object3 = Object.assign({}, object1, object2, object4) //It will create a clone of passing object

const object3 = { ...object1, ...object2, ...object4 }; //Same it will create a clone of passing object
object1[1] = "g";
// console.log(object3);

const users = [
  {
    id: 1,
    email: "d@gmail.com",
  },
  {
    id: 2,
    email: "h@gmail.com",
  },
  {
    id: 1,
    email: "d@gmail.com",
  },
  {
    id: 2,
    email: "h@gmail.com",
  },
];

users[1].email;
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); //Most important topic for backends
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLogged")); //It will tell is their any key or not

const course = {
  courseName: "JS in Hindi",
  price: "999",
  courseInstructor: "Hitesh",
};

// course.courseInstructor

const { courseInstructor: instructor } = course;

console.log(instructor);
