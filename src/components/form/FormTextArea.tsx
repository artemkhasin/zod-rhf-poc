import { Controller, Control, FieldErrors } from "react-hook-form";
import { TextField } from "@mui/material";
import { TFunction } from "i18next";

interface FormTextAreaProps {
        name: string;
        label: string;
        control: Control;
        errors: FieldErrors;
        rows?: number;
        t: TFunction<"translation", undefined>
    }

const FormTextArea: React.FC<FormTextAreaProps> = ({name, label, control, errors, rows = 4, t }) => {
  return (
    <Controller
            name={name}
            control={control}
            render={({ field }) => (
            <TextField
                {...field}
                label={t(label)}
                fullWidth
                multiline
                rows={rows}
                error={!!errors[name]}
                helperText={typeof errors[name]?.message === 'string' ? t(errors[name]?.message) : undefined}
            />
            )}
        />
  )
};

export default FormTextArea;
