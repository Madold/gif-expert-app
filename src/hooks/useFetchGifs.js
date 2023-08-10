import { useState, useEffect } from "react"
import { getGifs } from "../utils/GetGifs"

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const fetchImages = async () => {
        setIsLoading(true)

        setTimeout(async () => {
            const newImages = await getGifs(category)
            setImages(newImages)
            setIsLoading(false)
        }, 1500);

    }

    useEffect(() => {
        fetchImages()
    }, [])


    return {
        images,
        isLoading
    }
}
