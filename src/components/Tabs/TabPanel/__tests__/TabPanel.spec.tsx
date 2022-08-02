import { TabPanel, TabPanelProps } from "../";
import { render, screen } from "@testing-library/react";
import { TabsContext } from "../../Tabs";

interface RenderProps extends TabPanelProps {
  selectedTab: string;
  setSelectedTab: () => void;
}

const renderComponent = ({
  selectedTab,
  setSelectedTab,
  children,
  ...tabPanelProps
}: RenderProps) => {
  return render(
    <TabsContext.Provider value={{ selectedTab, setSelectedTab }}>
      <TabPanel {...tabPanelProps}>{children}</TabPanel>
    </TabsContext.Provider>
  );
};

describe("TabPanel", () => {
  it("returns tab panel elements if selected", () => {
    renderComponent({
      id: "testTab",
      children: <p>test value</p>,
      ariaLabelLedby: "testLedBy",
      selectedTab: "testLedBy",
      setSelectedTab: jest.fn(),
    });

    const element = screen.getByTestId("testTab");
    expect(screen.getByText("test value")).toBeTruthy();
    expect(element).toHaveAttribute("role", "tabpanel");
    expect(element).toHaveAttribute("aria-labelledby", "testLedBy");
    expect(element).toHaveAttribute("tabIndex", "0");
  });

  it("returns null if not selected", () => {
    renderComponent({
      id: "testTab",
      children: <p>test value</p>,
      ariaLabelLedby: "testLedBy",
      selectedTab: "notTestLedBy",
      setSelectedTab: jest.fn(),
    });

    expect(screen.queryByTestId("testTab")).toBeFalsy();
  });
});
