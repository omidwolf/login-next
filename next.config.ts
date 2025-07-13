import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: `$background: #252525;$darkInput: #363636;$textColor: white;`,
  },
};

export default nextConfig;
