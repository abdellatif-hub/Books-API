let books = [
  { id: 1, title: "B1", author: "abdellatif", price: 600 },
  { id: 2, title: "B2", author: "bader", price: 200 }
];


export const getAllBooks = (req, res) => {
  res.json(books);
};


export const getBookById = (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find(b => b.id === id);

  if (!book) {
    return res.status(404).json({ message: "not found" });
  }

  res.json(book);
};


export const createBook = (req, res) => {
  const { title, author, price } = req.body;

  if (!title || !author || !price) {
    return res.status(400).json({ message: "Missing fields" });
  }

  const newBook = {
    id: books.length + 1,
    title,
    author,
    price
  };

  books.push(newBook);

  res.status(201).json(newBook);
};


export const updateBook = (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find(b => b.id === id);

  if (!book) {
    return res.status(404).json({ message: "not found" });
  }

  const { title, author, price } = req.body;

  if (title) book.title = title;
  if (author) book.author = author;
  if (price) book.price = price;

  res.json(book);
};


export const deleteBook = (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === id);

  if (index === -1) {
    return res.status(404).json({ message: " not found" });
  }

  books.splice(index, 1);

  res.json({ message: "Book deleted" });
};
