import { Input } from "@nextui-org/react";
import { Controller } from "react-hook-form";
import { get } from "lodash";

const InputText = ({
  name,
  control,
  rules,
  type = "text",
  errors,
  required = false,
  defaultValue = "",
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field: { onChange, value, name } }) => (
        <Input
          required={required}
          onChange={onChange}
          value={value}
          name={name}
          underlined
          labelPlaceholder={name}
          width="100%"
          helperText={get(errors, [name, "message"], undefined)}
          type={type}
        />
      )}
    />
  );
};

export default InputText;
