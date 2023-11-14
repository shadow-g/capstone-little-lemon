import { render, screen } from "@testing-library/react";
import BookingForm from "../src/components/sections/reservePages/BookingForm";

test("renders the BookingForm heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText('BookingForm');
  expect(headingElement).toBeInTheDocument();
});
