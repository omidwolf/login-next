"use client";
import styles from "@/styles/auth.module.scss";
import login from "@/server/route";
import Input from "@/components/Input";
import { useState } from "react";
import Button from "@/components/Button";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);
    let data = await login(formData);
    if (data?.error) {
      setError(data.error);
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2>ورود</h2>
        <Input />

        {error && <p className="error">{error}</p>}

        <Button disabled={isLoading}>ورود</Button>
      </form>
      {isLoading && <span className="loader"></span>}
    </div>
  );
}
