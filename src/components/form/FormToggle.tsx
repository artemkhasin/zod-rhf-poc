import { Controller, Control, FieldErrors } from "react-hook-form";
import { FormControlLabel, Switch, FormHelperText } from "@mui/material";

interface FormToggleProps {
    name: string;
    label: string;
    control: Control;
    errors: FieldErrors;
};

const FormToggle: React.FC<FormToggleProps> = ({ name, label, control, errors }) => {
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
                label={label}
            />
            {errors[name] && <FormHelperText error>{String(errors[name]?.message)}</FormHelperText>}
          </>
          )}
      />
    </>
  )
}

export default FormToggle
