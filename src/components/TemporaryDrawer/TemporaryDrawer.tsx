import { useState, FC } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import HomeIcon from "@mui/icons-material/Home";
// import ListAltIcon from '@mui/icons-material/ListAlt';
import Link from "next/link";

type Anchor = "left";

export const TemporaryDrawer: FC = () => {
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <div
      className={`w-64`}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>
            <Link href="/">ホーム</Link>
          </ListItemText>
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <MenuBookIcon />
          </ListItemIcon>
          <ListItemText>
            <Link href="/catalog">WEBカタログ</Link>
          </ListItemText>
        </ListItem>

        {/* <ListItem>
          <ListItemIcon>
            <ListAltIcon />
          </ListItemIcon>
          <ListItemText>
          <a href="https://stock-next.vercel.app/login" target="_blank" rel="noopener noreferrer">在庫照会</a>
          </ListItemText>
        </ListItem> */}

        <ListItem>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText>
            <Link href="/contact">お問い合わせ</Link>
          </ListItemText>
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  return (
    <>
      <Button
        className="text-black"
        onClick={toggleDrawer("left", true)}
        aria-label="drawer menu"
      >
        <MenuIcon />
      </Button>
      <Drawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
    </>
  );
};
