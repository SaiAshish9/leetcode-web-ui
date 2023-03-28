import { Space, Tag } from "antd";
import { StyledTableContainer } from "./styles";
const columns = [
  {
    title: "Status",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Title",
    dataIndex: "age",
    key: "age",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Solution",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Acceptance",
    key: "tags",
    dataIndex: "tags",
    sorter: (a, b) => a.age - b.age,
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Difficulty",
    key: "action",
    sorter: (a, b) => a.age - b.age,
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
  {
    title: "Frequency",
    dataIndex: "address",
    key: "address",
  },
];
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
const TableContainer = () => (
  <StyledTableContainer columns={columns} dataSource={data} pagination={false}  />
);
export default TableContainer;
