import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';

import { getClientList, getClientReqId } from '../../../selectors';
import { deleteClientTc } from '../../../redux/reducers/clientReducer';
import Client from './Client';

function Clients(props) {
  const dispatch = useDispatch();

  const clientList = useSelector(getClientList);
  const reqId = useSelector(getClientReqId);

  const editClient = (client) => {
    props.seteditedItem(client);
    props.setOpen(true);
  };

  const deliteClient = (value) => {
    dispatch(deleteClientTc(value, reqId));
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
