import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";

import Navbar from "../components/Navbar";

//* Mock for imported image
jest.mock("../assets/BLOTT.png", () => "blott-logo.png");

describe("Navbar", () => {
  it("renders without crashing", () => {
    render(<Navbar />);
    const navElement = screen.getByRole("navigation");

    expect(navElement).toBeDefined();
  });

  it("renders the logo image with correct alt text", () => {
    render(<Navbar />);
    const logoImage = screen.getByAltText("logo");

    expect(logoImage).toBeDefined();
    expect(logoImage.tagName).toBe("IMG");
  });
});
