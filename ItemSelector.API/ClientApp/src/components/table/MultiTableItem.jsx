import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PropTypes from 'prop-types';
import { makeStyles } from "@material-ui/core/styles";
import COLUMNS from './MultiTableItemColumns';
import { capitalizeFirstLetter } from '../../utils/helpers';

const useStyles = makeStyles(() => ({
  headerRow: {
    backgroundColor: "#f5f5f5",
  },
}));

const MultiTableItem = ({ header, rows, start }) => {
  const classes = useStyles();
  const colSpan = (rows.length !== 0 ? Object.keys(rows[0]).length : 1);

  return (
      <Table aria-label="simple table">
        <TableHead>
          <TableRow className={classes.headerRow} >
            <TableCell colSpan={colSpan} >{capitalizeFirstLetter(header)}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={row.name}>
              <TableCell style={{ width: "10px" }}>
                {start + i}.
              </TableCell>
              {COLUMNS.map((column) => {
                  const value = row[column.id];
                  return (
                    <TableCell key={column.id} align={column.align} style={{ display: column.display }}>
                      {value}
                    </TableCell>
                  );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
  );
}

MultiTableItem.defaultProps = {
  start: 1,
}

MultiTableItem.propTypes = {
  header: PropTypes.string.isRequired,
  rows: PropTypes.array.isRequired,
  start: PropTypes.number,
}

export default MultiTableItem;