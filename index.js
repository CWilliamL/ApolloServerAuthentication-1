const { ApolloServer }  = require('apollo-server');
const mongoose = require('mongoose');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const MONGODB = "mongodb+srv://william:Wai960305@apolloserversetup.kqxkwph.mongodb.net/?retryWrites=true&w=majority";

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req })
});

mongoose.connect(MONGODB, {useNewUrlParser: true})
    .then(() => {
        console.log("MongoDB Connected");
        return server.listen({port: 5020});
    })
    .then((res) => {
        console.log(`Server running at ${res.url}`)
    });