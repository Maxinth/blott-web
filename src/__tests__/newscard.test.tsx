import { render, screen } from "@testing-library/react";
import NewsCard from "../components/NewsCard";
import { formateDate } from "../utils/formatDate";
import type { FinnhubNewsItem } from "../components/data";
import "@testing-library/jest-dom";

//* Mock news item
const mockNewsItem: FinnhubNewsItem = {
  headline: "Test Headline",
  image: "https://example.com/image.jpg",
  source: "Test Source",
  url: "https://example.com/article",
  datetime: 1687200000,
  category: "",
  id: 0,
  related: "",
  summary: "",
};

//* mock for formatDate
jest.mock("../utils/formatDate", () => ({
  formateDate: jest.fn(() => "2023-06-19"),
}));

describe("NewsCard", () => {
  it("renders without crashing", () => {
    render(<NewsCard {...mockNewsItem} />);
    const headline = screen.getByText(/test headline/i);
    expect(headline).toBeInTheDocument();
  });

  it("displays the headline as a clickable link with correct href", () => {
    render(<NewsCard {...mockNewsItem} />);
    const link = screen.getByRole("link", { name: /test headline/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", mockNewsItem.url);
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noreferrer");
  });

  it("displays the image with correct src and alt", () => {
    render(<NewsCard {...mockNewsItem} />);
    const img = screen.getByAltText("img");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", mockNewsItem.image);
  });

  it("displays the source correctly", () => {
    render(<NewsCard {...mockNewsItem} />);
    const source = screen.getByText(mockNewsItem.source);
    expect(source).toBeInTheDocument();
  });

  it("displays the formatted date correctly", () => {
    render(<NewsCard {...mockNewsItem} />);
    const formattedDate = screen.getByText("2023-06-19");
    expect(formattedDate).toBeInTheDocument();
    expect(formateDate).toHaveBeenCalledWith(mockNewsItem.datetime);
  });
});
