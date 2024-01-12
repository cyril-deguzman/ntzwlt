"use client";

import { useRouter } from "next/navigation";
import { formSchema } from "./formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Input,
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui";
import z from "zod";
import { getUser, saveAccessToken } from "@/app/_actions";
import { useState } from "react";

const LogInForm = () => {
  const [errMsg, setErrMsg] = useState("");
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    form.reset({ username: "", password: "" });
    const user = await getUser({
      username: values.username,
      password: values.password,
    });

    if (!user.username) {
      setErrMsg("Invalid credentials");
      return;
    }

    await saveAccessToken(user);
    router.push("/home");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="john@netzwelt.ops" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type={"password"} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-x-4 pt-3">
          <Button type="submit">Log in</Button>
        </div>
        <div className="text-red-500 dark:text-inherit text-sm">{errMsg}</div>
      </form>
    </Form>
  );
};

export default LogInForm;
