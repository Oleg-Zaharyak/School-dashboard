import { FieldError } from "react-hook-form";

type SelectInputFieldProps = {
  label: string;
  type?: string;
  register: any;
  name: string;
  defaultValue?: string;
  error?: FieldError;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  optionArray: string[];
  styles: string;
};

const SelectInputField = ({
  label,
  register,
  name,
  defaultValue,
  error,
  inputProps,
  optionArray,
  styles,
}: SelectInputFieldProps) => {
  return (
    <div className="flex flex-col gap-2 w-full md:w-1/4">
      <label className="text-xs text-gray-500">{label}</label>
      <select
        className="ring-[1.5px] ring-gray-500 p-2 rounded-md text-sm w-full"
        {...register(name)}
        defaultValue={defaultValue}
        {...inputProps}
      >
        {optionArray.map((optionName) => {
          return <option value={`${optionName}`}>{optionName}</option>;
        })}
      </select>
      {error?.message && (
        <p className="text-xs text-red-400">{error.message.toString()}</p>
      )}
    </div>
  );
};

export default SelectInputField;
