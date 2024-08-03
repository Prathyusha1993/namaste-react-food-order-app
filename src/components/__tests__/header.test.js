import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

it('should load header component with login button', () => {
    //render the component
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
        </BrowserRouter>
    );
    //querying for login button
    const loginButton = screen.getByRole('button');
    //assertion
    expect(loginButton).toBeInTheDocument(); 
});

it('should load header component with cart items 0 items', () => {
    //render the component
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
        </BrowserRouter>
    );
    //querying for login button
    const cartItems = screen.getByText('Cart (0 items)');
    //assertion
    expect(cartItems).toBeInTheDocument(); 
});

it('should load header component wheather cart is there or not', () => {
    //render the component
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
        </BrowserRouter>
    );
    //querying for login button
    const cart = screen.getByText(/Cart/);
    //assertion
    expect(cart).toBeInTheDocument(); 
});

it('should load header component login button to logout on click', () => {
    //render the component
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
        </BrowserRouter>
    );
    //querying for login button
    const loginButton = screen.getByRole('button', {name: 'Login'});
    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole('button', {name: 'Logout'});
    //assertion
    expect(logoutButton).toBeInTheDocument();
});