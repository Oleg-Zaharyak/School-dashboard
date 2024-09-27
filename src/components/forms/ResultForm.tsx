"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";
import Image from "next/image";
import SelectInputField from "../SelectInputField";

const schema = z.object({
  subject: z
    .string()
    .min(1, { message: "Title must be at least 1 characters long!" })
    .max(20, { message: "Title Name must be at most 20 characters long!" }),
  date: z.date({ message: "Date is required" }),
  class: z.enum(["4A", "2A", "3A", "3B", "4C", "4B", "3C", "8C", "1C"], {
    message: "Class is required",
  }),
  teacher: z.enum(["John Doe", "Blake Joseph"], {
    message: "Teacher is required",
  }),
  student: z.enum(["John Doe", "Blake Joseph"], {
    message: "Student is required",
  }),
  score: z.number({ message: "Score is required" }),
  type: z.enum(["exam", "module"], {
    message: "Type is required",
  }),
});

type Inputs = z.infer<typeof schema>;

const ResultForm = ({
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
        {type === "update" ? "Update result data" : "Create a new result"}
      </h1>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Subject"
          name="subject"
          defaultValue={data?.subject}
          register={register}
          error={errors?.subject}
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
          optionArray={["4A", "2A", "3A", "3B", "4C", "4B", "3C", "8C", "1C"]}
          error={errors?.class}
        />
        <SelectInputField
          label="Teacher"
          name="teacher"
          defaultValue={data?.teacher}
          register={register}
          optionArray={["John Doe", "Blake Joseph"]}
          error={errors?.teacher}
        />
        <SelectInputField
          label="Student"
          name="student"
          defaultValue={data?.student}
          register={register}
          optionArray={["John Doe", "Blake Joseph"]}
          error={errors?.student}
        />
        <InputField
          label="Score"
          name="score"
          type="number"
          defaultValue={data?.score}
          register={register}
          error={errors?.score}
        />
        <SelectInputField
          label="Type"
          name="type"
          defaultValue={data?.type}
          register={register}
          optionArray={["exam", "module"]}
          error={errors?.class}
        />
      </div>

      <button className="bg-blue-400 text-white rounded-md p-2">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default ResultForm;
