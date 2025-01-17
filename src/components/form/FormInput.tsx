import { Controller, Control, FieldErrors } from "react-hook-form";
import { TextField } from "@mui/material";

interface FormInputProps {
        name: string;
        label: string;
        control: Control;
        errors: FieldErrors;
    };

const FormInput: React.FC<FormInputProps> = ({name, label, control, errors}) => {
  return (
    <Controller
            name={name}
            control={control}
            render={({ field }) => (
            <TextField
                {...field}
                label={label}
                fullWidth
                error={!!errors[name]}
                helperText={typeof errors[name]?.message === 'string' ? errors[name]?.message : undefined}
            />
            )}
        />
  )
};

export default FormInput;
