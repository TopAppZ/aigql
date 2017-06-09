import { makeExecutableSchema } from 'graphql-tools';
import categoryModel from '../models/Category';
import postModel from '../models/Post';
const typeDefs = `
  type Category{
    id: String!
    name: String!
    imagePath:String
    posts:[Post]
  }
  input CategoryInput {
    name: String!
    imagePath:String!
  }
  type Post {
    id: String!
    title:  String!
    body:   String!
    description:String!
    imagePath:String
    category: Category
  }
  input postInput {
    title:  String!
    body:   String!
    description:String!
    imagePath:String
    category_id: String!
  }
  # the schema allows the following query:
  type Query {
    category(id:String):Category
    post(id:String):Post
  }
  type Mutation {
    createCategory(input:CategoryInput):Category
    createPost(input:postInput):Post
  }
`;
const resolvers = {
  Query: {
    category: (_,args) => {
      return categoryModel.findOne({_id:args.id}).exec();
    },
    post: (_,args) => {
      return postModel.findOne({_id:args.id}).exec();
    }
  },
  Post:{
    category:(_,args) => {
      return categoryModel.findOne({_id:_.category_id}).exec();
    }
  },
  Category:{
    posts:(_,args) => {
      return postModel.find({category_id:_.id}).exec();
    }
  },
  Mutation:{
    createCategory: (_,{input}) => {
      let category = new categoryModel(input);
      let promise = category.save();   
      return promise;
    },
    createPost:(_,{input}) => {
      let post = new postModel(input);
      let promise = post.save();
      return promise;
    }
  }
  
}
export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});