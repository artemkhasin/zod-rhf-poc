import { FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material'
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };
  return (
    <div className='absolute top-4 right-4'>
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
            <InputLabel id="language-select-label">{t('Language')}</InputLabel>
            <Select
                labelId="language-select-label"
                id="language-select"
                value={i18n.language}
                label="Language"
                onChange={(e) => changeLanguage(e.target.value)}
            >
                <MenuItem value="en">Eng</MenuItem>
                <MenuItem value="es">Esp</MenuItem>
                <MenuItem value="fr">Fra</MenuItem>
                <MenuItem value="ru">Rus</MenuItem>
            </Select>
            </FormControl>
        </Box>
    </div>
  )
}

export default LanguageSelector
