import React, { useContext, useState } from "react";
import { Songs } from "../Context";
import "./style.css";
import Playing from "./Playing";
import { Col, Row } from "antd";
import { DownOutlined } from "@ant-design/icons";
import ListSongs from "./ListSongs";

const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item (disabled)
      </a>
    ),

    disabled: true,
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: "4",
    danger: true,
    label: "a danger item",
  },
];

// Tạo component ListSong
const ListSong = () => {
  // Logic của component ListSong ở đây
  return (
    <div style={{ position: "absolute" }}>
      <ListSongs />
    </div>
  );
};

export default function DetailSong() {
  const { song } = useContext(Songs);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State để kiểm soát trạng thái dropdown

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div className="wrapper">
        <div
          style={{ display: "flex", cursor: "pointer" }}
          onClick={toggleDropdown} // Gọi toggleDropdown khi click vào "Danh Sách Phát"
        >
          <DownOutlined style={{ color: "white" }} />
          <h2
            className="text-neutral-400 text-2xl h-16"
            style={{
              display: "inline-flex",
              alignItems: "center",
              marginLeft: "6px",
            }}
          >
            Danh Sách Phát
          </h2>
        </div>

        <div className="img-area">
          <img src={song.links.images[0].url} alt="" />
        </div>
        <Row style={{ margin: " 20px 0" }}>
          <Col span={6}>
            <img
              className="w-[60px] rounded-full"
              src={song.links.images[1].url}
              alt="avatar"
            />
          </Col>
          <Col span={18}>
            <h2 className="text-neutral-400 text-2xl h-16">{song.name}</h2>
            <span className="text-xl text-white">{song.author}</span>
          </Col>
        </Row>
        <Playing />
        <div style={{ position: "absolute", left: "0", top: "70px" }}>
          {isDropdownOpen && <ListSong />}{" "}
          {/* Hiển thị ListSong nếu dropdown mở */}
        </div>
      </div>
    </div>
  );
}
