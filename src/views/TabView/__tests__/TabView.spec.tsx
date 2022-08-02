import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { TabView } from "..";

const renderComponent = (pathname: string) => {
  return render(
    <MemoryRouter initialEntries={[{ pathname }]}>
      <TabView />
    </MemoryRouter>
  );
};

describe("TabList", () => {
  it("Test that the correct tabpanel for regular purple potato renders via url changes", async () => {
    const { container } = renderComponent("/potato/purple");

    userEvent.click(screen.getByTestId("regular"));
    expect(screen.getByText("TBA. Purples rolling in")).toBeTruthy();
    expect(container).toMatchSnapshot();
  });

  it("Test that the correct tabpanels for noodle renders via url changes", async () => {
    const { container } = renderComponent("/noodle");

    userEvent.click(screen.getByTestId("noodle"));
    expect(screen.getByText("more noodles to come")).toBeTruthy();
    expect(container).toMatchSnapshot();
  });
});
