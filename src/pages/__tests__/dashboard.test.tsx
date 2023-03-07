import { render, screen } from "@testing-library/react";
import Dashboard from "../dashboard";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Dashboard />);

    const heading = screen.getByRole("heading", {
      name: /Dashboard/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
