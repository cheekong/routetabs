import { Tab, TabList, TabPanel, Tabs, TabsProps } from "../";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

const renderComponent = ({ children, id, defaultTab }: TabsProps) => {
  return render(
    <Tabs id={id} defaultTab={defaultTab}>
      {children}
    </Tabs>
  );
};

describe("TabList", () => {
  it("renders tab buttons correctly, have expected arial attributes and able to use keyboard to navigate tabs", async () => {
    const { container } = renderComponent({
      id: "carbTab",
      defaultTab: "/potato",
      children: (
        <>
          <TabList ariaLabel="carbTabList">
            <Tab id="potato" ariaControls="potatoTabPanel" onClick={() => null}>
              Potato
            </Tab>
            <Tab id="noodle" ariaControls="noodleTabPanel" onClick={() => null}>
              Noodle
            </Tab>
            <TabPanel id="potatoTabPanel" ariaLabelLedby="potato">
              more potatoes to come
            </TabPanel>
            <TabPanel id="noodleTabPanel" ariaLabelLedby="noodle">
              more noodles to come
            </TabPanel>
          </TabList>
        </>
      ),
    });

    const tabListElement = screen.getByTestId("carbTabList");
    const tabOneElement = screen.getByTestId("potato");
    const tabTwoElement = screen.getByTestId("noodle");

    expect(tabOneElement).toBeTruthy();
    expect(tabTwoElement).toBeTruthy();
    expect(tabListElement).toBeTruthy();

    userEvent.click(tabTwoElement);
    expect(screen.getByTestId("noodleTabPanel")).toBeInTheDocument();

    userEvent.click(tabOneElement);
    expect(screen.getByTestId("potatoTabPanel")).toBeTruthy();

    // test for accessbility
    userEvent.keyboard("[ArrowRight]");
    expect(tabTwoElement).toHaveFocus();
    userEvent.keyboard("[Enter]");
    expect(screen.getByTestId("noodleTabPanel")).toBeInTheDocument();

    userEvent.keyboard("[ArrowLeft]");
    expect(tabOneElement).toHaveFocus();
    userEvent.keyboard("[Space]");
    expect(screen.getByTestId("potatoTabPanel")).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
