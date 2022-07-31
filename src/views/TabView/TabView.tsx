import React from "react";
import {
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Tabs, TabList, Tab, TabPanel } from "../../components/";

// const Profile = () => <TabPanel>You're on the Profile asd Tab</TabPanel>;
// const Comments = () => <TabPanel>You're on the Comments Tab</TabPanel>;
// const Contact = () => <TabPanel>You're on the Contact Tab</TabPanel>;
// const NotFound = () => <TabPanel>Not Found</TabPanel>;

function TabView() {
  const navigate = useNavigate();
  const pathName = useLocation().pathname;
  console.log("pathName", pathName);
  const splitPathnames = useLocation()
    .pathname.split("/")
    .filter((e) => e);

  // console.log(
  //   "splitPathnames",
  //   splitPathnames,
  //   splitPathnames.length ? splitPathnames[0] : "potato",
  //   pathName
  // );
  return (
    <>
      TSET
      <Tabs id="carbTabs" defaultTab={pathName === "/" ? "potato" : pathName}>
        <TabList ariaLabel="carbTabList">
          <Tab
            id="potato"
            ariaControls="potatoTabPanel"
            onClick={() => navigate("../potato")}
          >
            Potato
          </Tab>
          <Tab
            id="noodle"
            ariaControls="noodleTabPanel"
            onClick={() => navigate("../noodle")}
          >
            Noodle
          </Tab>
        </TabList>
        <TabPanel id="potatoTabPanel" ariaLabelLedby="potato">
          <TabList ariaLabel="potatoTabList" ariaLabelLedby="potatoTabPanel">
            <Tab
              id="sweet"
              ariaControls="sweetPanel"
              onClick={() => navigate("../potato/sweet")}
            >
              sweet
            </Tab>
            <Tab
              id="purple"
              ariaControls="purplePanel"
              onClick={() => navigate("../potato/purple")}
            >
              purple
            </Tab>
          </TabList>
          <TabPanel id="sweetPanel" ariaLabelLedby="sweet">
            content for sweetPanel
          </TabPanel>
          <TabPanel id="purplePanel" ariaLabelLedby="purple">
            content for purplePanel
          </TabPanel>
        </TabPanel>
        <TabPanel id="noodleTabPanel" ariaLabelLedby="noodle">
          content for tab 2
        </TabPanel>
      </Tabs>
    </>
  );
}

function Layout() {
  const navigate = useNavigate();
  return (
    <>
      {/* <Tabs>
        <Tab navigationPath="../potato">Potato</Tab>
        <Tab navigationPath="../noodle">Noodle</Tab>
      </Tabs> */}
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Profile</Link>
          </li>
          <li>
            <Link to="/comments">Comments</Link>
          </li>
          <li>
            <Link to="/contact"> Contact</Link>
          </li>
        </ul>
      </nav> */}
      {/* <hr /> */}
      <Outlet />
    </>
  );
}

export default TabView;
