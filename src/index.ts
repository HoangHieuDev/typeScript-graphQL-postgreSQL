import { ApolloServer } from "apollo-server";
import { schema } from "./schema";

const boot = () => {
    const server = new ApolloServer({
        schema,
        context: ({ req }) => ({ req }),
    });
    server.listen(5000).then(({ url }) => {
        console.log(`🚀  Server ready at ${url}`);
    });
}
boot();