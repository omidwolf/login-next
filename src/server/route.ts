"use server";

import { User } from "@/types/UserData";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function login(formData: FormData) {
  if (validate((formData.get("mobile") || "").toString())) {
    try {
      const data: User = await (
        await fetch("https://randomuser.me/api/?results=1&nat=us")
      ).json();
      console.log(data);
      (await cookies()).set(
        "user",
        JSON.stringify({
          name: data.results[0].name,
          email: data.results[0].email,
        }),
        {
          httpOnly: true,
          expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
        }
      );
    } catch (error) {
      console.log(error);
      return { error: "مشکلی در اتصال به سرور دارید" };
    }
    return redirect("/dashboard");
  }
  return { error: "شماره تلفن صحیح نیست" };
}

const validate = (phone: string): boolean => {
  return /^09\d{9}$/.test(phone);
};

export async function logout() {
  (await cookies()).delete("user");
  return redirect("/auth");
}
