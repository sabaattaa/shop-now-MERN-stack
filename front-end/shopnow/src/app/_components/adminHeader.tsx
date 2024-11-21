"use client";
import React, { useState } from "react";
import woment from "../media/1.jpg";
import Image from "next/image";
const AdminHeader = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="d-flex p-1 b-gray justify-content-end align-items-center">
      <Image
        src={woment}
        height={50}
        width={50}
        className="rounded-5"
        style={{ objectFit: "cover" }}
        alt="Admin Avatar"
      />
      <span className="ps-2">Saba Admin</span>
      <i
        className="ps-2"
        style={{
          transform: "rotate(450deg)",
          fontSize: "20px",
          fontWeight: "600",
          cursor: "pointer",
        }}
        onClick={() => {
          setActive(!active);
        }}
      >
        {">"}
      </i>
      {active && (
        <div className="dropdeown">
          <span className="" style={{ fontWeight: "400", cursor: "pointer" }}>
            Profile
          </span>
          <hr className="p-0 m-1" />
          <span className="" style={{ fontWeight: "400", cursor: "pointer" }}>
            Sign Out
          </span>
        </div>
      )}
    </div>
  );
};

export default AdminHeader;
