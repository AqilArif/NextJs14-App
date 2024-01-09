import { Select, SelectItem } from "@nextui-org/select";

const SelectUI = ({
  name,
  label,
  placeholder,
  variant,
  color,
  size,
  register,
  required,
  errors,
  selectedKeys,
  options,
  onChange,
  className,
}) => {
  if (!name) {
    return null;
  }
  return (
    <>
      <Select
        label={label ?? ""}
        placeholder={placeholder ?? ""}
        size={size ?? "md"}
        onSelectionChange={onChange}
        variant={variant ?? "faded"}
        color={errors?.[name] ? "danger" : color ? color : "primary"}
        className={`w-full ${className ?? ""}`}
        isInvalid={errors?.[name] ? true : false}
        errorMessage={errors?.[name] && String(errors[name]?.message)}
        {...register(name, {
          required: required === false ? false : "This field is required",
        })}
      >
        {options?.map((items) => (
          <SelectItem key={items.value} value={items.value}>
            {items.label}
          </SelectItem>
        ))}
      </Select>
    </>
  );
};

export default SelectUI;
