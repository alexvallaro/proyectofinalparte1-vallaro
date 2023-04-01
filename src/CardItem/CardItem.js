//css
import "./CardItem.css";
import Imagen from "../Imagen/Imagen";
import Description from "../Description/Description";
import ButtonDetalles from "../ButtonDetalles/ButtonDetalles";
import ButtonAddCart from "../ButtonAddCart/ButtonAddCart";
// import ImgPrueba "../"


const CardItem = (props) => {
    return (
        <div className="cardItems">
            <Imagen />
            <Description title="remera??"
            cantidad = {5}
            precio={props.precio}
            />
            <div className="buttons">
                <ButtonDetalles/>
                <ButtonAddCart/>
            </div>
        </div>
    )
}

export default CardItem;

/*const CardItem = () => {
    return (
        <div className="cardItems">
se agrega   <Image image={ImgPrueba}/>
            <Description />
            <div className="buttons">
                <ButtonDetalles/>
                <ButtonAddCart/>
            </div>
        </div>
    )
}
*/

