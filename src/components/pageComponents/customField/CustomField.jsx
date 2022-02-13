import React, { memo, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';

function CustomField(props) {
  const {
    list, status, getData, addSelectedValue, options, deleteselectedValue,
  } = props;
  const [open, setOpen] = React.useState(false);
  const [select, setSelect] = React.useState(null);
  const [inputValue, setInputValue] = React.useState('');

  const loading = open && status;

  useEffect(() => {
    if (!list.length && !status && options.name === 'street') {
      getData();
    }
  }, []);

  useEffect(() => {
    if (select) {
      addSelectedValue(select, options.name);
    }
  }, [select]);

  useEffect(() => {
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
        if (newInputValue === '') {
          deleteselectedValue(options.name);
        }
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

export default memo(CustomField);
