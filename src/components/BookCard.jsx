import { Link } from 'react-router-dom';

const BookCard = ({ book }) => (
  <div className="bg-white p-4 rounded shadow">
    {book.cover && (
      <img
        src={book.cover}
        alt={book.title}
        className="w-fit h-48 object-cover rounded mb-3 mx-auto"
      />
    )}
    <h4 className="text-lg font-bold text-gray-800">{book.title}</h4>
    <p className="text-gray-600">by {book.author}</p>
    <p className="text-sm text-gray-500 mt-1 capitalize">
      Category: {book.category}
    </p>
    <Link
      to={`/book/${book.id}`}
      className="inline-block mt-3 text-primary underline hover:text-indigo-700"
    >
      View Details
    </Link>
  </div>
);

export default BookCard;
