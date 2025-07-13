import React from "react";
import styles from "@/styles/dashboard.module.scss";
import DashboardContent from "@/components/DashboardContent";

function page() {
  return (
    <div className={styles.container}>
      <DashboardContent />
    </div>
  );
}

export default page;
