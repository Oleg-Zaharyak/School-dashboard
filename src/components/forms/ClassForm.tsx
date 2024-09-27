"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";
import Image from "next/image";
import SelectInputField from "../SelectInputField";

const schema = z.object({
  name: z
    .string()
    .min(1, { message: "Class Name must be at least 1 characters long!" })
    .max(20, { message: "Class Name must be at most 20 characters long!" }),
  capacity: z.number().min(1, { message: "Capacity is required" }),
  grade: z.enum(["1", "2", "3", "4", "5", "6", "7", "8", "9"], {
    message: "Grade is required",
  }),
  supervisor: z.enum(["Joseph Padilla", "Blake Joseph"], {
    message: "Supervisor is required",
  }),
});

type Inputs = z.infer<typeof schema>;

const ClassForm = ({
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
        {type === "update" ? "Update class data" : "Create a new class"}
      </h1>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Class Name"
          name="name"
          defaultValue={data?.name}
          register={register}
          error={errors?.name}
        />
        <InputField
          label="Capacity"
          name="capacity"
          defaultValue={data?.capacity}
          register={register}
          error={errors?.capacity}
        />
        <SelectInputField
          label="Grade"
          name="grade"
          defaultValue={data?.grade}
          register={register}
          error={errors?.grade}
          optionArray={["1", "2", "3", "4", "5", "6", "7", "8", "9"]}
        />
        <SelectInputField
          label="Supervisor"
          name="supervisor"
          defaultValue={data?.supervisor}
          register={register}
          error={errors?.supervisor}
          optionArray={["Joseph Padilla", "Blake Joseph"]}
        />
      </div>

      <button className="bg-blue-400 text-white rounded-md p-2">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default ClassForm;
