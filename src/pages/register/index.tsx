import AuthenLayout from "../../components/auth-layout";
import { Button, Form, Input, Select } from "antd";
import api from "../../config/api";
import { toast } from "react-toastify";

function Register() {
  const handleRegister = async (values) => {
    try {
      await api.post("register", values);
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  return (
    <AuthenLayout>
      <Form
        name="userForm"
        onFinish={handleRegister}
        initialValues={{
          role: "ADMIN",
        }}
        layout="vertical"
      >
        <Form.Item
          name="phone"
          label="Phone"
          rules={[
            { required: true, message: "Please input your phone number!" },
          ]}
        >
          <Input placeholder="Phone number" />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item
          name="fullName"
          label="Full Name"
          rules={[{ required: true, message: "Please input your full name!" }]}
        >
          <Input placeholder="Full Name" />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "Please enter a valid email!" },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </AuthenLayout>
  );
}

export default Register;
