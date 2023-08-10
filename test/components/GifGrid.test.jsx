import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";
jest.mock("../../src/hooks/useFetchGifs")

describe('Pruebas en el componente GifGrid', () => {

    const category = "One punch"

    test('Debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category} />)

        expect(screen.getByLabelText('loading-indicator'))

    });

    test('Debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {

        const gifs = [
            {
                id: "ABC",
                title: "Cualquier cosa",
                url: "https://localhost/cualquier/cosa.jpg"
            },
            {
                id: "123",
                title: "Lo que sea",
                url: "https://localhost/cualquier/cosa.jpg"
            }
        ]

        useFetchGifs.mockReturnValue(
            {
                images: gifs,
                isLoading: false
            }
        )

        render(<GifGrid category={category} />)
        expect(screen.getAllByRole("img").length).toBe(2)
    });



});
