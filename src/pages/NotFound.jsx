import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center px-4">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <p className="text-2xl text-gray-800 font-semibold mb-2">Page Not Found</p>
      <p className="text-gray-600 mb-6">Looks like you've wandered off the bookshelf.</p>
      <Link
        to="/"
        className="bg-primary text-white px-6 py-2 rounded hover:bg-indigo-600 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
