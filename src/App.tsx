import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  TextField,
  Switch,
  FormControlLabel,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Button,
  Typography,
  Paper,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { FormData, zodSchema } from './schema';

const AVAILABLE_TAGS = ['Important', 'Urgent', 'Review', 'Draft', 'Final'];

function App() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(zodSchema),
    defaultValues: {
      active: true,
      tags: [],
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <Paper className="p-8 w-full max-w-2xl">
          <Typography variant="h4" component="h1" gutterBottom>
            Form Example
          </Typography>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Controller
              name="id"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="ID"
                  fullWidth
                  error={!!errors.id}
                  helperText={typeof errors.id?.message === 'string' ? errors.id?.message : undefined}
                />
              )}
            />

            <Controller
              name="code"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Code"
                  fullWidth
                  error={!!errors.code}
                  helperText={typeof errors.code?.message === 'string' ? errors.code?.message : undefined}
                />
              )}
            />

            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Description"
                  fullWidth
                  multiline
                  rows={3}
                  error={!!errors.description}
                  helperText={typeof errors.description?.message === 'string' ? errors.description?.message : undefined}
                />
              )}
            />

            <Controller
              name="expiryDate"
              control={control}
              render={({ field }) => (
                <DatePicker
                  label="Expiry Date"
                  {...field}
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      error: !!errors.expiryDate,
                      helperText: typeof errors.expiryDate?.message === 'string' ? errors.expiryDate?.message : undefined,
                    },
                  }}
                />
              )}
            />

            <Controller
              name="active"
              control={control}
              render={({ field }) => (
                <FormControlLabel
                  control={
                    <Switch
                      checked={field.value}
                      onChange={(e) => field.onChange(e.target.checked)}
                    />
                  }
                  label="Active"
                />
              )}
            />

            <Controller
              name="tags"
              control={control}
              render={({ field }) => (
                <FormControl fullWidth>
                  <InputLabel>Tags</InputLabel>
                  <Select
                    {...field}
                    multiple
                    label="Tags"
                    error={!!errors.tags}
                  >
                    {AVAILABLE_TAGS.map((tag) => (
                      <MenuItem key={tag} value={tag}>
                        {tag}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            />

            <Box className="pt-4">
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Box>
          </form>
        </Paper>
      </div>
    </LocalizationProvider>
  );
}

export default App;