"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";
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
  startTime: z.string().time({ message: "Start time is required" }),
  endTime: z.string().time({ message: "Start time is required" }),
});

type Inputs = z.infer<typeof schema>;

const EventForm = ({
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
        {type === "update" ? "Update event data" : "Create a new event"}
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
        <InputField
          label="Start time"
          name="startTime"
          type="time"
          defaultValue={data?.startTime}
          register={register}
          error={errors?.startTime}
        />
        <InputField
          label="End time"
          name="endTime"
          type="time"
          defaultValue={data?.endTime}
          register={register}
          error={errors?.endTime}
        />
      </div>

      <button className="bg-blue-400 text-white rounded-md p-2">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default EventForm;
