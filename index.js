var express = require('express');
import graphqlHTTP from 'express-graphql';
import {
  GraphQLSchema
} from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';
import mongoose from 'mongoose';
import config from './config';
import {schema} from './graphql';
mongoose.connect(config.db.uri);
var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));
app.listen(config.port);
console.log(`Running a GraphQL API server at localhost:${config.port}/graphql`);