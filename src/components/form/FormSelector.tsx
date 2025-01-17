import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Controller, Control, FieldErrors } from 'react-hook-form';

interface FormSelectorProps {
        name: string;
        label: string;
        control: Control;
        errors: FieldErrors;
        tags: string[];
    };

const FormSelector: React.FC<FormSelectorProps> = ({ name, label, control, errors, tags }) => {
    return (
        <Controller
        name={name}
        control={control}
        render={({ field }) => (
            <FormControl fullWidth>
            <InputLabel>{label}</InputLabel>
            <Select
                {...field}
                multiple
                label={label}
                error={!!errors[name]}
            >
                {tags.map((tag) => (
                <MenuItem key={tag} value={tag}>
                    {tag}
                </MenuItem>
                ))}
            </Select>
            </FormControl>
        )}
        />
    );
};


export default FormSelector
