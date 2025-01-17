import { Controller, Control, FieldErrors } from "react-hook-form";
import { FormControlLabel, Switch, FormHelperText } from "@mui/material";
import { TFunction } from "i18next";

interface FormToggleProps {
    name: string;
    label: string;
    control: Control;
    errors: FieldErrors;
    t: TFunction<"translation", undefined>
};

const FormToggle: React.FC<FormToggleProps> = ({ name, label, control, errors, t }) => {
  return (
    <>
      <Controller
          name={name}
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
