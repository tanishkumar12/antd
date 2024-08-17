import { useEffect, useState } from "react";
import Table from "../components/Table";
import React from "react";
import { getInititialData } from "../utils/api";

const Homepage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true);
    const tempData = await getInititialData();
    if (tempData) setData(tempData);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: " id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "UserName",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
  ];

  return (
    <>
      {loading ? (
        <p>content is loading </p>
      ) : data?.length > 0 ? (
        <Table data={data} columns={columns} />
      ) : (
        <p>No data</p>
      )}
    </>
  );
};

export default Homepage;
