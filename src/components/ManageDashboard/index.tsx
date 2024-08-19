import { Button, Form, Input, Modal, Popconfirm, Table } from "antd";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "antd/es/form/Form";
import api from "../../config/axios";

export interface Column {
  title: string;
  dataIndex: string;
  key: string;
  render?: (value: any) => any;
}

interface ManageTemplateProps {
  title: string;
  columns: Column[];
  formItems: React.ReactElement;
  apiURI: string;
}

function ManageTemplate({
  columns,
  title,
  formItems,
  apiURI,
}: ManageTemplateProps) {
  // table
  // columns
  // dataSource
  const [categories, setCategories] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [form] = useForm();
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  const fetchCategory = async () => {
    try {
      const response = await api.get(apiURI);
      setCategories(response.data);
      setFetching(false);
    } catch (err) {
      toast.error(`Error fetching ${title}`);
    }
  };

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      if (values.id) {
        await api.put(`${apiURI}/${values.id}`, values);
      } else {
        await api.post(apiURI, values);
      }
      setLoading(false);
      toast.success("Successfully created category");
      fetchCategory();
      setShowModal(false);
      form.resetFields();
    } catch (err) {
      toast.error("Error creating category");
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await api.delete(`category/${id}`); // '/category/2'
      toast.success("Successfully deleted category");
      fetchCategory();
    } catch (err) {
      toast.error("Error deleting category");
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <div>
      <Button
        onClick={() => {
          form.resetFields();
          setShowModal(true);
        }}
      >
        Create new {title}
      </Button>
      <Table loading={fetching} columns={columns} dataSource={categories} />
      <Modal
        open={showModal}
        footer={[
          <Button key="back" onClick={() => setShowModal(false)}>
            Cancel
          </Button>,
          <Button
            type="primary"
            onClick={() => form.submit()}
            loading={loading}
          >
            Create
          </Button>,
        ]}
      >
        <Form
          labelCol={{
            span: 24,
          }}
          form={form}
          onFinish={handleSubmit}
        >
          <Form.Item name="id" label="id" hidden>
            <Input />
          </Form.Item>

          {formItems}
        </Form>
      </Modal>
    </div>
  );
}

export default ManageTemplate;
