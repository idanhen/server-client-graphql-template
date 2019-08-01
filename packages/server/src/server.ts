import express from 'express';
import {ApolloServer} from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import {createServer} from 'http';
import compression from 'compression';
import cors from 'cors';
import schema from './schema';

const port = process.env.PORT || 3002;
// const server = express();


const app = express();
const server = new ApolloServer({
    schema,
    validationRules: [depthLimit(7)],
});
app.use('*', cors());
app.use(compression());
server.applyMiddleware({app, path: '/graphql'});
const httpServer = createServer(app);
httpServer.listen(
    {port},
    (): void => console.log(`\n🚀      GraphQL is now running on http://localhost:${port}/graphql`));

// Hot Module Replacement
if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => console.log('Module disposed. '));
}