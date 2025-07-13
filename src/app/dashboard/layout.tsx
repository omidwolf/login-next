import DashboardHeader from "@/components/DashboardHeader";
import React from "react";
import style from "@/styles/dashboard.module.scss";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={style.body}>
      <DashboardHeader />
      {children}
    </div>
  );
}

export default Layout;
