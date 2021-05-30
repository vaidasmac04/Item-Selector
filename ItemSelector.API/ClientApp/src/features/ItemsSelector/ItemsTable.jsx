import React from 'react';
import MultiTable from '../../components/table/MultiTable';
import Alert from '@material-ui/lab/Alert';
import { REQUEST_STATUS as STATUS } from '../../common/Constants';

const ItemsTable = ({items, status, error}) => {

  if (error) {
    return <Alert severity="error">{error}</Alert>
  }

  if (Object.keys(items).length === 0 && status === STATUS.success) {
    return <Alert severity="info">Sorry, no items found to show</Alert>;
  }

  const transformData = () => {
      const headers = Object.keys(items);

      let rows = [];
      headers.forEach((key) => {
        rows = [...rows, items[key]];
      });

      return { headers, rows };
  }

  if (status === STATUS.success) {
    const { headers, rows } = transformData();

    return (
      <MultiTable multiHeader={headers} multiRows={rows} />
    );
  }
  else {
    return null;
  }
}

export default ItemsTable;