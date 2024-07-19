import { Button, Col, Form, Image, Input, Row } from "antd";
import api from "../../config/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import AuthenLayout from "../../components/auth-layout";
import { useDispatch } from "react-redux";
import { login } from "../../redux/features/userSlice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (values) => {
    try {
      const reponse = await api.post("login", values);
      // chạy xuống đây => account này có tồn tại
      toast.success("Login success!");
      // chuyển đến trang chủ
      navigate("/");

      // lưu trữ thông tin của user
      // dispatch action
      dispatch(login(reponse.data));
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  // DRY => Don't repeat yourself

  return (
    <AuthenLayout>
      <Form
        labelCol={{
          span: 24,
        }}
        onFinish={handleLogin}
      >
        <Form.Item
          label="Phone"
          name="phone"
          rules={[
            {
              required: true,
              message: "Please input your phone!",
            },
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>

        <Button
          type="primary"
          htmlType="submit"
          style={{
            width: "100%",
          }}
        >
          Login
        </Button>
      </Form>
    </AuthenLayout>
  );
}

export default Login;
