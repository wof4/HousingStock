import * as React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import PersonIcon from '@mui/icons-material/Person';
import Tooltip from '@mui/material/Tooltip';

function Client(props) {
  const { client, editClient, deliteClient } = props;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={(
          <Avatar>
            <PersonIcon />
          </Avatar>
                )}
        title={client.name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" sx={{ alignItems: 'center', display: 'flex' }}>
          <LocalPostOfficeIcon />
          {client.email || 'Отсутствует'}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ alignItems: 'center', display: 'flex' }}>
          <PhoneIcon />
          {client.phone || 'Отсутствует'}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <Tooltip title="Удалить">
          <IconButton>
            <DeleteForeverIcon onClick={() => deliteClient(client.bindId)} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Редактировать">
          <IconButton>
            <EditIcon onClick={() => editClient(client)} />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
}

export default Client;
