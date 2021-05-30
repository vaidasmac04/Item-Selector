import React, { useState, useEffect } from "react";
import { getItems } from '../../api/ItemService';
import TripForm from './TripForm';
import ItemsTable from './ItemsTable';
import { REQUEST_STATUS as STATUS } from '../../common/Constants';

const ItemsSelecotr = () => {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState(STATUS.idle);
  const [params, setParams] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (status === STATUS.start) {
      handleGetItems(params);
    }
  }, [status, params]);

  const handleGetItems = (params) => {
    setStatus(STATUS.loading);

    getItems(params)
      .then((response) => {
        setStatus(STATUS.success);
        setItems(response.data.items);
      })
      .catch(() => {
        setStatus(STATUS.failed);
        setError("Something went wrong. Try again later");
      });
  };

  return (
    <>
      <TripForm submit={setStatus} status={status} setParams={setParams} />
      <div style={{ marginTop: "25px", marginLeft: "2ch" }}>
        <ItemsTable items={items} status={status} error={error} />
      </div>
    </>
  );
};

export default ItemsSelecotr;
