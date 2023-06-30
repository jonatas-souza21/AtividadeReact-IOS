import kabumlogo2 from '../assets/kabumlogo2.png';

function Navbar() {
    return (
        <>
            <div className="menu">
                <div className="logo">
                    <a href='#'><img src={kabumlogo2} alt="Logo Kabum" /></a>
                </div>
                <ul className="item-menu">
                    <li><a href='#'>Placa de video</a></li>
                    <li><a href='#'>Processador</a></li>
                    <li><a href='#'>SSD</a></li>
                    <li><a href='#'>Memória RAM</a></li>
                </ul>
            </div>
        </>
    );
}

export default Navbar;
