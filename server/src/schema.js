const {gql} = require('apollo-server');

const typeDefs = gql`
type Query {
    "Get tracks for the homepage"
    tracksForHome: [Tracks!]!
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
`;

module.exports = typeDefs;