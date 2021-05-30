import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import { capitalizeFirstLetter } from "../../utils/helpers";
import { REQUEST_STATUS as STATUS } from "../../common/Constants";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    width: "100%",
  },
  button: {
    backgroundColor: "#f5f5f5",
    color: "black",
  }
}));

const weathers = [
  { value: "warm weather", text: "It's going to be warm" },
  { value: "cold weather", text: "It's going to be cold" },
];
const durations = [
  { value: true, text: "One day or less" },
  { value: false, text: "More than one day" },
];

const TripForm = ({ submit, status, setParams }) => {
  const classes = useStyles();
  const [options, setOptions] = useState({
    season: weathers[0].value,
    distance: "10",
    isOneDay: durations[0].value,
  });
  const [optionsErrors, setOptionsErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validateDistance(options.distance)) {
      setParams(options);
      submit(STATUS.start);
    }
  };

  const handleSeasonChange = (e) => {
    setOptions({ ...options, season: e.target.value });
  };

  const handleDistanceChange = (e) => {
    setOptions({ ...options, distance: e.target.value });
    validateDistance(e.target.value);
  };

  const validateDistance = (distance) => {
    if (distance === "") {
      setOptionsErrors("The distance is required");
      return false;
    } else {
      const value = parseFloat(distance.replace(",", ".")).toFixed(2);
      if (!value) {
        setOptionsErrors("The distance must be a number");
        return false;
      } else if (value <= 0) {
        setOptionsErrors("The distance must be more than 0");
        return false;
      }
      
      setOptionsErrors("");
      return true;
    }
  }

  const handleDurationChange = (e) => {
    setOptions({ ...options, isOneDay: e.target.value });
  };

  return (
    <div>
      {status === STATUS.loading ? <LinearProgress /> : null}
      <form className={classes.form} onSubmit={handleSubmit}>
        <FormControl className={classes.formControl}>
          <InputLabel shrink id="season-label">
            Season
          </InputLabel>
          <Select
            labelId="season-label"
            id="season-select"
            value={options.season}
            onChange={handleSeasonChange}
          >
            {weathers.map((w) => (
              <MenuItem value={w.value}>{capitalizeFirstLetter(w.text)}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel shrink id="distance-label">
            Distance (km)
          </InputLabel>
          <TextField
            error={optionsErrors}
            labelId="distance-label"
            id="distance-textfield"
            type="number"
            value={options.distance}
            helperText={optionsErrors && optionsErrors}
            onChange={handleDistanceChange}
            style={{ marginTop: "15px" }}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel shrink id="duration-label">
            Duration
          </InputLabel>
          <Select
            labelId="duration-label"
            id="duration-select"
            value={options.isOneDay}
            onChange={handleDurationChange}
          >
            {durations.map((d) => (
              <MenuItem value={d.value}>{d.text}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <Button
            className={classes.button}
            variant="contained"
            type="submit"
            disabled={status === STATUS.loading || optionsErrors}
          >
            Get!
          </Button>
        </FormControl>
      </form>
    </div>
  );
};

export default TripForm;
