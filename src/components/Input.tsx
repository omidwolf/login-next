"use client"
import { useState } from "react";

export default function Input() {
  const [phone, setPhone] = useState("");
  return (
    <input
      type="text"
      name="mobile"
      placeholder="شماره موبایل"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
    />
  );
}
