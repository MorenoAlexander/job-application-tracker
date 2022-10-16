import { protectedProcedure, router } from "../trpc";

export const applicationsRouter = router({
  getAll: protectedProcedure.query(() => {
    return [
      {
        id: "1",
        name: "My first application",
        createdAt: new Date(),
      },
    ];
  }),
});
