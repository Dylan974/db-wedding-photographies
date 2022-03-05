import { Textarea } from "@nextui-org/react";
import { Controller } from "react-hook-form";
import { get } from "lodash";

const InputTextArea = ({
  name,
  control,
  rules,
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
        <Textarea
          required={required}
          onChange={onChange}
          value={value}
          name={name}
          label={name.charAt(0).toUpperCase() + name.slice(1)}
          underlined
          labelPlaceholder={name}
          width="100%"
          helperText={get(errors, [name, "message"], undefined)}
        />
      )}
    />
  );
};

export default InputTextArea;
