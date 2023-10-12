/**
 * This is the API-handler of your app that contains all your API routes.
 * On a bigger app, you will probably want to split this file up into multiple files.
 */
import { createHTTPServer } from '@trpc/server/adapters/standalone';
import cors from 'cors';
import { z } from 'zod';
import { publicProcedure, router } from './middleware';

const appRouter = router({
    placeholder: publicProcedure
        .query(() => {
            return {
                text: "hello"
            };
        }),
});

// export only the type definition of the API
// None of the actual implementation is exposed to the client
export type AppRouter = typeof appRouter;

// create server
createHTTPServer({
    middleware: cors(),
    router: appRouter,
    createContext() {
        console.log('context 3');
        return {};
    },
}).listen(2022);

