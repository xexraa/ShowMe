export const categories = [
  {
    name: "cars",
    image: "https://img.icons8.com/clouds/100/car.png",
  },
  {
    name: "fitness",
    image: "https://img.icons8.com/officel/80/bench-press-with-dumbbells.png",
  },
  {
    name: "wallpaper",
    image:
      "https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-wallpaper-interior-flaticons-flat-flat-icons.png",
  },
  {
    name: "websites",
    image:
      "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-websites-advertising-agency-flaticons-lineal-color-flat-icons.png",
  },
  {
    name: "photo",
    image: "https://img.icons8.com/stickers/100/stack-of-photos.png",
  },
  {
    name: "food",
    image: "https://img.icons8.com/stickers/100/hamburger.png",
  },
  {
    name: "cats",
    image: "https://img.icons8.com/dusk/64/kitty.png",
  },
  {
    name: "dogs",
    image: "https://img.icons8.com/cotton/64/dog-sit--v1.png",
  },
  {
    name: "nature",
    image: "https://img.icons8.com/plasticine/100/nature.png",
  },
  {
    name: "art",
    image: "https://img.icons8.com/dusk/64/microsoft-paint.png",
  },
  {
    name: "travel",
    image: "https://img.icons8.com/bubbles/100/airplane-take-off.png",
  },
  {
    name: "quotes",
    image: "https://img.icons8.com/dusk/64/quote.png",
  },
  {
    name: "anime",
    image: "https://img.icons8.com/stickers/100/naruto.png",
  },
  {
    name: "gaming",
    image: "https://img.icons8.com/stickers/100/controller.png",
  },
  {
    name: "others",
    image: "https://img.icons8.com/stickers/100/hot-sales-hours.png",
  },
];

export const pinDetailQuery = (pinId) => {
  const query = `*[_type == "pin" && _id == '${pinId}']{
    image{
      asset->{
        url
      }
    },
    _id,
    title, 
    about,
    category,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
   save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
    comments[]{
      comment,
      _key,
      postedBy->{
        _id,
        userName,
        image
      },
    }
  }`;
  return query;
};

export const pinDetailMorePinQuery = (pin) => {
  const query = `*[_type == "pin" && category == '${pin.category}' && _id != '${pin._id}' ]{
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      _key,
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};

export const userQuery = (userId) => {
  const query = `*[_type == "user" && _id == '${userId}']`;
  return query;
};

export const searchQuery = (searchTerm) => {
  const query = `*[_type == "pin" && title match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*']{
        image{
          asset->{
            url
          }
        },
            _id,
            destination,
            postedBy->{
              _id,
              userName,
              image
            },
            save[]{
              _key,
              postedBy->{
                _id,
                userName,
                image
              },
            },
          }`;
  return query;
};

export const feedQuery = `*[_type == "pin"] | order(_createdAt desc) {
  image{
    asset->{
      url
    }
  },
      _id,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        _key,
        postedBy->{
          _id,
          userName,
          image
        },
      },
    } `;

export const userCreatedPinsQuery = (userId) => {
  const query = `*[ _type == 'pin' && userId == '${userId}'] | order(_createdAt desc){
        image{
          asset->{
            url
          }
        },
        _id,
        destination,
        postedBy->{
          _id,
          userName,
          image
        },
        save[]{
          postedBy->{
            _id,
            userName,
            image
          },
        },
      }`;
  return query;
};

export const userSavedPinsQuery = (userId) => {
  const query = `*[_type == 'pin' && '${userId}' in save[].userId ] | order(_createdAt desc) {
        image{
          asset->{
            url
          }
        },
        _id,
        destination,
        postedBy->{
          _id,
          userName,
          image
        },
        save[]{
          postedBy->{
            _id,
            userName,
            image
          },
        },
      }`;
  return query;
};
