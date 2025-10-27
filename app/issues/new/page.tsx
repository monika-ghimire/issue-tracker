"use client";

import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { TextField, Button } from "@radix-ui/themes";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<IssueForm>();

  return (
    <form
      className="max-w-xl space-y-3"
      onSubmit={handleSubmit(async (data) =>{
   await axios.post('/api/issues' , data);
   router.push('/issues');
      })}
    >
      
      <input  {...register("title")}
          placeholder="Enter issue title..." />

   
      <Controller
        name="description"
        control={control}
        render={({ field }) => <SimpleMDE {...field} placeholder="Description..." />}
      />

      <Button type="submit">Submit New Issue</Button>
    </form>
  );
};

export default NewIssuePage;
