const apiData = {
  fruits: [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Elderberry",
    "Fig",
    "Grape",
    "Honeydew",
    "Indian Fig",
    "Jackfruit",
    {
      favoriteArtist: "Taylor Swift",
      favoriteSong: "Love Story",
    },
  ],
  user: {
    name: "John Doe",
    email: "john.doe@example.com",
    age: 30,
    preferences: {
      color: "Blue",
      genre: "Pop",
      isActive: true,
    },
    playlists: [
      {
        name: "Chill Vibes",
        songs: [
          {
            title: "Ocean Eyes",
            artist: "Billie Eilish",
            duration: 3.2,
            isFavorite: true,
          },
          {
            title: "Shape of You",
            artist: "Ed Sheeran",
            duration: 4.24,
            isFavorite: false,
          },
        ],
      },
      {
        name: "Workout Mix",
        songs: [
          {
            title: "Eye of the Tiger",
            artist: "Survivor",
            duration: 4.04,
            isFavorite: true,
          },
          {
            title: "Lose Yourself",
            artist: "Eminem",
            duration: 5.2,
            isFavorite: false,
          },
        ],
      },
    ],
  },
};
