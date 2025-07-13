"use client";
import { AppContext } from "@/context/AppContext";
import Link from "next/link";
import React, { useContext, useState } from "react";
import style from "@/styles/dashboard.module.scss";
import { logout } from "@/server/route";

function DashboardHeader() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    logout();
  };
  return (
    <div className={style.header}>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </nav>

      <div className={style.authAction}>
        {!isLoading && <button onClick={handleClick}>خروج</button>}
        {isLoading && <span className="loader"></span>}
        <a href="#">Icon</a>
      </div>
    </div>
  );
}

export default DashboardHeader;
