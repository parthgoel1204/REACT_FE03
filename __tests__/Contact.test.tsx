import { render,screen } from "@testing-library/react";
import Contact from "../src/components/Contact";
import "@testing-library/jest-dom";

// instead of test we can write as it also   
describe("Contact us component test case", ()=> {
    test("Should load contact us component",() => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
})

test("Should load button on contact us component",() => {
    render(<Contact />);

    // const button = screen.getByRole("button");
    const button = screen.getByText("SUBMIT")

    expect(button).toBeInTheDocument();
})

test("Should load input name on contact us component",() => {
    render(<Contact />);

    // const button = screen.getByRole("button");
    const inputName = screen.getByPlaceholderText("Name")

    expect(inputName).toBeInTheDocument();
})

test("Should load 2 input boxes on contact us component",() => {
    render(<Contact />);

    // const button = screen.getByRole("button");
    const inputBoxes = screen.getAllByRole("textbox")

    expect(inputBoxes.length).toBe(2);
    // expect(inputBoxes.length).not.toBe(2);
})
})

