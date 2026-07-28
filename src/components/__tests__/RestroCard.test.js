import React from "react";
import RestroCard, { withPromotedLable } from "../RestroCard";
import Mock_Data from "../../components/mocks/restroCardMock.json";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("Should render restaurant component with props data", () => {
  render(<RestroCard restroData={Mock_Data} />);

  //query
  const restroName = screen.getByText("Pizza Paradise");

  //Assertion
  expect(restroName).toBeInTheDocument();
});

// it("Should render restaurant component with promoted label", () => {
//   render(
//     <withPromotedLable>
//       <RestroCard restroData={Mock_Data}></RestroCard>
//     </withPromotedLable>,
//   );

//   //query
//   let promotedLabel = screen.getByLabelText("Veg🟢");

//   //assertion
//   expect(promotedLabel).toBeInTheDocument();
// });
