import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  ButtonGroup,
  Paper,
  Avatar,
  Button,
} from "@mui/material";
import {
  Menu,
  Search,
  HelpOutline,
  SettingsOutlined,
  AppsOutlined,
  KeyboardArrowDown,
  Add,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import styles from "styled-components";
import MenuItem from "@mui/material/MenuItem";

const Header = styled(AppBar)`
  z-index: 1201;
  background: #fff;
  height: 70px;
  box-shadow: inset 0 -1px 0 0 #dadce0;
`;

const Heading = styled(Typography)`
  color: #5f6368;
  font-size: 24px;
  margin-left: 25px;
`;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const HeaderBar = ({ open, handleDrawer }) => {
  const logo =
    "https://seeklogo.com/images/G/google-keep-logo-0BC92EBBBD-seeklogo.com.png";

  const [anchorEl, setAnchorEl] = React.useState(null);
  const opened = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Header open={open}>
      <Toolbar>
        <IconButton
          onClick={() => handleDrawer()}
          sx={{ marginRight: "20px" }}
          edge="start"
        >
          <Menu />
        </IconButton>
        {/* <img src={logo} alt="logo" style={{ width: 30 }} /> */}
        <Heading style={{ color: "blue" }}>Docs</Heading>
        {/* <InputContainer>
          <SearchContainer>
            <ButtonGroup>
              <Search />
            </ButtonGroup>
            <input type="text" placeholder="Search" />
          </SearchContainer>
        </InputContainer>
        <RightContainer>
          <LeftSection>
            <IconButton>
              <HelpOutline />
            </IconButton>
            <IconButton>
              <SettingsOutlined />
            </IconButton>
          </LeftSection>
          <RightSection>
            <IconButton>
              <AppsOutlined />
            </IconButton>
            <IconButton>
              <Add />
            </IconButton>
            <IconButton>
              <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
            </IconButton>
          </RightSection>
        </RightContainer> */}
      </Toolbar>
    </Header>
  );
};

export default HeaderBar;

// const RightContainer = styles.div`
//   display: flex;
//   align-items: center;
// `;

// const RightSection = styles.div`
//   display: flex;
//   align-items: center;
//   svg {
//     color: #5f6368;
//     padding: 5px;
//     cursor: pointer;
//     border-radius: 50%;
//     transition: all 200ms ease-out;
//     // :hover {
//     //   background-color: rgba(0, 0, 0, 0.09);
//     // }
//   }

// `;

// const LeftSection = styles(RightSection)`
//   margin-right: 20px;
//   svg {
//     color: #5f6368;
//     padding: 5px;
//     cursor: pointer;
//     border-radius: 50%;
//     transition: all 200ms ease-out;
//   }
// `;

// const InputContainer = styles.div`
//   flex: 1;
// `;

// const SearchContainer = styles.div`
//   width: 64%;
//   height: 50px;
//   margin: 0 auto;
//   display: flex;
//   align-items: center;
//   background-color: rgba(0, 0, 0, 0.09);
//   border-radius: 8px;
//   box-shadow: 0 1px 2px 0 rgb(0 0 0 /0.05);
//   svg {
//     margin-left: 10px;
//     color: #5f6368;
//   }
//   input {
//     font-size: 16px;
//     width: 90%;
//     height: 80%;
//     font-family: Sans, Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
//     margin: 0 auto;
//     background-color: transparent;
//     :focus {
//       outline: none;
//     }
//     border: none;
//   }
// `;
