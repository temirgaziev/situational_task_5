// src/Header.js

import React from 'react';
import { Layout, Menu, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import './header.scss';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const InnovatechHeader = () => {
  return (
    <Header className="header">
      <div className="logo">
        <img
          src="https://techwave.net/wp-content/uploads/2021/12/cropped-cropped-cropped-Techwave.png"
          alt="Innovatech Logo"
        />
      </div>
      <Menu mode="horizontal" className="menu">
        <Menu.Item key="home">
          <Link to="/home">Home</Link>
        </Menu.Item>
        <Menu.Item key="product">
          <Link to="/product-detail">Product</Link>
        </Menu.Item>
        <Menu.Item key="news">
          <Link to="/news">News</Link>
        </Menu.Item>
        <Menu.Item key="contact">
          <Link to="/contact">Contact</Link>
        </Menu.Item>
      </Menu>
      <Link to="/product-detail">
        <Button type="primary" className="pre-order-button">
          Pre-order
        </Button>
      </Link>
      <MenuOutlined className="mobile-menu-icon" />
    </Header>
  );
};

export default InnovatechHeader;
