import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';

import { getClientList, getSelectedFlat } from '../../../selectors';
import { deleteClientTc } from '../../../redux/thuncks/clientThuncks';
import Client from './Client';

function Clients(props) {
  const { seteditedItem, setOpen } = props;
  const dispatch = useDispatch();

  const clientList = useSelector(getClientList);
  const selectedFlat = useSelector(getSelectedFlat);

  const editClient = (client) => {
    seteditedItem(client);
    setOpen(true);
  };

  const deliteClient = (value) => {
    dispatch(deleteClientTc(value, selectedFlat));
  };

  return (
    <Grid container spacing={2} sx={{ paddingTop: '14px' }} justifyContent="center">
      {clientList && clientList.map((item) => (
        <Grid key={item.id} item md={3} sm={6} xs={12} lg={2}>
          <Client client={item} editClient={editClient} deliteClient={deliteClient} />
        </Grid>
      ))}
    </Grid>
  );
}

export default memo(Clients);
