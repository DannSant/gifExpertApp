import React from 'react'
import PropTypes from 'prop-types'
import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({category}) => {

    //const [images, setImages] = useState([]);

    /* useEffect(()=>{
        getGifs(category).then(gifs => setImages(gifs));
    },[category]) */

    //Para renombrar de data a images
    const {data:images,loading} = useFetchGifs(category);

    
    return (
        <>
        <h3>{category}</h3>
        <div className="card-grid">
            {loading && <p>Loading...</p>}
            {
                images.map(img=>{
                    return <GifGridItem key={img.id} {...img}/>
                })
            }
            
            
        </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid
