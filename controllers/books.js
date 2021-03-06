const Book = require('../models/book');
const mongoose = require('mongoose');


module.exports = (app) => {
  app.get('/', (req, res) => {
    console.log('-------Book World-------')
    const currentUser = req.cookies.nToken
    Book.find({}).lean()
      .then(books => {
        res.render('books-index', { books, currentUser });
      })
      .catch(err => {
        console.log(err.message);
      })
  })

    app.get('/books/new', (req, res) => {
      const currentUser = req.cookies.nToken
      res.render('books-new', {currentUser})
    })

    // CREATE
    app.post('/books/new', (req, res) => {
      const currentUser = req.cookies.nToken
      // INSTANTIATE INSTANCE OF POST MODEL
      console.log(req.body)

      const book = new Book(req.body);

      // SAVE INSTANCE OF POST MODEL TO DB
      book.save((err, book) => {
        // REDIRECT TO THE ROOT
        return res.redirect(`/`);
      })
    });

    // LOOK UP THE POST
    app.get('/books/:id', function(req, res) {
      const currentUser = req.cookies.nToken

      Book.findById(req.params.id).lean()
        .then(book => {
          res.render("books-show", { book });
        })
        .catch(err => {
          console.log(err.message);
        });
    });

    // DELETE BOOK
    app.get('/book/:id', (req, res) => {
      console.log("DELETE BOOK")

      Book.findByIdAndRemove(req.params.id).then((book) => {
          res.redirect('/');
        }).catch((err) => {
          console.log(err.message);
        })
    });

    // EDIT
    app.get('/book/:id/edit', (req, res) => {
      console.log("EDIT BOOK")
      Book.findById(req.params.id, function(err, book) {
        console.log("Edit Book->", book)
        res.render('books-edit', {book: book});
      }).lean()
    })

    // UPDATE
    app.post('/book/:id/update', (req, res) => {
      console.log("UPDATE BOOK", req.params.id)
      Book.findByIdAndUpdate(req.params.id, req.body)
        .then(book => {
          // `/book/${book._id}`
          res.redirect('/')
        })
        .catch(err => {
          console.log(err.message)
        })
    })
}

// module.exports = (app) => {
//
//   app.get('/', (req, res) => {
//       const currentUser = req.cookies.nToken
//       console.log(req.cookies.nToken)
//       Post.find({}).lean()
//         .then(posts => {
//           res.render('posts-index', { posts, currentUser });
//         })
//         .catch(err => {
//           console.log(err.message);
//         })
//   })
//
//   app.get('/posts/new', (req, res) => {
//     const currentUser = req.cookies.nToken
//     res.render('posts-new', {currentUser})
//   })
//
//   // CREATE
//   app.post('/posts/new', (req, res) => {
//     const currentUser = req.cookies.nToken
//     // INSTANTIATE INSTANCE OF POST MODEL
//     const post = new Post(req.body);
//
//     // SAVE INSTANCE OF POST MODEL TO DB
//     post.save((err, post) => {
//       // REDIRECT TO THE ROOT
//       return res.redirect(`/`);
//     })
//   });
//
//
//   app.get("/posts/:id", function(req, res) {
//     const currentUser = req.cookies.nToken
//     // LOOK UP THE POST
//     Post.findById(req.params.id).lean().populate('comments').then((post) => {
//       res.render('posts-show', { post, currentUser })
//     }).catch((err) => {
//       console.log(err.message)
//     })
//     // Post.findById(req.params.id).lean()
//     //   .then(post => {
//     //     res.render("posts-show", { post });
//     //   })
//     //   .catch(err => {
//     //     console.log(err.message);
//     //   });
//   });
//
//   // SUBREDDIT
//   app.get("/n/:subreddit", function(req, res) {
//     const currentUser = req.cookies.nToken
//     Post.find({ subreddit: req.params.subreddit }).lean()
//       .then(posts => {
//         res.render("posts-index", { posts, currentUser });
//       })
//       .catch(err => {
//         console.log(err);
//       });
//     });
// }
