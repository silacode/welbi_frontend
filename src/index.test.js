import { render, screen } from "@testing-library/react";

import Header from "./components/Header";

describe("Header Component", () => {
  it("Renders properly", () => {
    render(<Header />);
    expect(screen.getByText("Welbi", { exact: false })).toBeInTheDocument();
  });
});
