import { render,screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux"
import Header from "../src/components/Header";
import appStore from "../src/utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render Header Component with a login button", ()=> {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button", {name: "Login"})

    expect(loginButton).toBeInTheDocument();
});

it("Should render Header Component with a login button", ()=> {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )

    const cartItems = screen.getByText(/0/)

    expect(cartItems).toBeInTheDocument();
});

it("Should change login button to logout onClick", ()=> {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button", {name: "Login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name: "Logout"});

    expect(logoutButton).toBeInTheDocument();
})  