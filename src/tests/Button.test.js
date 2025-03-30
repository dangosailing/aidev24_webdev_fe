import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../components/Button";

test("renders the Button component with text", () => {
    // ARRANGE 
    render(<Button text="Click This!" />);
    
    // ACT
    const button = screen.getByText(/Click This!/i);

    //ASSERT
    expect(button).toBeInTheDocument();
});
