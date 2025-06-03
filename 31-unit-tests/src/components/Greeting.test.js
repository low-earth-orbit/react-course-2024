import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("renders hello world", () => {
  // Arrange: Render the Greeting component
  render(<Greeting />);

  // Act
  // (No action needed here as we are just checking the rendered output)

  // Assert: Check if the text "Hello, World!" is present in the document
  const helloWorld = screen.getByText("hello world", { exact: false });
  expect(helloWorld).toBeInTheDocument();
});
