import React from "react";
import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us page Test Cases", () => {
  it("should load Contact us component", () => {
    render(<Contact />);

    let heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside the component", () => {
    render(<Contact />);

    let button = screen.getByRole("button");

    // Assertion
    expect(button).toBeInTheDocument();
  });

  it("Should load input name inside the component", () => {
    render(<Contact />);

    let inputName = screen.getByPlaceholderText("name");

    // Assertion
    expect(inputName).toBeInTheDocument();
  });

  it("Should load 2 input boxes on the contact component", () => {
    render(<Contact />);

    let inputBoxes = screen.getAllByRole("textbox");
    //   console.log(inputBoxes.length);
    expect(inputBoxes.length).toBe(2);
  });
});
