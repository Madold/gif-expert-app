import { useFetchGifs }  from "../hooks/useFetchGifs"
import { LoadingIndicator, GifGridItem }  from "./"
import PropTypes from "prop-types"


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category)

    return (
        <>
            <h3>{category}</h3>

            {
                isLoading && <LoadingIndicator />
            }

            <div className="card-grid">
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img} />
                    ))
                }
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}