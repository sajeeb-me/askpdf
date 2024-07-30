import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { publicProcedure, router } from "./trpc";
import { TRPCError } from "@trpc/server";

export const appRouter = router({
  authCallback: publicProcedure.query(async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user || !user.email) {
      throw new TRPCError({ code: "UNAUTHORIZED", message: "Unauthorized" });
    }

    // Check if user is in the database
    const dbUser = await 
  })
});

export type AppRouter = typeof appRouter;