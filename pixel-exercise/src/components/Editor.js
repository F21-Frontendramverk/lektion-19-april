import { useState } from 'react';

import DrawingPanel from './DrawingPanel';

function Editor() {
    const [panelWidth, setPanelWidth] = useState(16);
    const [panelHeight, setPanelHeight] = useState(16);
    const [configuration, setConfiguration] = useState(true);

    function initializeDrawing(event) {
        event.preventDefault();
        setConfiguration(!configuration);
    }

    return (
        <section>
            <h1>Pixel editor</h1>
            { configuration && <h2>Ange dimensioner</h2>}
            { configuration && <form> { /** Om configation är true, visa <form> */}
                <input type="text" placeholder="Bredd" defaultValue={ panelWidth }
                    onKeyUp={ (event) => setPanelWidth(event.target.value) }/>
                <input type="text" placeholder="Höjd" defaultValue={ panelHeight }
                    onKeyUp={ (event) => setPanelHeight(event.target.value) } />
                <button onClick={ initializeDrawing }>Börja rita</button>
            </form> }
            { !configuration && <DrawingPanel width={ panelWidth } height={ panelHeight } /> }
        </section>
    )
}

export default Editor;