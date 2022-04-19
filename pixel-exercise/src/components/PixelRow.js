import Pixel from "./Pixel";

function PixelRow(props) {
    const { width } = props;
    const pixels = [...Array(width).keys()];

    const pixelItems = pixels.map((pixel) => {
        return <Pixel key={ pixel } />
    });

    return (
        <section>
            { pixelItems }
        </section>
    )
}

export default PixelRow;