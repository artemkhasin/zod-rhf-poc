import { Controller, Control, FieldErrors, FieldValues, Path } from "react-hook-form";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TFunction } from 'i18next';

interface FormDatePickerProps<T extends FieldValues> {
    name: string;
    label: string;
    control: Control<T>;
    errors: FieldErrors<T>;
    t: TFunction<"translation", undefined>
};

const FormDatePicker = <T extends FieldValues>({ name, label, control, errors, t }: FormDatePickerProps<T>) => {

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Controller
                name={name as Path<T>}
                control={control}
                render={({ field }) => (
                <DatePicker
                    label={t(label)}
                    {...field}
                    slotProps={{
                        textField: {
                            fullWidth: true,
                            error: !!errors[name],
                            helperText: typeof errors[name]?.message === 'string' ? t(errors[name]?.message) : undefined,
                        },
                    }}
                />
                )}
            />
        </LocalizationProvider>
    );
};

export default FormDatePicker;