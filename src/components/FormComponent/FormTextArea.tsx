import { Controller, Control, FieldErrors, FieldValues, Path } from "react-hook-form";
import { TextField } from "@mui/material";
import { TFunction } from "i18next";

interface FormTextAreaProps<T extends FieldValues> {
        name: string;
        label: string;
        control: Control<T>;
        errors: FieldErrors<T>;
        rows?: number;
        t: TFunction<"translation", undefined>
    }

const FormTextArea = <T extends FieldValues>({name, label, control, errors, rows = 4, t }: FormTextAreaProps<T>) => {
  return (
    <Controller
            name={name as Path<T>}
            control={control}
            render={({ field }) => (
            <TextField
                {...field}
                label={t(label)}
                fullWidth
                multiline
                rows={rows}
                error={!!errors[name]}
                value={field.value || ''}
                helperText={typeof errors[name]?.message === 'string' ? t(errors[name]?.message) : undefined}
            />
            )}
        />
  )
};

export default FormTextArea;
