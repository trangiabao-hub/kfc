import { useNavigate } from "react-router-dom";
import "./index.scss";
import { UserOutlined } from "@ant-design/icons";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://static.kfcvietnam.com.vn/images/web/kfc-logo.svg?v=5.0"
          alt="logo"
          className="header__logo"
          width={50}
        />

        <ul className="header__navigation">
          <li>Thực đơn</li>
          <li>Khuyến mãi</li>
          <li>Dịch vụ</li>
          <li>Hệ thống nhà hàng</li>
        </ul>
      </div>
      {/* space */}
      <div className="header__right">
        <div className="header__cart">
          <span className="number">0</span>
        </div>

        <div className="header__account">
          <UserOutlined
            size={100}
            className="icon"
            onClick={() => navigate("/login")}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
