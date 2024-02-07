'use client';

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { SendIcon } from "lucide-react";
import { toast } from "sonner";
import { Textarea } from "../ui/textarea";

const FormSchema = z.object({
  name: z.string().min(1, {
    message: "Name must be at least 1 character."
  }),
  email: z.string().email("Email must be valid input."),
  phone: z.string().optional(),
  messages: z.string().min(1, {
    message: 'Message is not empty.'
  })
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      email: '',
    }
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log(data);
    toast.info("asdasdasd", {
      description: (
        JSON.stringify(data, null, 2)
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-4"
      >
        <FormField control={form.control}
          name="name"
          render={( {field} ) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}      
        />

        <FormField control={form.control}
          name="email"
          render={( {field} ) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Your email" {...field} />
              </FormControl>
              <FormDescription>
                This is your email address.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}      
        />

        <FormField control={form.control}
          name="phone"
          render={( {field} ) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Your phone" {...field} />
              </FormControl>
              <FormDescription>
                This is your phone (optional).
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}      
        />

        <FormField control={form.control}
          name="messages"
          render={( {field} ) => (
            <FormItem>
              <FormLabel>Messages</FormLabel>
              <FormControl>
                <Textarea placeholder="Your messages..." rows={10} {...field} />
              </FormControl>
              <FormDescription>
                This is your messages.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}      
        />

        <Button type="submit" className="space-x-2">
          <SendIcon className="h-4 w-4" />
          <span>Submit</span>
        </Button>
      </form>
    </Form>
  )
}
