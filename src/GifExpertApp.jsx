import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const addcategory = (categorie) => {
        if(isRepeated(categorie)) return

        setCategories([categorie, ...categories])
    }

    const isRepeated = (category) => categories.map(it => it.toLowerCase()).includes(category.toLowerCase())

    return (
        <>
            <h1>Gif ExpertApp</h1>
            <hr />
            <AddCategory onNewCategory={ addcategory }/>
            <ol>
                {
                    categories.map(category => <li key={category}><GifGrid category={category}/></li>)
                }
            </ol>
        </>
    )
}


