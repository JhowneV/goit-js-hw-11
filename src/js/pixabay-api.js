export const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43144541-7bc3dc74e4831635c05dca2cc';

export const options = {
  params: {
    key: API_KEY,
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: 1,
    per_page: 40,
  },
};
