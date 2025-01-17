import React from 'react';
import { Controller, Control, FieldErrors } from "react-hook-form";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

interface FormDatePickerProps {
    name: string;
    label: string;
    control: Control;
    errors: FieldErrors;
};

const FormDatePicker: React.FC<FormDatePickerProps> = ({ name, label, control, errors }) => {

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                <DatePicker
                    label={label}
                    {...field}
                    slotProps={{
                        textField: {
                            fullWidth: true,
                            error: !!errors[name],
                            helperText: typeof errors[name]?.message === 'string' ? errors[name]?.message : undefined,
                        },
                    }}
                />
                )}
            />
        </LocalizationProvider>
    );
};

export default FormDatePicker;