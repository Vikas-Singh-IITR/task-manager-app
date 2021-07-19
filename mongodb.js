const { MongoClient, ObjectId } = require("mongodb");

// const id = ObjectId();

// console.log(id);

const connnectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connnectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }
    const db = client.db(databaseName);

    db.collection("users")
      .updateOne(
        { name: "Yash" },
        {
          $set: {
            name: "Binks",
          },
        },
      )
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });

    // db.collection("users").findOne({ name: "5" }, (error, result) => {
    //   if (error) {
    //     return console.log("Unable to fetch data");
    //   }
    //   console.log(result);
    // });

    // db.collection("users").insertOne(
    //   {
    //     _id: id,
    //     name: "Yash",
    //     age: 25,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert user");
    //     }
    //     console.log(result);
    //   },
    // );

    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "Varun",
    //       age: 27,
    //     },
    //     {
    //       name: "Sahil",
    //       age: 22,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to inser the data");
    //     }
    //     console.log(result);
    //   },
    // );

    // db.collection("tasks").insertMany(
    //   [
    //     {
    //       desciption: "Go to the Market",
    //       completed: true,
    //     },
    //     {
    //       desciption: "Finish node js course",
    //       completed: false,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert the data");
    //     }
    //     console.log(result);
    //   },
    // );
  },
);
