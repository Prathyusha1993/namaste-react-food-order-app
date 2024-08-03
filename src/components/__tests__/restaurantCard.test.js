import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import data from '../../utils/FoodMenuJson.json';

it('should load restaurant card component with props data', () => {
    render(<RestaurantCard foodData = {data.resMenu} />);

    // const name = screen.getByText('KFC');
    // expect(name).toBeInTheDocument();
});