// import axios from 'axios';

// const BASIC_URL = 'BLAHBLAH';

export const getRecipes = async () => {
  // const { data } = await axios.get(`${BASIC_URL}/recipes`);
  const data = {
    totalRecipes: 12,
    recipes: [
      {
        id: 'abcde-1234-abc-1244',
        name: 'My Recipe',
        description: 'I nicked this off James Martin',
        tags: ['vegetarian', 'reheatable', 'quick'],
        image: 'https://amazon.com/some-link/my-image-1',
        cookingTime: 200,
      },
      {
        id: 'abcde-1234-abc-76763',
        name: 'Ham and Eggs',
        description: "When I'm feeling lazy",
        tags: ['quick'],
        image: 'https://amazon.com/some-link/my-image-2',
        cookingTime: 100,
      },
      {
        id: 'abcde-1234-abc-1245',
        name: 'Recipe 3',
        description: 'I nicked this off James Martin',
        tags: ['vegetarian'],
        image: 'https://amazon.com/some-link/my-image-1',
        cookingTime: 200,
      },
      {
        id: 'abcde-1234-abc-76764',
        name: 'Recipe 4',
        description: "When I'm feeling lazy",
        tags: ['reheatable'],
        image: 'https://amazon.com/some-link/my-image-2',
        cookingTime: 100,
      },
      {
        id: 'abcde-1234-abc-1246',
        name: 'Recipe 5',
        description: 'I nicked this off James Martin',
        tags: ['reheatable', 'quick'],
        image: 'https://amazon.com/some-link/my-image-1',
        cookingTime: 200,
      },
      {
        id: 'abcde-1234-abc-76765',
        name: 'Recipe 6',
        description: "When I'm feeling lazy",
        tags: ['quick', 'reheatable'],
        image: 'https://amazon.com/some-link/my-image-2',
        cookingTime: 100,
      },
      {
        id: 'abcde-1234-abc-1247',
        name: 'Recipe 7',
        description: 'I nicked this off James Martin',
        tags: ['vegetarian', 'healthy', 'reheatable', 'quick'],
        image: 'https://amazon.com/some-link/my-image-1',
        cookingTime: 200,
      },
      {
        id: 'abcde-1234-abc-76766',
        name: 'Recipe 8',
        description: "When I'm feeling lazy",
        tags: ['quick'],
        image: 'https://amazon.com/some-link/my-image-2',
        cookingTime: 100,
      },
      {
        id: 'abcde-1234-abc-1248',
        name: 'Recipe 9',
        description: 'I nicked this off James Martin',
        tags: ['vegetarian', 'healthy', 'reheatable', 'quick'],
        image: 'https://amazon.com/some-link/my-image-1',
        cookingTime: 200,
      },
      {
        id: 'abcde-1234-abc-76767',
        name: 'Recipe 10',
        description: "When I'm feeling lazy",
        tags: ['quick'],
        image: 'https://amazon.com/some-link/my-image-2',
        cookingTime: 100,
      },
      {
        id: 'abcde-1234-abc-1249',
        name: 'My Recipe 11',
        description: 'I nicked this off James Martin',
        tags: ['vegetarian', 'healthy', 'reheatable', 'quick'],
        image: 'https://amazon.com/some-link/my-image-1',
        cookingTime: 200,
      },
      {
        id: 'abcde-1234-abc-76768',
        name: 'Ham and Eggs 3453434',
        description: "When I'm feeling lazy",
        tags: ['quick'],
        image: 'https://amazon.com/some-link/my-image-2',
        cookingTime: 100,
      },
    ],
  };
  return data;
};
