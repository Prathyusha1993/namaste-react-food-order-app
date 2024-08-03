import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

it('should load restaurant menu component', () => {
    render(
    <Provider store={appStore}>
        <RestaurantMenu />
    </Provider>);

    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();

     // const accordianHeader = screen.getByText('Non-Veg Starters (8)');
    // fireEvent.click(accordianHeader);

    // screen.getAllByTestId('foodItems');
    // console.log(foodItems.length);

    // expect(foodItems)
    // const addBtn = screen.getAllByRole('button', {name:'+'});
    // fireEvent.click(addBtn[0]);

    // expect(screen.getByText('Cart - (1 items)')).toBeInTheDocument();

    // expect(screen.getByText('Your cart is empty add items to cart')).toBeInTheDocument();
})