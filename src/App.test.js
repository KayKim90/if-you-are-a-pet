import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./pages/Home";
import { BrowserRouter as Router } from "react-router-dom";

describe("Main", () => {
  it("rendered home component", () => {
    const { getByTestId } = render(
      <Router>
        <Home />
      </Router>
    );
    expect(getByTestId("home-test")).toHaveTextContent(
      "If you were a pet what would you be?"
    );
  });
  it("click start button, go to question page", () => {
    const { getByTestId } = render(
      <Router>
        <Home />
      </Router>
    );
    const startSurveyBtn = getByTestId("start-button");
    fireEvent.click(startSurveyBtn);
    expect(window.location.pathname).toBe("/question");
  });
});
