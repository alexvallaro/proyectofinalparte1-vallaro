//css
import Imagen from "../Imagen/Imagen";
import Description from "../Description/Description";
import ButtonDetalles from "../ButtonDetalles/ButtonDetalles";
import ButtonAddCart from "../ButtonAddCart/ButtonAddCart";



const CardItem = () => {
    return (
        <div className="cardItems">
            <Imagen />
            <Description />
            <div className="buttons">
                <ButtonDetalles/>
                <ButtonAddCart/>
            </div>
        </div>
    )
}

export default CardItem;