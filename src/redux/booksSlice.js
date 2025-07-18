import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialBooks = [
  {
    id: 1,
    title: 'IT',
    author: 'Stephen King',
    category: 'Horror',
    description: 'IT is a chilling tale of a malevolent entity that terrorizes the town of Derry, preying on children and manifesting as their worst fears. Stephen King masterfully blends horror, friendship, and the loss of innocence in this iconic supernatural thriller.',
    rating: 4.7,
    cover: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/It_%281986%29_front_cover%2C_first_edition.jpg',
  },
  {
    id: 2,
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    category: 'Fiction',
    description: 'The Da Vinci Code is a fast-paced thriller where symbologist Robert Langdon unravels a secret conspiracy hidden in famous artworks. Dan Brown blends history, religion, and suspense into a gripping global hunt for a powerful secret.',
    rating: 4.5,
    cover: 'https://bookmust.wordpress.com/wp-content/uploads/2012/05/n56931.jpg',
  },
  {
    id: 3,
    title: 'Born A Crime',
    author: 'Trevor Noah',
    category: 'Comedy',
    description: 'Born a Crime is Trevor Noah’s compelling memoir about growing up mixed-race under apartheid South Africa’s harsh laws. With sharp humor and heart, he explores identity, family, and resilience in a divided world.',
    rating: 4.0,
    cover: 'https://m.media-amazon.com/images/I/81jXsZ45WAL.jpg',
  },
];

const booksSlice = createSlice({
  name: 'books',
  initialState: initialBooks,
  reducers: {
    addBook: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(book) {
        return { payload: { ...book, id: nanoid() } };
      },
    },
  },
});

export const { addBook } = booksSlice.actions;
export const selectBooks = (state) => state.books;
export const selectBookById = (state, id) =>
  state.books.find((b) => String(b.id) === String(id));
export const selectCategories = (state) =>
  Array.from(new Set(state.books.map((b) => b.category.toLowerCase())));

export default booksSlice.reducer;
