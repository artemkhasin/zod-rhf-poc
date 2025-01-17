import { Controller, Control, FieldErrors } from "react-hook-form";
import { TextField } from "@mui/material";

interface FormTextAreaProps {
        name: string;
        label: string;
        control: Control;
        errors: FieldErrors;
        rows?: number;
    }

const FormTextArea: React.FC<FormTextAreaProps> = ({name, label, control, errors, rows = 4 }) => {
  return (
    <Controller
            name={name}
            control={control}
            render={({ field }) => (
            <TextField
                {...field}
                label={label}
                fullWidth
                multiline
                rows={rows}
                error={!!errors[name]}
                helperText={typeof errors[name]?.message === 'string' ? errors[name]?.message : undefined}
            />
            )}
        />
  )
};

export default FormTextArea;
