import React from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import MultiTableItem from './MultiTableItem';


const MultiTable = ({ multiHeader, multiRows}) => {
  const getLengths = () => {
    const lengths = [];
    let start = 1;

    multiRows.forEach((row, i) => {
      lengths[i] = start;
      start += row.length;
    })

    return lengths;
  }

  const lengths = getLengths();

  return (
    <TableContainer component={Paper}>
      {multiHeader.map((v, i) => <MultiTableItem header={v} rows={multiRows[i]} start={lengths[i]}/>)}
    </TableContainer>
  );
}

export default MultiTable;