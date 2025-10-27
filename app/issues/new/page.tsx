"use client";

import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { TextField, Button, Callout , Text } from "@radix-ui/themes";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIssueSchema } from "@/app/validationSchema";
import {z} from 'zod';

type IssueForm = z.infer<typeof createIssueSchema>;

const NewIssuePage = () => {
  const router = useRouter();
  const { register, control, handleSubmit , formState: { errors} } = useForm<IssueForm>({
    resolver : zodResolver(createIssueSchema)
  });
  const [error, setError] = useState("");

  return (
    <form
      className="max-w-xl space-y-4"
      onSubmit={handleSubmit(async (data) => {
        try {
          await axios.post("/api/issues", data);
          router.push("/issues");
        } catch (error) {
          setError("An unexpected error occurred.");
        }
      })}
    >
      {/* ✅ Error callout */}
      {error && (
        <Callout.Root color="red" variant="soft">
          <Callout.Icon>
            <ExclamationTriangleIcon />
          </Callout.Icon>
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}

     
      <input
          {...register("title")}
          placeholder="Enter issue title..."
        />
        {errors.title && <Text color="red">{errors.title.message}
            </Text>}
     

      {/* Description editor */}
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <SimpleMDE {...field} placeholder="Description..." />
        )}
      />
      {errors.descriptione && <Text color="red">{errors.title.description}
            </Text>}

      <Button type="submit">Submit New Issue</Button>
    </form>
  );
};

export default NewIssuePage;
