import { render, screen } from "@testing-library/react"
import Grocery from "../Grocery"


it('should load grocery component with heading', () => {
    render(<Grocery />)

    const head = screen.getByRole('heading');
    expect(head).toBeInTheDocument();
})