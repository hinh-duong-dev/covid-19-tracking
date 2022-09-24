import { FormControl, FormHelperText, InputLabel, NativeSelect } from '@material-ui/core'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: `${theme.spacing(3)}px 0`,
    minWidth: 120,
  },
}));

export default function CountrySelector({value, handleOnchange, countries}) {
   const classes = useStyles();
   
   return ( 
       <FormControl className={classes.formControl}>
           <InputLabel shrink htmlFor="country-selector">
              Country 
           </InputLabel>
           <NativeSelect
           value={value}
           onChange={handleOnchange}
           inputProps = {{
              name: 'country',
              id: 'country-selector'
           }}>
            {
                countries.map((country) => {
                   return <option key={country.ISO2} value={country.ISO2.toLowerCase()}>{country.Country}</option>
                })
            }
           </NativeSelect>
           <FormHelperText>Choose Country</FormHelperText>
       </FormControl>
  )
}

CountrySelector.defaultProps = {
   countries: [],
 };
