import { render, screen } from "@testing-library/react"
import About from "../About"


it('should load about component heading tag', () => {
    render(<About />);

    const heading = screen.getAllByRole('heading');
    console.log(heading.length);
    expect(heading.length).toBe(6);
})