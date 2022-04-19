import { useState } from 'react';
import './Editor.css';
import { TwitterPicker } from 'react-color';

import DrawingPanel from './DrawingPanel';

function Editor() {
    const [panelWidth, setPanelWidth] = useState(16);
    const [panelHeight, setPanelHeight] = useState(16);
    const [configuration, setConfiguration] = useState(true);
    const [pixelColor, setPixelColor] = useState('#000000');

    function initializeDrawing(event) {
        event.preventDefault();
        setConfiguration(!configuration);
    }

    function selectPixelColor(color) {
        console.log(color);
        setPixelColor(color.hex);
    }

    return (
        <section className='editor'>
            <h1>Pixel editor</h1>
            { configuration && <h2>Ange dimensioner</h2>}
            { configuration && <form className='editor__form'> { /** Om configation är true, visa <form> */}
                <input type="text" placeholder="Bredd" defaultValue={ panelWidth }
                    onKeyUp={ (event) => setPanelWidth(parseInt(event.target.value)) }/>
                <input type="text" placeholder="Höjd" defaultValue={ panelHeight }
                    onKeyUp={ (event) => setPanelHeight(parseInt(event.target.value)) } />
                <button onClick={ initializeDrawing }>Börja rita</button>
            </form> }
            { !configuration && <TwitterPicker onChangeComplete={ selectPixelColor } /> }
            { !configuration && <DrawingPanel width={ panelWidth } height={ panelHeight } color={ pixelColor } /> }
        </section>
    )
}

export default Editor;