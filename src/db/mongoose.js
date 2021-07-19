const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useCreateIndex: true,
});

const User = mongoose.model("User", {
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});

const tasks = mongoose.model("Tasks", {
  description: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});

const task_1 = new tasks({
  description: "Go to the market",
  completed: true,
});

task_1
  .save()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// const spartan = new User({
//   name: "Spartan",
//   age: 19,
// });

// spartan
//   .save()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   });
