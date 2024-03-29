import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";

import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import AddIcon from '@mui/icons-material/Add';
import ManOutlinedIcon from '@mui/icons-material/ManOutlined';
import RequestQuoteOutlinedIcon from '@mui/icons-material/RequestQuoteOutlined';
import ReceiptLongRoundedIcon from '@mui/icons-material/ReceiptLongRounded';
import InsertDriveFileRoundedIcon from '@mui/icons-material/InsertDriveFileRounded';

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Rolex</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">Quản Lý sản phẩm</p>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Sản Phẩm Chi Tiết</span>
            </li>
          </Link>
          <Link to="/nsx" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Nhà sản xuất</span>
            </li>
          </Link>
          <Link to="/mau-sac/" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Màu sắc</span>
            </li>
          </Link>
          <Link to="/loai" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Loại</span>
            </li>
          </Link>
          <Link to="/man-hinh" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Màn hình</span>
            </li>
          </Link>
          <Link to="/day-deo" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Dây đeo</span>
            </li>
          </Link>
          <Link to="/new/" style={{ textDecoration: "none" }}>
            <li>
              <AddIcon className="icon" />
              <span>khách hàng</span>
            </li>
          </Link>
          <Link to="/hdct/hien-thi/" style={{ textDecoration: "none" }}>
            <li>
              <ReceiptLongRoundedIcon className="icon" />
              <span>Hóa Đơn Chi Tiết</span>
            </li>
          </Link>
          <Link to="/hoa-don/hien-thi/" style={{ textDecoration: "none" }}>
            <li>
              <InsertDriveFileRoundedIcon className="icon" />
              <span>Hóa Đơn</span>
            </li>
          </Link>
          <Link to="/voucher/new/" style={{ textDecoration: "none" }}>
            <li>
              < RequestQuoteOutlinedIcon className="icon" />
              <span>Voucher</span>
            </li>
          </Link>
          <Link to="/voucherct/new/" style={{ textDecoration: "none" }}>
            <li>
              < RequestQuoteOutlinedIcon className="icon" />
              <span>VoucherCT</span>
            </li>
            

          </Link>

          <Link to="/nhan-vien/new/" style={{ textDecoration: "none" }}>
            <li>
              <ManOutlinedIcon className="icon" />
              <span>Nhân Viên</span>
            </li>
          </Link>

          <Link to="/properties" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Thuộc tính</span>
            </li>
          </Link>
          <li>
            <CreditCardIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
