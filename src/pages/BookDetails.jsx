import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectBookById } from '../redux/booksSlice';

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = useSelector((state) => selectBookById(state, id));

  if (!book) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-bold text-gray-800">Book Not Found</h2>
        <p className="text-gray-500 mt-2">The book you're looking for does not exist.</p>
        <button
          onClick={() => navigate('/books')}
          className="mt-4 bg-primary text-white px-4 py-2 rounded"
        >
          Back to Browse
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4">
      <div className="bg-white p-6 rounded shadow">
        <h2 className="text-3xl font-bold text-gray-800">{book.title}</h2>
        <p className="text-lg text-gray-700 mt-2">by {book.author}</p>
        <p className="mt-4 text-gray-600">{book.description}</p>
        <p className="mt-4 text-yellow-600 font-semibold">
          ⭐ Rating: {book.rating}/5
        </p>

        <button
          onClick={() => navigate('/books')}
          className="mt-6 bg-primary text-white px-4 py-2 rounded hover:bg-indigo-600"
        >
          ← Back to Browse
        </button>
      </div>
    </div>
  );
};

export default BookDetails;
