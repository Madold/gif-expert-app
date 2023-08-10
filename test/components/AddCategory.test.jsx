import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en el componente AddCategory', () => {
    

    test('debe de cambiar el valor de la caja de texto', () => {
        const onNewCategory = jest.fn()
        const expectedValue = "Goku"
        render(<AddCategory onNewCategory={onNewCategory} />)
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: expectedValue } });
        expect(input.value).toBe(expectedValue);
    });
    
    
    test('Debe de llamar onNewCategory si el input no es vacío', () => {
        
        const inputValue = "Hola"
        const empty = ""
        const onNewCategory = jest.fn()

        render(<AddCategory onNewCategory={onNewCategory} />)
        const input = screen.getByRole("textbox")
        const form = screen.getByRole("form")
        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        expect(onNewCategory).toHaveBeenCalled();

    });
    

});
