// import axios from 'axios';

// const BASIC_URL = 'BLAHBLAH';

export const getRecipes = async () => {
  // const { data } = await axios.get(`${BASIC_URL}/recipes`);
  const data = {
    totalRecipes: 12,
    recipes: [
      {
        id: 'abcde-1234-abc-1244',
        name: 'Beetroot Curry',
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
        name: 'Roasted Root Veg',
        description: 'I nicked this off James Martin',
        tags: ['vegetarian'],
        image: 'https://amazon.com/some-link/my-image-1',
        cookingTime: 200,
      },
      {
        id: 'abcde-1234-abc-76764',
        name: 'Brick Lane Burger',
        description: "When I'm feeling lazy",
        tags: ['reheatable'],
        image: 'https://amazon.com/some-link/my-image-2',
        cookingTime: 100,
      },
      {
        id: 'abcde-1234-abc-1246',
        name: 'Aubergine & tomato rogan josh',
        description: 'I nicked this off James Martin',
        tags: ['reheatable', 'quick'],
        image: 'https://amazon.com/some-link/my-image-1',
        cookingTime: 200,
      },
      {
        id: 'abcde-1234-abc-76765',
        name: 'Summer Veg Lasange',
        description: "When I'm feeling lazy",
        tags: ['quick', 'reheatable'],
        image: 'https://amazon.com/some-link/my-image-2',
        cookingTime: 100,
      },
      {
        id: 'abcde-1234-abc-1247',
        name: 'Pot-roast cauliflower',
        description: 'I nicked this off James Martin',
        tags: ['vegetarian', 'healthy', 'reheatable', 'quick'],
        image: 'https://amazon.com/some-link/my-image-1',
        cookingTime: 200,
      },
      {
        id: 'abcde-1234-abc-76766',
        name: 'Parsnip beetroot gratin',
        description: "When I'm feeling lazy",
        tags: ['quick'],
        image: 'https://amazon.com/some-link/my-image-2',
        cookingTime: 100,
      },
      {
        id: 'abcde-1234-abc-1248',
        name: 'Roasted roots & halloumi traybake with courgette tangles',
        description: 'I nicked this off James Martin',
        tags: ['vegetarian', 'healthy', 'reheatable', 'quick'],
        image: 'https://amazon.com/some-link/my-image-1',
        cookingTime: 200,
      },
      {
        id: 'abcde-1234-abc-76767',
        name: 'Roasted radish and runner bean traybake',
        description: "When I'm feeling lazy",
        tags: ['quick'],
        image: 'https://amazon.com/some-link/my-image-2',
        cookingTime: 100,
      },
      {
        id: 'abcde-1234-abc-1249',
        name: 'Ultimate Lasange',
        description: 'I nicked this off James Martin',
        tags: ['vegetarian', 'healthy', 'reheatable', 'quick'],
        image: 'https://amazon.com/some-link/my-image-1',
        cookingTime: 200,
      },
      {
        id: 'abcde-1234-abc-76768',
        name: 'Smoky veggie chilli',
        description: "When I'm feeling lazy",
        tags: ['quick'],
        image: 'https://amazon.com/some-link/my-image-2',
        cookingTime: 100,
      },
    ],
  };
  return data;
};
