import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectBooks } from '../redux/booksSlice';
import { useState } from 'react';
import BookCard from '../components/BookCard';

const BrowseBooks = () => {
  const { category } = useParams(); 
  const allBooks = useSelector(selectBooks);

  const [query, setQuery] = useState('');

  // Filter chain: category (if present) ➜ search query
  const filtered = allBooks
    .filter((b) =>
      category ? b.category.toLowerCase() === category.toLowerCase() : true
    )
    .filter((b) =>
      query
        ? [b.title, b.author].some((field) =>
            field.toLowerCase().includes(query.toLowerCase())
          )
        : true
    );

  return (
    <div className="max-w-5xl mx-auto mt-8 space-y-6">
      {/* Search bar */}
      <div className="flex">
        <input
          className="flex-1 px-4 py-2 border rounded-l-md"
          type="text"
          placeholder="Search by title or author..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="bg-primary text-white px-4 py-2 rounded-r-md"
          onClick={() => setQuery('')}
        >
          Clear
        </button>
      </div>

      {/* Breadcrumb */}
      {category && (
        <p className="text-sm text-gray-500">
          Showing books in&nbsp;
          <span className="font-medium capitalize">{category}</span>.&nbsp;
          <Link to="/books" className="underline text-primary">
            View all
          </Link>
        </p>
      )}

      {/* Books grid */}
      {filtered.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No books match your search criteria.</p>
      )}
    </div>
  );
};

export default BrowseBooks;
