import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have likes (Likes are set to 0 by default), History Array, Playlists Array (added Watch Later Playlist in it by default) by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    email: "adarshbalika@gmail.com",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    playlists: [
      {
        _id: uuid(),
        title: "movie",
        videos: [
          {
            _id: "RSceAIG27tk",
            title: "Martin Scorsese | Faith, Doubt and Humanity",
            creator: "Cinema Beyond Entertainment",
            description:
              "A Semi-Documentary-Video Essay focusing on the common themes across Martin Scorsese’s illustrious filmography of narrative fiction films. It is a compilation of 52 interviews + film commentaries + Behind the Scenes and 25 of his films.",
            duration: "42:00",
            views: "1M",
            uploaded: "2",
          },
          {
            _id: "AvO8-925Edc",
            title: "The Visual Architecture of Parasite",
            creator: "Thomas Flight",
            description:
              "Parasite is one of the most detailed, intricately crafted films of 2019. In this video essay I examine how Bong Joon-Ho uses set design and visual language to reveal the film's deeper themes and ideas.",
            duration: "10:21",
            views: "1.4M",
            uploaded: "3",
          },
        ]
      },
      {
        _id: uuid(),
        title: "song",
        videos: [
          {
            _id: "YkmJBVKqNiE",
            title: "Shutter Island: Why Perspective is Everything",
            creator: "Storytellers",
            description:
              "we examine Martin Scorsese's Shutter Island (2010) (based off Dennis Lehane's great and similarly named novel). We noticed that their is still a debate going on about the meaning of the story and with this analysis we hope to add a definitive viewpoint to said debate.",
            duration: "10:44",
            views: "2.4M",
            uploaded: "5",
          },
          {
            _id: "6ozbGJQelUY",
            title: "How David Fincher Uses Pop Music",
            creator: "The Discarded Image",
            description:
              "In this video essay I breakdown how David Fincher uses popular music in films like Fight Club, The Social Network and the new Netflix series Mindhunter.",
            duration: "06:57",
            views: "4.6M",
            uploaded: "3",
          },
        ]
      }
    ]
  },
  {
    _id: uuid(),
    firstName: "yash",
    lastName: "patel",
    email: "yashpatel@gmail.com",
    password: "yashpatel",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  }
];
