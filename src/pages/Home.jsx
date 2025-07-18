import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const books = useSelector((state) => state.books);
  const categories = Array.from(new Set(books.map((book) => book.category)));

  const popularBooks = books.filter((book) => book.rating > 3.9);

  return (
    <div className="max-w-4xl mx-auto mt-8 space-y-10">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">Welcome to the Online Library 📖</h2>
        <p className="mt-2 text-gray-600">Explore your next favorite book by category or popularity.</p>
      </div>

      {/* Categories */}
      <section>
        <h3 className="text-xl font-semibold mb-4 text-primary">Book Categories</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className="bg-primary text-white px-3 py-1 rounded"
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Popular Books */}
      <section>
        <h3 className="text-xl font-semibold mb-4 text-primary">Popular Books</h3>
        {popularBooks.length === 0 ? (
          <p className="text-gray-600">No popular books available right now.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {popularBooks.map((book) => (
              <div key={book.id} className="bg-white p-4 rounded shadow">
                {book.cover && (
                  <img
                    src={book.cover}
                    alt={`${book.title} cover`}
                    className="w-fit h-48 object-cover rounded mb-3 mx-auto"
                  />
                )}
                <h4 className="text-lg font-bold text-gray-800">{book.title}</h4>
                <p className="text-gray-600">by {book.author}</p>
                <p className="text-sm text-gray-500 mt-1 capitalize">Category: {book.category}</p>
                <Link
                  to={`/book/${book.id}`}
                  className="inline-block mt-3 text-primary underline hover:text-indigo-700"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
