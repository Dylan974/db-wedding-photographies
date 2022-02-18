import { Input } from "@nextui-org/react";
import { Controller } from "react-hook-form";

const InputText = ({ name, control }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, name } }) => (
        <Input onChange={onChange} value={value} name={name} underlined labelPlaceholder={name} width="100%" />
      )}
    />
  );
};

export default InputText;
