import { render, screen } from "@testing-library/react";
import { GifGridItem } from "../../src/components/GifGridItem";


describe('Pruebas en GifGridItem', () => {

    const title = "Saitama"
    const url = "https://localhost/algo.jpg"


    test('Debe de hacer match con el snapshot', () => {
        const { container } = render(<GifGridItem title={title} url={url} />)
        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar la imagen con el URL indicado', () => {
        render(<GifGridItem title={title} url={url} />)
        //screen.debug()
        const { src } =  screen.getByRole("img")
        expect(src).toBe(url)
    });    

});