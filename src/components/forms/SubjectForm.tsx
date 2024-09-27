"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";
import SelectInputField from "../SelectInputField";

const schema = z.object({
  name: z
    .string()
    .min(1, { message: "Subject name must be at least 1 characters long!" })
    .max(20, { message: "Subject name must be at most 20 characters long!" }),
  teachers: z.string({
    message: "Teacher is required",
  }),
});

type Inputs = z.infer<typeof schema>;

const SubjectForm = ({
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
        {type === "update" ? "Update lesson data" : "Create a new lesson"}
      </h1>
      <div className="flex justify-start flex-wrap gap-4">
        <InputField
          label="Subject"
          name="name"
          defaultValue={data?.name}
          register={register}
          error={errors?.name}
        />
        <InputField
          label="Teachers"
          name="teachers"
          defaultValue={data?.teachers}
          register={register}
          error={errors?.teachers}
        />
      </div>

      <button className="bg-blue-400 text-white rounded-md p-2">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default SubjectForm;
