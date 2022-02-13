import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';

export default function CustomField(props) {
  const {
    list, status, getData, addSelectedValue, options,
  } = props;
  const [open, setOpen] = React.useState(false);
  const [select, setSelect] = React.useState(null);
  const [inputValue, setInputValue] = React.useState('');

  const loading = open && status;

  React.useEffect(() => {
    if (!list.length && !status) {
      getData(options.name);
    }
  }, []);

  React.useEffect(() => {
    if (select) {
      addSelectedValue(select, options.name);
    }
  }, [select]);

  React.useEffect(() => {
    setInputValue('');
    setSelect(null);
  }, [list]);

  return (
    <Autocomplete
      value={select}
      onChange={(_event, newValue) => {
        setSelect(newValue);
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      getOptionLabel={(option) => option.name}
      id={options.name}
      sx={{ width: options.width }}
      open={open}
      noOptionsText={options.optionText}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      options={list}
      loading={loading}
      loadingText={options.loadingText}
      renderInput={(params) => (
        <TextField
          {...params}
          label={options.label}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
}
