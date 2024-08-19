import React from "react";
import ManageTemplate, { Column } from "../../../components/ManageDashboard";
import { DatePicker, Form, Input, InputNumber } from "antd";
import dayjs from "dayjs";
import { formatDistanceToNow } from "date-fns";

function ManageVoucher() {
  const title = "voucher";
  const columns: Column[] = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    { title: "Code", dataIndex: "code", key: "code" },
    {
      title: "Start At",
      dataIndex: "startAt",
      key: "startAt",
      render: (startAt) => {
        return dayjs(startAt).format("DD/MM/YYYY HH:mm");
      },
    },
    {
      title: "End At",
      dataIndex: "endAt",
      key: "endAt",
      render: (startAt) => {
        return dayjs(startAt).format("DD/MM/YYYY HH:mm");
      },
    },
    {
      title: "Create At",
      dataIndex: "createAt",
      key: "createAt",
      render: (createAt) => {
        return formatDistanceToNow(new Date(createAt), { addSuffix: true });
      },
    },
    { title: "Value", dataIndex: "value", key: "value" },
  ];

  const formItems = (
    <>
      <Form.Item
        label="Code"
        name="code"
        rules={[{ required: true, message: "Please input the code!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Start At"
        name="startAt"
        rules={[{ required: true, message: "Please select the start time!" }]}
      >
        <DatePicker showTime />
      </Form.Item>

      <Form.Item
        label="End At"
        name="endAt"
        rules={[{ required: true, message: "Please select the end time!" }]}
      >
        <DatePicker showTime />
      </Form.Item>

      <Form.Item
        label="Value"
        name="value"
        rules={[{ required: true, message: "Please input the value!" }]}
      >
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
        apiURI="voucher"
      />
    </div>
  );
}

export default ManageVoucher;
