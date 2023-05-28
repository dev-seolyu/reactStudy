import React from "react";
export default function AppWrap() {
  return (
    <div>
      <Navbar>
        <Avatar
          image="https://avatars.githubusercontent.com/u/87252819?v=4"
          name="Bob"
          size={200}
        />
        <p>안녕하세요!</p>
      </Navbar>
      <Navbar>
        <Avatar
          image="https://avatars.githubusercontent.com/u/54212261?v=4"
          name="Lisa"
          size={200}
        />
        <p>Navbar를 원하는 곳에서 원하는 컨텐츠를 넣어서 만들 수 있음</p>
      </Navbar>
    </div>
  );
}

function Navbar({ children }) {
  return <header style={{ backgroundColor: "yellow" }}>{children}</header>;
}

function Avatar({ image, name, size }) {
  return (
    <div>
      <img
        src={image}
        alt={`${name}`}
        width={size}
        height={size}
        style={{ borderRadius: "50%" }}
      />
    </div>
  );
}
