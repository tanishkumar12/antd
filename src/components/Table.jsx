import { Table } from "antd";

const TableConatiner = ({ data, columns }) => {
  return <Table dataSource={data} columns={columns} />;
};

export default TableConatiner;
