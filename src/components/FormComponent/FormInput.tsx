import { Controller, Control, FieldErrors, FieldValues, Path } from "react-hook-form";
import { TextField } from "@mui/material";
import { TFunction } from "i18next";

interface FormInputProps<T extends FieldValues> {
        name: string;
        label: string;
        control: Control<T>;
        errors: FieldErrors<T>;
        t: TFunction<"translation", undefined>
    };

const FormInput = <T extends FieldValues>({name, label, control, errors, t}: FormInputProps<T>) => {
  return (
    <Controller
            name={name as Path<T>}
            control={control}
            render={({ field }) => (
            <TextField
                {...field}
                label={t(label)}
                fullWidth
                error={!!errors[name]}
                helperText={typeof errors[name]?.message === 'string' ? t(errors[name]?.message) : undefined}
                value={field.value || ''}
            />
            )}
        />
  )
};

export default FormInput;
