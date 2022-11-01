import { Logout } from "@mui/icons-material";

import { signOut } from "next-auth/react";

type RouteItems = {
  title: string;
  path?: string;
  icon: typeof Logout;
  action?: () => void;
};

const routes: RouteItems[] = [
  {
    title: "Logout",
    action: () => signOut(),
    icon: Logout,
  },
];

export default routes;
