const INITIAL_STATE = {
  sections: [
    {
      title: 'toys',
      imageUrl: 'https://placedog.net/500',
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'foods',
      imageUrl: 'https://placedog.net/502',
      id: 2,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'pets',
      imageUrl: 'https://placedog.net/503',
      id: 3,
      linkUrl: 'shop/sneakers'
    },
    {
      title: 'gurd',
      imageUrl: 'https://placedog.net/501',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    },
    {
      title: 'popy',
      imageUrl: 'https://placedog.net/504',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
