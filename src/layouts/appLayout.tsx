"use client";
import { AppContext, Info } from "@/context/AppContext";

function AppLayout({
  children,
  user,
}: {
  children: React.ReactNode;
  user: Info;
}) {
  return <AppContext.Provider value={user}>{children}</AppContext.Provider>;
}
export default AppLayout;
