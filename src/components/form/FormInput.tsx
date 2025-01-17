import { Controller, Control, FieldErrors } from "react-hook-form";
import { TextField } from "@mui/material";
import { TFunction } from "i18next";

interface FormInputProps {
        name: string;
        label: string;
        control: Control;
        errors: FieldErrors;
        t: TFunction<"translation", undefined>
    };

const FormInput: React.FC<FormInputProps> = ({name, label, control, errors, t}) => {
  return (
    <Controller
            name={name}
            control={control}
            render={({ field }) => (
            <TextField
                {...field}
                label={t(label)}
                fullWidth
                error={!!errors[name]}
                helperText={typeof errors[name]?.message === 'string' ? t(errors[name]?.message) : undefined}
            />
            )}
        />
  )
};

export default FormInput;
