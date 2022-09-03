import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  }
}));

export default function DarkModeSwitcher() {
  return (
    <FormGroup>
      <FormControlLabel
        control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
        label="MUI switch"
      />
      <FormControlLabel
        control={<Android12Switch defaultChecked />}
        label="Android 12"
      />
      <FormControlLabel
        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
        label="iOS style"
      />
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography>Off</Typography>
        <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
        <Typography>On</Typography>
      </Stack>
    </FormGroup>
  );
}
