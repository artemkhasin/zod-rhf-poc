import { Controller, Control, FieldErrors, FieldValues, Path } from "react-hook-form";
import { FormControlLabel, Switch, FormHelperText } from "@mui/material";
import { TFunction } from "i18next";

interface FormToggleProps<T extends FieldValues> {
    name: string;
    label: string;
    control: Control<T>;
    errors: FieldErrors<T>;
    t: TFunction<"translation", undefined>
};

const FormToggle = <T extends FieldValues>({ name, label, control, errors, t }: FormToggleProps<T>) => {
  return (
    <>
      <Controller
          name={name as Path<T>}
          control={control}
          render={({ field }) => (
          <>
            <FormControlLabel
                control={
                <Switch
                    checked={field.value}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => field.onChange(e.target.checked)}
                />
                }
                label={t(label)}
            />
            {errors[name]?.message && <FormHelperText error>{String(t(errors[name]?.message as string))}</FormHelperText>}
          </>
          )}
      />
    </>
  )
}

export default FormToggle
