import "./NavBar.css"
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import CartWidget from "../CartWidget/CartWidget";
//el logo se importa aca. Primero se hace otro componente.js



const NavBar = () => {
    return (
        <header>
            <div className="containerBrand">

            </div>

            <nav className="containerItemList">
                <ItemListContainer 
                    itemUno = "Todos Nuestros Productos"
                    itemDos = "Remeras Estampadas"
                    itemTres = "Bermudas"
                    itemCuatro= "Accesorios"               
                />
                            
            </nav>

            <div className="containerCart">
                <CartWidget />


            </div>
        </header>
    )
}

export default NavBar;