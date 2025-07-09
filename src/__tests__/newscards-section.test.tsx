/* eslint-disable @typescript-eslint/no-explicit-any */
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import NewsCardsSection from "../components/NewsCardsSection";
import type { FinnhubNewsItem } from "../components/data";

// Mock for NewsCard and NewsCardSkeleton
jest.mock("../components/NewsCard", () => ({
  __esModule: true,
  default: (props: any) => <div data-testid="news-card">{props.headline}</div>,
}));

jest.mock("../components/NewsCardSkeleton", () => ({
  __esModule: true,
  default: () => <div data-testid="news-card-skeleton">Loading...</div>,
}));

describe("NewsCardsSection", () => {
  const mockData: FinnhubNewsItem[] = [
    {
      id: 1,
      headline: "Test Headline 1",
      image: "https://example.com/image1.jpg",
      source: "Source 1",
      url: "https://example.com/article1",
      datetime: 1687200000,
      category: "",
      related: "",
      summary: "",
    },
    {
      id: 2,
      headline: "Test Headline 2",
      image: "https://example.com/image2.jpg",
      source: "Source 2",
      url: "https://example.com/article2",
      datetime: 1687200100,
      category: "",
      related: "",
      summary: "",
    },
  ];

  it("renders the title correctly", () => {
    render(<NewsCardsSection data={[]} isLoading={false} isError={false} />);
    expect(screen.getByText(/news/i)).toBeInTheDocument();
  });

  it("displays error message when isError is true", () => {
    render(<NewsCardsSection data={[]} isLoading={false} isError={true} />);
    expect(
      screen.getByText("Something went wrong. Please try again later.")
    ).toBeInTheDocument();
  });

  it("displays loading skeletons when isLoading is true and data is empty", () => {
    render(<NewsCardsSection data={[]} isLoading={true} isError={false} />);
    const skeletons = screen.getAllByTestId("news-card-skeleton");
    expect(skeletons).toHaveLength(8);
  });

  it("renders NewsCard for each data item", () => {
    render(
      <NewsCardsSection data={mockData} isLoading={false} isError={false} />
    );
    const cards = screen.getAllByTestId("news-card");
    expect(cards).toHaveLength(mockData.length);
    expect(screen.getByText("Test Headline 1")).toBeInTheDocument();
    expect(screen.getByText("Test Headline 2")).toBeInTheDocument();
  });

  it("renders gracefully with empty data and no loading/error", () => {
    render(<NewsCardsSection data={[]} isLoading={false} isError={false} />);
    expect(screen.getByText(/news/i)).toBeInTheDocument();
    expect(screen.queryByTestId("news-card")).not.toBeInTheDocument();
    expect(screen.queryByTestId("news-card-skeleton")).not.toBeInTheDocument();
    expect(screen.queryByText(/something went wrong/i)).not.toBeInTheDocument();
  });
});
