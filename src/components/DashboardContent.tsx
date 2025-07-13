"use client";
import { AppContext } from "@/context/AppContext";
import { useContext } from "react";
import style from "@/styles/dashboard.module.scss";
function DashboardContent() {
  const user = useContext(AppContext);
  return (
    <h3 className={style.user}>
      سلام {user?.name.title} {user?.name.first} {user?.name.last} خوش آمدید.
    </h3>
  );
}

export default DashboardContent;
