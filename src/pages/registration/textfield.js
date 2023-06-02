import * as React from 'react';
import TextField from '@mui/material/TextField';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '--TextField-brandBorderColor': 'rgba(17, 23, 93, 0.3)',
            '--TextField-brandBorderHoverColor': 'rgba(95, 53, 245, 1)',
            '--TextField-brandBorderFocusedColor': 'rgba(17, 23, 93, 0.5)',
            '& label.Mui-focused': {
              color: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: 'var(--TextField-brandBorderColor)',
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderHoverColor)',
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: 'var(--TextField-brandBorderFocusedColor)',
            },
          },
        },
      },
    },
  });

export default function Textfields() {
  const outerTheme = useTheme();

  return (
      <ThemeProvider theme={customTheme(outerTheme)}>
        <TextField className='text-field' type="email" id="outlined-basic" label="Email Address" variant="outlined" fullWidth/>
        <TextField className='text-field' type="text" id="outlined-basic" label="Full Name" variant="outlined" fullWidth/>
        <TextField className='text-field' type="password" id="outlined-basic" label="Password" variant="outlined" fullWidth/>
      </ThemeProvider>
  );
}