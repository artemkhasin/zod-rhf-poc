import React from 'react';
import { Controller, Control, FieldErrors } from "react-hook-form";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TFunction } from 'i18next';

interface FormDatePickerProps {
    name: string;
    label: string;
    control: Control;
    errors: FieldErrors;
    t: TFunction<"translation", undefined>
};

const FormDatePicker: React.FC<FormDatePickerProps> = ({ name, label, control, errors, t }) => {

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Controller
                name={name}
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