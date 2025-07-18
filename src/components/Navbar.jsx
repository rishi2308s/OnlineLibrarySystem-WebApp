import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-primary">📚 Online Library</h1>
      <div className="space-x-4">
        <Link to="/" className="text-gray-700 hover:text-primary font-medium">Home</Link>
        <Link to="/books" className="text-gray-700 hover:text-primary font-medium">Browse Books</Link>
        <Link to="/add-book" className="text-gray-700 hover:text-primary font-medium">Add Book</Link>
      </div>
    </nav>
  );
};

export default Navbar;
