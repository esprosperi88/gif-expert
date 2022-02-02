
import PropsTypes from 'prop-types';

export const GifGridItem =( { url, title}) =>{

    return  <div className="card animate__animated animate__fadeIn">
                <p>{title}</p>
                <img src={url} alt={title}/>
            </div>;           


} 

GifGridItem.propTypes={
    url: PropsTypes.string.isRequired,
    title: PropsTypes.string.isRequired,
}


export default GifGridItem;