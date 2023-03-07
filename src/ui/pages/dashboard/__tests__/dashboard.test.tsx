import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Dashboard } from "..";

const dashboardActions = {
  userActions: [],
  toCollectActions: [],
  helpingActions: [],
  endingActions: [],
};

describe("Home", () => {
  it("renders a heading", () => {
    render(<Dashboard actions={dashboardActions} />);

    const heading = screen.getByRole("heading", {
      name: /Dashboard/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
