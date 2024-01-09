import { Input } from "@nextui-org/input";

const InputUI = ({
  name,
  label,
  placeholder,
  variant,
  color,
  size,
  startContent,
  endContent,
  register,
  required,
  errors,
  className,
}) => {
  if (!name) {
    return null;
  }
  return (
    <>
      <Input
        label={label ?? ""}
        placeholder={placeholder ?? "Enter placeholder"}
        size={size ?? "md"}
        variant={variant ?? "faded"}
        color={errors?.[name] ? "danger" : color ? color : "primary"}
        startContent={startContent}
        endContent={endContent}
        className={`w-full ${className ?? ""}`}
        isInvalid={errors?.[name] ? true : false}
        errorMessage={errors?.[name] && String(errors[name]?.message)}
        {...register(name, {
          required: required === false ? false : "This field is required",
        })}
      />
    </>
  );
};

export default InputUI;
