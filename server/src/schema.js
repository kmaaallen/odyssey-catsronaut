const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    "Get tracks for the homepage"
    tracksForHome: [Track!]!
    "Fetch a specific track, provided a track's ID"
    track(id: ID!): Track
  }

  "A track is a group of Modules that teaches about a specific topic."
  type Track {
    "id is the ID of the track"
    id: ID!
    "The title of the track"
    title: String!
    "Author of the track"
    author: Author!
    "Image to be used as the thumbnail for the track"
    thumbnail: String
    "Length of the track"
    length: Int
    "Number of modules in the track"
    modulesCount: Int
    "Description of the track"
    description: String
    "Number of views"
    numberOfViews: Int
    "Modules linked to Track"
    modules: [Module!]!
  }

  "Author of a complete Track"
  type Author {
    "ID of the author"
    id: ID!
    "First and Last name of the author"
    name: String!
    "String of the URL for the author's photo"
    photo: String
  }

  "Module is a single unit of teaching. Multiple Modules compose a Track"
  type Module {
    id: ID!
    "Module's title"
    title: String!
    "Modules length in minutes"
    length: Int
  }
`;

module.exports = typeDefs;
