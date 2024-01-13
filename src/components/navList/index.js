import { List, ListItem, ListItemIcon, ListItemText, Tooltip } from "@mui/material";
import {
  Dashboard,
  AccountTree,
  Task,
  Folder,
  CalendarMonth,
  Groups,
  Collections,
  QuestionAnswer,
  Email,
} from "@mui/icons-material";

import { Link } from "react-router-dom";

const NavList = () => {
  const navList = [
    { id: 0, name: "Dashboard", icon: <Dashboard />, route: "/" },
    { id: 1, name: "Projects", icon: <AccountTree />, route: "/" },
    { id: 2, name: "Tasks", icon: <Task />, route: "/" },
    { id: 3, name: "File & Folders", icon: <Folder />, route: "/" },
    { id: 4, name: "Calendar", icon: <CalendarMonth />, route: "/" },
    { id: 5, name: "Teams", icon: <Groups />, route: "/" },
    { id: 6, name: "Wall", icon: <Collections />, route: "/" },
    { id: 7, name: "Chat", icon: <QuestionAnswer />, route: "/" },
    { id: 8, name: "Mail", icon: <Email />, route: "/" },
  ];

  return (
    <List>
      {navList.map((list) => (
        <Tooltip title={list.name} key={list.id} placement="right">
          <ListItem button>
            <Link
              to={`${list.route}`}
              style={{
                textDecoration: "none",
                display: "flex",
                color: "inherit",
              }}
            >
              <ListItemIcon style={{ alignItems: "center" }}>{list.icon}</ListItemIcon>
              <ListItemText primary={list.name} />
            </Link>
          </ListItem>
        </Tooltip>
      ))}
    </List>
  );
};

export default NavList;
