import { Inbox } from "@mui/icons-material";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import routes from "../../constants/routes";

type NavDrawerProps = {
  open: boolean;
};

export default function NavDrawer({ open }: NavDrawerProps) {
  const router = useRouter();
  const handleClick = (route: string) => {
    router.push(route);
  };

  return (
    <Drawer variant="persistent" anchor="left" open={open}>
      <Box>
        <List>
          {routes.map((item) => (
            <ListItem key={item.title}>
              <ListItemButton
                onClick={
                  !item.action
                    ? () => handleClick(item?.path || "/")
                    : item.action
                }
              >
                <ListItemIcon>{<item.icon />}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
