import {fireEvent, render, screen} from '@testing-library/react'
import {GifExpertApp} from "../../src/GifExpertApp"



describe('Pruebas en GifExpertApp', () => {
    
    test('Debe hacer match con el snapshot', () => {
         const {container} =  render(<GifExpertApp />);
         expect(container).toMatchSnapshot();
    });
    
    test("Debe mostrar una categoría", () => {
        const category = "One Punch"
        render(<GifExpertApp />);
        const form = screen.getByRole("form");
        const input = screen.getByRole("textbox");
        fireEvent.input(input, { target: { value: category } });
        fireEvent.submit(form);
        const title = screen.getByText(category);
        screen.debug();
        expect(title).toBeTruthy();

    })

    test('Una categoría repetida no debe ser añadida', () => {
        const category = "One Punch"
        render(<GifExpertApp />);
        const form = screen.getByRole("form");
        const input = screen.getByRole("textbox");
        fireEvent.input(input, { target: { value: category } });
        fireEvent.submit(form);
        fireEvent.input(input, { target: { value: category } });
        fireEvent.submit(form);
        const title = screen.getAllByText(category);
        expect(title.length).toBe(1);
    });
    

});
