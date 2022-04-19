import './DrawingPanel.css';

import PixelRow from "./PixelRow";

function DrawingPanel(props) {
    const { width, height, color } = props;
    // const pixelRows = [];

    // for(let i = 0; i < height; i++) {
    //     pixelRows.push(<PixelRow key={ i } />);
    // }
    const pixelRows = [...Array(height).keys()]; // Skapar upp en ny array baserad på variabeln height
    const pixelItems = pixelRows.map((pixelRow) => {
        return <PixelRow key={ pixelRow } width={ width } color={ color } /> 
    });

    return (
        <section className='drawing-panel'>
            { pixelItems }
        </section>
    )
}

export default DrawingPanel;