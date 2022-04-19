import './Pixel.css';
import { useState } from 'react';

function Pixel(props) {
    const { color } = props;
    const [pixelColor, setPixelColor] = useState('');
    const [oldPixelColor, setOldPixelColor] = useState(pixelColor);
    const [canChangeColor, setCanChangeColor] = useState(true);

    function setColor() {
        setPixelColor(color);
        setCanChangeColor(false);
    }

    function onMouseOver() {
        setOldPixelColor(pixelColor);
        setPixelColor(color);
    }

    function onMouseLeave() {
        if (canChangeColor) {
            setPixelColor(oldPixelColor);
        }
        
        setCanChangeColor(true);
    }

    return (
        <article 
            className='pixel'
            onClick={ setColor }
            onMouseOver={ onMouseOver }
            onMouseLeave= { onMouseLeave }
            style={{ backgroundColor: pixelColor }}>
        </article>
    )
}

export default Pixel;