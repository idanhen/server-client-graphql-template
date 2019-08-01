import 'graphql-import-node';
import {GraphQLObjectType, GraphQLSchema, GraphQLString} from 'graphql';

const schema: GraphQLSchema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "Query",
        fields: {
            hello: {
                type: GraphQLString,
                resolve: () => {
                    return "world"
                },
            },
        }
    })
});
export default schema;