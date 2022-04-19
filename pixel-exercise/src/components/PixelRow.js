import Pixel from "./Pixel";

function PixelRow(props) {
    const { width, color } = props;
    const pixels = [...Array(width).keys()];

    const pixelItems = pixels.map((pixel) => {
        return <Pixel key={ pixel } color={ color } />
    });

    return (
        <section>
            { pixelItems }
        </section>
    )
}

export default PixelRow;