import cart from "./../assets/cart.png"
import './../styles/navbar.css'

export const NavBar = () => (
    <header>
        <h2>Mall Motorsport</h2>
        <nav>
            <ul>
                <li><a>Kit volantes</a></li>
                <li><a>Cockpit</a></li>
                <li><a>Accesorios</a></li>
            </ul>
        </nav>
        <div class="divNav">
            <img src={cart} alt="cart"/> 
            <p>0</p>
        </div>
    </header>
)