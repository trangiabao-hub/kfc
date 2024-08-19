import React from "react";
import ManageTemplate from "../../../components/ManageDashboard";
import { Form, Input, InputNumber } from "antd";

function ManageProduct() {
  const title = "product";
  const columns = [
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Description", dataIndex: "description", key: "description" },
    { title: "Price", dataIndex: "price", key: "price" },
    { title: "Image", dataIndex: "image", key: "image" },
  ];

  const formItems = (
    <>
      <Form.Item
        name="name"
        label="Name"
        rules={[
          {
            required: true,
            message: "Please input category name!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="description" label="Description">
        <Input.TextArea />
      </Form.Item>
      <Form.Item name="price" label="Price">
        <InputNumber />
      </Form.Item>
    </>
  );

  return (
    <div>
      <ManageTemplate
        title={title}
        columns={columns}
        formItems={formItems}
        apiURI="product"
      />
    </div>
  );
}

export default ManageProduct;
