import { TabList, TabListProps } from "../";
import { render, screen } from "@testing-library/react";
import { TabsContext } from "../../Tabs";
import { Tab } from "../../Tab/Tab";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

interface RenderProps extends TabListProps {
  selectedTab: string;
  setSelectedTab: () => void;
}

const renderComponent = ({
  selectedTab,
  setSelectedTab,
  children,
  ...tabListProps
}: RenderProps) => {
  return render(
    <BrowserRouter>
      <TabsContext.Provider value={{ selectedTab, setSelectedTab }}>
        <TabList {...tabListProps}>{children}</TabList>
      </TabsContext.Provider>
    </BrowserRouter>
  );
};

describe("TabList", () => {
  it("renders tab buttons correctly, have expected arial attributes and able to use keyboard to navigate tabs", () => {
    const { container } = renderComponent({
      ariaLabel: "testTabList",
      ariaLabelLedby: "testLedBy",
      children: (
        <>
          <Tab id="potato" ariaControls="potatoTabPanel" path="/potato">
            Potato
          </Tab>
          <Tab id="noodle" ariaControls="noodleTabPanel" path="/noodle">
            Noodle
          </Tab>
        </>
      ),
      selectedTab: "potato",
      setSelectedTab: () => null,
    });

    const tabListElement = screen.getByTestId("testTabList");
    const tabOneElement = screen.getByTestId("potato");
    const tabTwoElement = screen.getByTestId("noodle");

    expect(container).toMatchSnapshot();
    expect(tabOneElement).toBeTruthy();
    expect(tabTwoElement).toBeTruthy();
    expect(tabListElement).toHaveAttribute("role", "tablist");
    expect(tabListElement).toHaveAttribute("aria-label", "testTabList");
    expect(tabListElement).toHaveAttribute("aria-labelledby", "testLedBy");
    expect(tabListElement).toHaveAttribute("role", "tablist");

    // test for accessbility
    userEvent.tab();
    expect(tabOneElement).toHaveFocus();

    userEvent.keyboard("[ArrowRight]");
    expect(tabTwoElement).toHaveFocus();

    userEvent.keyboard("[ArrowLeft]");
    expect(tabOneElement).toHaveFocus();

    userEvent.keyboard("[Home]");
    expect(tabOneElement).toHaveFocus();

    userEvent.keyboard("[End]");
    expect(tabTwoElement).toHaveFocus();
  });
});
