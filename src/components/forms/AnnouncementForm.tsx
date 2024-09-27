"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";
import Image from "next/image";
import SelectInputField from "../SelectInputField";

const schema = z.object({
  title: z
    .string()
    .min(1, { message: "Title must be at least 1 characters long!" })
    .max(20, { message: "Title Name must be at most 20 characters long!" }),
  date: z.date({ message: "Date is required" }),
  class: z.enum(["4A", "2A", "3A", "3B", "4C", "4B", "3C", "8C", "1C"], {
    message: "Class is required",
  }),
});

type Inputs = z.infer<typeof schema>;

const AnnouncementForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data: any) => {
    console.log(data);
  });

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">
        {type === "update"
          ? "Update announcement data"
          : "Create a new announcement"}
      </h1>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Title"
          name="title"
          defaultValue={data?.title}
          register={register}
          error={errors?.title}
        />
        <InputField
          label="Date"
          name="date"
          type="date"
          defaultValue={data?.date}
          register={register}
          error={errors?.date}
        />
        <SelectInputField
          label="Class"
          name="class"
          defaultValue={data?.class}
          register={register}
          error={errors?.class}
          optionArray={["4A", "2A", "3A", "3B", "4C", "4B", "3C", "8C", "1C"]}
        />
      </div>

      <button className="bg-blue-400 text-white rounded-md p-2">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default AnnouncementForm;
