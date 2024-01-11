import * as z from "zod";

export const formSchema = z.object({
  username: z.string().trim(),
  password: z.string().trim(),
});
