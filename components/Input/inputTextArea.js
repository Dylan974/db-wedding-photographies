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
  label,
  readonly = false,
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
          readOnly={readonly}
          onChange={onChange}
          value={value}
          name={name}
          label={label}
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
