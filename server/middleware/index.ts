import { TRPCError, initTRPC } from '@trpc/server';

interface Context {
    user?: {
        id: string;
        isAdmin: boolean;
    };
}

const t = initTRPC.context<Context>().create();
export const middleware = t.middleware;
export const publicProcedure = t.procedure;
export const router = t.router;

const isAdmin = middleware(async (opts) => {
    const { ctx } = opts;
    if (!ctx.user?.isAdmin) {
        throw new TRPCError({ code: 'UNAUTHORIZED' });
    }
    return opts.next({
        ctx: {
            user: ctx.user,
        },
    });
});

export const adminProcedure = publicProcedure.use(isAdmin);

