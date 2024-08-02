import { render, screen } from "@testing-library/react"
import Contact from "../Contact"

describe('Contact us component test cases', () => {
    it('Should load contact us component', () => {
        render(<Contact />);
    
        const heading = screen.getByRole('heading');
        expect(heading).toBeInTheDocument();
    });
    
    it('Should load button inside contactus component', () => {
        render(<Contact />);
    
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });
    
    it('Should load input inside contactus component', () => {
        render(<Contact />);
    
        const submit = screen.getByText('Submit');
        expect(submit).toBeInTheDocument();
    });
    
    it('should load input placeholder inside contactus component', () => {
        render(<Contact />);
    
        const inputName = screen.getByPlaceholderText('name');
        expect(inputName).toBeInTheDocument();
    });
    
    it('should load 2 input boxes inside contactus component', () => {
        //render the component
        render(<Contact />);
    
        //querying for all input boxes
        const inputBoxes = screen.getAllByRole('textbox');
        console.log(inputBoxes.length);
        //assertion
        expect(inputBoxes.length).toBe(2);
    });
});
