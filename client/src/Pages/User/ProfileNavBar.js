import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PhoneIcon from "@material-ui/icons/Phone";
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import HelpIcon from "@material-ui/icons/Help";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import UserData from "./UserData";
import CakeIcon from '@material-ui/icons/Cake';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import CreateEventsPage from "../Events/CreateEventsPage";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `scrollable-prevent-tab-${index}`,
    "aria-controls": `scrollable-prevent-tabpanel-${index}`
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.error
  }
}));

export default function ProfileNavBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="off"
          aria-label="scrollable prevent tabs example"
        >
          <Tab icon={<PersonPinIcon />} aria-label="person" {...a11yProps(0)} />
          <Tab icon={<CakeIcon/>} aria-label="cake" {...a11yProps(1)} />
          <Tab
            icon={<FavoriteIcon />}
            aria-label="favorite"
            {...a11yProps(2)}
          />          
          <Tab
            icon={<NoteAddIcon/>}
            aria-label="shopping"
            {...a11yProps(3)}
          />       
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <UserData></UserData>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>     
      <TabPanel value={value} index={3}>
        <CreateEventsPage></CreateEventsPage>
      </TabPanel>     
    </div>
  );
}
