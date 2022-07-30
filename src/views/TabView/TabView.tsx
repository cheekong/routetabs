import React from "react";
import {
  BrowserRouter,
  Link,
  Outlet,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { Tabs } from "../../components/";
import { TabButton } from "../../components/TabButton";
import { TabContent } from "../../components/TabContent";

const Profile = () => <div>You're on the Profile asd Tab</div>;
const Comments = () => <div>You're on the Comments Tab</div>;
const Contact = () => <div>You're on the Contact Tab</div>;
const NotFound = () => <div>Not Found</div>;

const config = [
  { label: "bla", onClick: () => console.log("bla"), elements: <></> },
  { label: "bla2", onClick: () => console.log("bla2"), elements: <></> },
];

function TabView() {
  const navigate = useNavigate();
  return (
    <>
      TSET
      <Tabs>
        <TabButton navigationPath="../potato">Potato</TabButton>
        <TabButton navigationPath="../noodle">Noodle</TabButton>
      </Tabs>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={null} />
          <Route
            path="potato"
            element={
              <>
                <TabContent>
                  <Tabs>
                    <TabButton navigationPath="../potato/white">
                      White Potato
                    </TabButton>
                    <TabButton navigationPath="../potato/sweet">
                      Sweet Potato
                    </TabButton>
                    <TabButton navigationPath="../potato/purple">
                      Purple Potato
                    </TabButton>
                  </Tabs>
                </TabContent>
                <Outlet />
              </>
            }
          >
            <Route path="white" element={<div>white</div>} />
            <Route path="sweet" element={<div>sweet</div>} />
            <Route path="purple" element={<div>purple</div>} />
          </Route>
        </Route>
        <Route
          path="noodle"
          element={
            <>
              <TabContent>
                <Tabs>
                  <TabButton navigationPath="../noodle/egg">
                    Egg Noodle
                  </TabButton>
                  <TabButton navigationPath="../noodle/flat">
                    Flat Noodle
                  </TabButton>
                  <TabButton navigationPath="../noodle/vermicelli">
                    Vermicelli
                  </TabButton>
                </Tabs>
              </TabContent>
              <Outlet />
            </>
          }
        >
          <Route path="egg" element={<div>eggt</div>} />
          <Route path="flat" element={<div>flat</div>} />
          <Route path="vermicelli" element={<div>vermicelli</div>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

function Layout() {
  const navigate = useNavigate();
  return (
    <>
      <Tabs>
        <TabButton navigationPath="../potato">Potato</TabButton>
        <TabButton navigationPath="../noodle">Noodle</TabButton>
      </Tabs>
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
