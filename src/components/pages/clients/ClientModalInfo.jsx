import React, { memo, useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function ClientModalInfo(props) {
  const {
    open, editedItem, handleClose, setChengetData, setAddNewClient,
  } = props;

  const [valueName, setValueName] = useState('');
  const [valuePhone, setValuePhone] = useState('');
  const [valueEmail, setValueEmail] = useState('');

  useEffect(() => {
    setValueName(editedItem ? editedItem.name : null);
    setValuePhone(editedItem ? editedItem.phone : null);
    setValueEmail(editedItem ? editedItem.email : null);
  }, [editedItem]);

  const handleChange = (event) => {
    setValueName(event.target.value);
  };
  const handleChangePhone = (event) => {
    setValuePhone(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setValueEmail(event.target.value);
  };

  const updateClientProfile = () => {
    setChengetData({
      Id: editedItem.id,
      Name: valueName,
      Phone: valuePhone,
      Email: valueEmail,
      BindId: editedItem.bindId,
    });
  };

  const addClientProfile = () => {
    setAddNewClient({
      Name: valueName,
      Phone: valuePhone,
      Email: valueEmail,
    });
  };

  const handleClick = () => {
    editedItem ? updateClientProfile() : addClientProfile();
  };

  const saveButtonText = editedItem ? 'Редактировать' : 'Добавить';

  const addTitleText = 'Данные для добавления жильца';
  const changeTitleText = 'Редактирование данных жильца';

  const titleText = editedItem ? changeTitleText : addTitleText;

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Grid container spacing={2} sx={{ padding: '14px 0' }} justifyContent="center" alignItems="center">
            <Typography variant="body1" color="text.secondary">
              {titleText}
            </Typography>
          </Grid>
          <TextField
            id="outlined-helperText"
            label="Имя"
            fullWidth
            margin="normal"
            defaultValue={valueName}
            onChange={handleChange}
          />
          <TextField
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            id="outlined-helperText"
            required
            fullWidth
            margin="normal"
            type="number"
            defaultValue={valuePhone}
            label={valuePhone ? 'Телефон' : 'Телефон обязателен для заполнения'}
            onChange={handleChangePhone}
            error={!valuePhone}
          />
          <TextField
            id="outlined-helperText"
            label="Почта"
            fullWidth
            margin="normal"
            defaultValue={valueEmail}
            onChange={handleChangeEmail}
          />
          <Grid
            container
            margin="16px"
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
          >

            <Grid item md={4} xs={4}>
              <Button onClick={handleClose} variant="contained" color="primary">Закрыть</Button>
            </Grid>
            <Grid item md={4} xs={2}>
              <Button onClick={handleClick} variant="contained" color="success" disabled={!valuePhone}>{saveButtonText}</Button>
            </Grid>
          </Grid>
        </Box>

      </Fade>
    </Modal>
  );
}

export default memo(ClientModalInfo);
