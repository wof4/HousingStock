import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
import { green } from '@mui/material/colors';
import Tooltip from '@mui/material/Tooltip';
import {
  getClientByFlatsIdTc, updateClientDataTc, addClientDataTc, deleteClientListTc,
} from '../../../redux/reducers/clientReducer';
import {
  getStreetsListTc, getHouseTc, getFlatsTc,
} from '../../../redux/reducers/mainReducer';
import {
  getstreetsList, getLoadingStretsListStatus, getStreetstreetInputOption,
  getHouseList, getLoadingHouseListStatus, getHouseInputOption, getFlatsList,
  getLoadingFlatsListStatus, getFlatsInputOption, getClientReqId,
  getSelectedHouse, getSelectedStreet, getSelectedFlat,
} from '../../../selectors';
import CustomField from '../../pageComponents/customField/CustomField';
import Clients from '../clients/Clients';
import ClientModalInfo from '../clients/ClientModalInfo';

function MainPage() {
  const [open, setOpen] = React.useState(false);
  const [editedItem, seteditedItem] = React.useState(null);

  const dispatch = useDispatch();
  const reqId = useSelector(getClientReqId);

  const streetsList = useSelector(getstreetsList);
  const isStreatListStatus = useSelector(getLoadingStretsListStatus);
  const streetOptions = useSelector(getStreetstreetInputOption);
  const selectedStreet = useSelector(getSelectedStreet);
  const houseList = useSelector(getHouseList);
  const isHouseListStatus = useSelector(getLoadingHouseListStatus);
  const houseOptions = useSelector(getHouseInputOption);
  const selectedHouse = useSelector(getSelectedHouse);

  const flatsList = useSelector(getFlatsList);
  const isFlatsListStatus = useSelector(getLoadingFlatsListStatus);
  const flatsOptions = useSelector(getFlatsInputOption);
  const selectedFlat = useSelector(getSelectedFlat);

  const getData = (fieldName) => {
    switch (fieldName) {
      case 'street':
        dispatch(getStreetsListTc());
        break;
      default:
    }
  };

  const setData = (value, fieldName) => {
    switch (fieldName) {
      case 'street':
        dispatch(getHouseTc(value));
        break;
      case 'house':
        dispatch(getFlatsTc(value));
        break;
      case 'flats':
        dispatch(getClientByFlatsIdTc(value));
        break;
      default:
    }
  };

  const handleClose = () => setOpen(false);

  const setChengetData = (data) => {
    dispatch(updateClientDataTc(data, reqId));
    setOpen(false);
  };

  const setAddNewClient = (data) => {
    dispatch(addClientDataTc(data, reqId));
    setOpen(false);
  };

  useEffect(() => {
    dispatch(deleteClientListTc());
  }, [houseList, selectedHouse]);

  const street = selectedStreet ? `${selectedStreet.prefix.name}. ${selectedStreet.name}` : '';
  const house = (selectedHouse && street.length) ? `дом. ${selectedHouse.name}` : '';
  const flat = (selectedFlat && house.length) ? `/${selectedFlat.name}` : '';

  return (
    <Grid container spacing={2} sx={{ padding: '14px 0' }} justifyContent="center" flexDirection="column" alignItems="center">
      <Grid item>
        <Grid container>
          <CustomField label="Улица" list={streetsList} status={isStreatListStatus} options={streetOptions} getData={getData} addSelectedValue={setData} />
          <CustomField label="Дом" list={houseList} status={isHouseListStatus} options={houseOptions} getData={getData} addSelectedValue={setData} />
          <CustomField label="Квартира" list={flatsList} status={isFlatsListStatus} options={flatsOptions} getData={getData} addSelectedValue={setData} />
        </Grid>
        <Grid item>
          <Grid>
            {`${street}  ${house}  ${flat}`}
          </Grid>
          <Grid container justifyContent="flex-end">
            <Tooltip title="Добавить жильца">
              <IconButton disabled={!flat.length} sx={{ color: green[500] }}>
                <AddIcon onClick={() => setOpen(true)} />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </Grid>
      <Clients setOpen={setOpen} seteditedItem={seteditedItem} />
      <ClientModalInfo
        open={open}
        handleClose={handleClose}
        editedItem={editedItem}
        setChengetData={setChengetData}
        setAddNewClient={setAddNewClient}
      />
    </Grid>
  );
}

export default MainPage;
