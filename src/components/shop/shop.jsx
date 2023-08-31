import "./shop.css"
import camion4 from "../../multimedia/camion4.jpg";

export default function Shop () {
    return(
        <body>
            <div class="container">
                <div class="grid">
                    <div class="card">
                        <img src={camion4} alt="Producto 1"/>
                        <h3>Producto 1</h3>
                        <p>Descripción del producto 1</p>
                        <p>Precio: $100</p>
                        <button>Agregar al carrito</button>
                    </div>
                    <div class="card">
                        <img src="producto2.jpg" alt="Producto 2"/>
                        <h3>Producto 2</h3>
                        <p>Descripción del producto 2</p>
                        <p>Precio: $200</p>
                        <button>Agregar al carrito</button>
                    </div>
                    <div class="card">
                        <img src="producto3.jpg" alt="Producto 3"/>
                        <h3>Producto 3</h3>
                        <p>Descripción del producto 3</p>
                        <p>Precio: $300</p>
                        <button>Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </body>

    ) 
}