"use client";
import { createContext } from "react";
export type Info =
  | {
      name: {
        title: string;
        first: string;
        last: string;
      };
      email: string;
    }
  | undefined;

export const AppContext = createContext({} as Info);
