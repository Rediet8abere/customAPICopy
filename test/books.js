// // test/books.js
// const User = require("../models/user")
// const app = require("../server");
// const chai = require("chai");
// const chaiHttp = require("chai-http");
// const expect = chai.expect;


// // Import the Book model from our models folder so
// // we can use it in our tests.
// const Book = require('../models/book');
// const server = require('../server');


// chai.should();
// chai.use(chaiHttp);

// describe('Books', function() {
//   const agent = chai.request.agent(app);
//   // Book that we'll use for testing purposes
//   const newBook = {
//       title: 'book title',
//       author: 'book author', 
//       url: 'https://www.google.com',
//       summary: 'book summary', 
//       date: new Date('1987-10-26')
//   };

//   const user = {
//     username: 'bookstest',
//     password: 'testbooks'
//   };


//   before(function (done) {
//     agent
//       .post('/sign-up')
//       .set("content-type", "application/x-www-form-urlencoded")
//       .send(user)
//       .then(function (res) {
//         done();
//       })
//       .catch(function (err) {
//         done(err);
//       });
// });

// // it('Should create with valid attributes at POST /books/new', function(done) {
// //   // Checks how many posts there are now
// //   Book.estimatedDocumentCount()
// //     .then(function (initialDocCount) {
// //         agent
// //             .post("/books/new")
// //             // This line fakes a form post,
// //             // since we're not actually filling out a form
// //             .set("content-type", "application/x-www-form-urlencoded")
// //             // Make a request to create another
// //             .send(newBook)
// //             .then(function (res) {
// //                 Book.estimatedDocumentCount()
// //                     .then(function (newDocCount) {
// //                         // Check that the database has one more book in it
// //                         expect(res).to.have.status(200);
// //                         // Check that the database has one more book in it
// //                         expect(newDocCount).to.be.equal(initialDocCount + 1)
// //                         done();
// //                     })
// //                     .catch(function (err) {
// //                         done(err);
// //                     });
// //             })
// //             .catch(function (err) {
// //                 done(err);
// //             });
// //     })
// //     .catch(function (err) {
// //         done(err);
// //     });
// // });

// // //   after(function (done) {
// // //   Book.findOneAndDelete(newBook)
// // //   .then(function (res) {
// // //       agent.close()

// // //       User.findOneAndDelete({
// // //           username: user.username
// // //       })
// // //         .then(function (res) {
// // //             done()
// // //         })
// // //         .catch(function (err) {
// // //             done(err);
// // //         });
// // //   })
// // //   .catch(function (err) {
// // //       done(err);
// // //   });
// // // });

// });
