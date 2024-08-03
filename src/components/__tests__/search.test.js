import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";

it('should render the body component with search button', () => {
    render(
        <BrowserRouter>
        <Body />
        </BrowserRouter>
);
const searchBtn = screen.getByRole('button', {name:'Search'});
// consoel.log(searchBtn);

const searchInput = screen.getByTestId('searchInput');
fireEvent.change(searchInput, {target: {value: 'pizza'}});
fireEvent.click(searchBtn);
// expect(searchBtn).toBeInTheDocument();
const cards = screen.getAllByTestId('resCard');
expect(cards.length).toBe(1);
});

it('should filter top rated restaurants', () => {
    render(
        <BrowserRouter>
        <Body />
        </BrowserRouter>
    );

    const cardsBeforeFilter = screen.getAllByTestId('resCard');
    expect(cardsBeforeFilter.length).toBe(15);

    const topRatedBtn = screen.getByRole('button', {name: 'Top Rated Restaurants'});
    fireEvent.click(topRatedBtn);
    const cardsAfterFilter = screen.getAllByTestId('resCard');

    expect(cardsAfterFilter.length).toBe(9);  
})