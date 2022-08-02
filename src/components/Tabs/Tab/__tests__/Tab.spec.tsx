import { Tab, TabProps } from "../";
import { render, screen, fireEvent } from "@testing-library/react";
import { TabsContext } from "../../Tabs";

interface RenderProps extends TabProps {
  selectedTab: string;
  setSelectedTab: () => void;
}

const renderComponent = ({
  selectedTab,
  setSelectedTab,
  ...tabProps
}: RenderProps) => {
  return render(
    <TabsContext.Provider value={{ selectedTab, setSelectedTab }}>
      <Tab {...tabProps} />
    </TabsContext.Provider>
  );
};

describe("Tab", () => {
  it("is selected and correctly fires events, contains aria properties and correctly nests child", () => {
    const mockFn = jest.fn();
    const setContextMockFn = jest.fn();
    renderComponent({
      id: "testTab",
      children: <p>test value</p>,
      onClick: mockFn,
      ariaControls: "testControl",
      selectedTab: "testTab",
      setSelectedTab: setContextMockFn,
    });

    const element = screen.getByTestId("testTab");
    fireEvent.click(element);

    expect(screen.getByText("test value")).toBeTruthy();
    expect(mockFn).toBeCalledTimes(1);
    expect(setContextMockFn).toBeCalledTimes(1);
    expect(element).toHaveAttribute("role", "tab");
    expect(element).toHaveAttribute("aria-selected", "true");
    expect(element).toHaveAttribute("aria-controls", "testControl");
    expect(element).toHaveAttribute("tabIndex", "0");
  });

  it("is not selected and arial selected is false with tabIndex out of order", () => {
    const mockFn = jest.fn();
    const setContextMockFn = jest.fn();
    renderComponent({
      id: "testTab",
      children: <p>test value</p>,
      onClick: mockFn,
      ariaControls: "testControl",
      selectedTab: "notTestTab",
      setSelectedTab: setContextMockFn,
    });

    const element = screen.getByTestId("testTab");
    fireEvent.click(element);

    expect(screen.getByText("test value")).toBeTruthy();
    expect(mockFn).toBeCalledTimes(1);
    expect(setContextMockFn).toBeCalledTimes(1);
    expect(element).toHaveAttribute("role", "tab");
    expect(element).toHaveAttribute("aria-selected", "false");
    expect(element).toHaveAttribute("aria-controls", "testControl");
    expect(element).toHaveAttribute("tabIndex", "-1");
  });

  it("tabIndex is set to what is passed in via props", () => {
    const mockFn = jest.fn();
    const setContextMockFn = jest.fn();
    renderComponent({
      id: "testTab",
      children: <p>test value</p>,
      onClick: mockFn,
      ariaControls: "testControl",
      selectedTab: "notTestTab",
      setSelectedTab: setContextMockFn,
      tabIndex: -2,
    });

    const element = screen.getByTestId("testTab");
    expect(element).toHaveAttribute("tabIndex", "-2");
  });
});
