import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, selectCategories } from '../redux/booksSlice';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector(selectCategories);

  const [form, setForm] = useState({
    title: '',
    author: '',
    category: '',
    customCategory: '',
    description: '',
    rating: '',
    cover: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    const categoryToUse = form.category === '__custom__' ? form.customCategory.trim() : form.category;

    if (!form.title.trim()) newErrors.title = 'Title is required';
    if (!form.author.trim()) newErrors.author = 'Author is required';
    if (!categoryToUse) newErrors.category = 'Category is required';
    if (!form.description.trim()) newErrors.description = 'Description is required';
    if (!form.cover.trim()) newErrors.cover = 'Cover image URL is required';
    
    const rating = parseFloat(form.rating);
    if (isNaN(rating) || rating < 0 || rating > 5) {
      newErrors.rating = 'Rating must be between 0 and 5';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      const categoryToUse = form.category === '__custom__'
        ? form.customCategory.trim()
        : form.category;

      dispatch(addBook({
        id: uuidv4(),
        title: form.title.trim(),
        author: form.author.trim(),
        category: categoryToUse,
        description: form.description.trim(),
        rating: parseFloat(form.rating),
        cover: form.cover.trim(),
      }));

      navigate('/books');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Add a New Book</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block font-semibold text-gray-700">Title:</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full mt-1 px-3 py-2 border rounded"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        {/* Author */}
        <div>
          <label className="block font-semibold text-gray-700">Author:</label>
          <input
            name="author"
            value={form.author}
            onChange={handleChange}
            className="w-full mt-1 px-3 py-2 border rounded"
          />
          {errors.author && <p className="text-red-500 text-sm">{errors.author}</p>}
        </div>

        {/* Category */}
        <div>
          <label className="block font-semibold text-gray-700">Category:</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full mt-1 px-3 py-2 border rounded"
          >
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
            <option value="__custom__">Other (type below)</option>
          </select>
          {form.category === '__custom__' && (
            <input
              name="customCategory"
              value={form.customCategory}
              onChange={handleChange}
              placeholder="Enter custom category"
              className="w-full mt-2 px-3 py-2 border rounded"
            />
          )}
          {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}
        </div>

        {/* Description */}
        <div>
          <label className="block font-semibold text-gray-700">Description:</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full mt-1 px-3 py-2 border rounded"
          />
          {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
        </div>

        {/* Rating */}
        <div>
          <label className="block font-semibold text-gray-700">Rating (0–5):</label>
          <input
            type="number"
            name="rating"
            step="0.1"
            min="0"
            max="5"
            value={form.rating}
            onChange={handleChange}
            className="w-full mt-1 px-3 py-2 border rounded"
          />
          {errors.rating && <p className="text-red-500 text-sm">{errors.rating}</p>}
        </div>

        {/* Cover URL */}
        <div>
          <label className="block font-semibold text-gray-700">Cover Image URL:</label>
          <input
            name="cover"
            value={form.cover}
            onChange={handleChange}
            placeholder="https://example.com/book.jpg"
            className="w-full mt-1 px-3 py-2 border rounded"
          />
          {errors.cover && <p className="text-red-500 text-sm">{errors.cover}</p>}
        </div>

        <button
          type="submit"
          className="bg-primary text-white px-6 py-2 rounded hover:bg-indigo-600"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
