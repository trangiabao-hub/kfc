import { Button, Col, Form, Image, Input, Row } from "antd";

function Login() {
  return (
    <div>
      <Row align={"middle"} gutter={30}>
        <Col span={12}>
          <Image src="https://static.kfcvietnam.com.vn/images/web/signin/lg/signin.jpg?v=LW5XYg" />
        </Col>
        <Col span={12}>
          <Form
            labelCol={{
              span: 24,
            }}
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
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
        </Col>
      </Row>
    </div>
  );
}

export default Login;
