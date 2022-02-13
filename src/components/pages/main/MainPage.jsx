import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
import { green } from '@mui/material/colors';
import Tooltip from '@mui/material/Tooltip';
import {
  getClientByFlatsIdTc, updateClientDataTc, addClientDataTc, deleteClientListTc,
} from '../../../redux/thuncks/clientThuncks';
import {
  getStreetsListTc, getHouseTc, getFlatsTc, deleteSelectedHouseTc, deleteSelectedFlatsTc,
  deleteSelectedStreetTc,
} from '../../../redux/thuncks/mainThuncks';
import {
  getstreetsList, getLoadingStretsListStatus, getStreetstreetInputOption,
  getHouseList, getLoadingHouseListStatus, getHouseInputOption, getFlatsList,
  getLoadingFlatsListStatus, getFlatsInputOption,
  getSelectedHouse, getSelectedStreet, getSelectedFlat,
} from '../../../selectors';
import CustomField from '../../pageComponents/customField/CustomField';
import Clients from '../clients/Clients';
import ClientModalInfo from '../clients/ClientModalInfo';

function MainPage() {
  const [open, setOpen] = React.useState(false);
  const [editedItem, seteditedItem] = React.useState(null);

  const dispatch = useDispatch();

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

  const getData = () => {
    dispatch(getStreetsListTc());
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

  const deleteselectedValue = (fildName) => {
    switch (fildName) {
      case 'street':
        dispatch(deleteSelectedStreetTc());
        dispatch(deleteClientListTc());
        break;
      case 'house':
        dispatch(deleteSelectedHouseTc());
        dispatch(deleteClientListTc());
        break;
      case 'flats':
        dispatch(deleteSelectedFlatsTc());
        dispatch(deleteClientListTc());
        break;
      default:
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const setChengetData = (data) => {
    dispatch(updateClientDataTc(data, selectedFlat));
    setOpen(false);
  };

  const setAddNewClient = (data) => {
    dispatch(addClientDataTc(data, selectedFlat));
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
          <CustomField label="Улица" list={streetsList} status={isStreatListStatus} options={streetOptions} seteditedItem={seteditedItem} getData={getData} addSelectedValue={setData} deleteselectedValue={deleteselectedValue} />
          <CustomField label="Дом" list={houseList} status={isHouseListStatus} options={houseOptions} seteditedItem={seteditedItem} addSelectedValue={setData} deleteselectedValue={deleteselectedValue} />
          <CustomField label="Квартира" list={flatsList} status={isFlatsListStatus} options={flatsOptions} seteditedItem={seteditedItem} addSelectedValue={setData} deleteselectedValue={deleteselectedValue} />
        </Grid>
        <Grid item>
          <Grid>
            {`${street}  ${house}  ${flat}`}
          </Grid>
          <Grid container justifyContent="flex-end">
            <Tooltip title="Добавить жильца">
              <span>
                <IconButton
                  disabled={!flat.length}
                  sx={{ color: green[500] }}
                  onClick={() => {
                    seteditedItem(null);
                    setOpen(true);
                  }}
                >
                  <AddIcon />
                </IconButton>
              </span>
            </Tooltip>
          </Grid>
        </Grid>
      </Grid>
      <Clients setOpen={setOpen} seteditedItem={seteditedItem} />
      <ClientModalInfo
        open={open}
        handleClose={handleClose}
        seteditedItem={seteditedItem}
        editedItem={editedItem}
        setChengetData={setChengetData}
        setAddNewClient={setAddNewClient}
      />
    </Grid>
  );
}

export default memo(MainPage);
