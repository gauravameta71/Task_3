"use client";
// pages/admin/books.js
import React, { useState } from "react";

const page = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Power",
      author: "Jack Collins",
      img: "https://tse1.mm.bing.net/th?id=OIP.lkP4hbtHU8Y4Fsh_BsjKXAHaLg&pid=Api&P=0&h=180",
    },
    {
      id: 2,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      img: "https://tse3.mm.bing.net/th?id=OIP.8TD_d_dRAQZ9nMWBjjB8pwHaLe&pid=Api&P=0&h=180",
    },
    {
      id: 3,
      title: "The Outsider",
      author: "Stephen King",
      img: "https://tse3.mm.bing.net/th?id=OIP.WQrNqhnmCAQSnxef15eveQHaLQ&pid=Api&P=0&h=180",
    },
    {
      id: 4,
      title: "The Sand",
      author: "Stephen King",
      img: "https://tse3.mm.bing.net/th?id=OIP.zphbM2gKIgitElfIJiL5QgHaK0&pid=Api&P=0&h=180",
    },
    {
      id: 5,
      title: "Harry Potter",
      author: "J.K Rowling",
      img: "https://tse4.explicit.bing.net/th?id=OIP.rPTIBOscmtdvxPy3FEWJnQHaKs&pid=Api&P=0&h=180",
    },
    {
      id: 6,
      title: "It",
      author: "Stephen King",
      img: "https://tse2.mm.bing.net/th?id=OIP.55hYoVk27fQVf1PewaY8qgHaLR&pid=Api&P=0&h=180",
    },
    {
      id: 7,
      title: "The Originals",
      author: "Julie Plec",
      img: "https://tse2.mm.bing.net/th?id=OIP.cUxrQI9-jG4kFGgse-MR5AHaLH&pid=Api&P=0&h=180",
    },
    {
      id: 8,
      title: "TVD",
      author: "Julie Plec",
      img: "https://tse3.mm.bing.net/th?id=OIP.b_b8i_3VSKdO2ghXzFTWoAHaK1&pid=Api&P=0&h=180",
    },

    // Add more books as needed
  ]);

  const handleAddBook = () => {
    // Simulate adding a new book (replace with your backend logic)
    const newBook = {
      id: books.length + 1,
      title: "New Book",
      author: "New Author",
    };
    setBooks([...books, newBook]);
  };

  const handleUpdateBook = (id) => {
    // Simulate updating a book (replace with your backend logic)
    const updatedBooks = books.map((book) =>
      book.id === id
        ? { ...book, title: "Updated Book", author: "Updated Author" }
        : book
    );
    setBooks(updatedBooks);
  };

  const handleDeleteBook = (id) => {
    // Simulate deleting a book (replace with your backend logic)
    const filteredBooks = books.filter((book) => book.id !== id);
    setBooks(filteredBooks);
  };

  return (
    <div className="container  mt-8">
      <h2 className="text-2xl font-bold mb-4 p-2 flex justify-center">
        Admin - Manage Books
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-2">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-black text-white p-2 md:p-4 shadow-md rounded-lg"
          >
            <div className="flex items-center justify-center mb-2 md:mb-4">
              <img
                src={book.img}
                alt="img"
                className="w-1/2 h-50 object-fill mx-auto"
              />
            </div>
            <h3 className="text-lg font-bold mb-1 flex justify-center">
              {book.title}
            </h3>
            <p className="text-gray-600 mb-2 flex justify-center">
              {book.author}
            </p>
            <div className="flex justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => handleUpdateBook(book.id)}
              >
                Update
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => handleDeleteBook(book.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 mb-6 flex justify-center">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleAddBook}
        >
          Add Books
        </button>
      </div>
    </div>
  );
};

export default page;
