import bannerkabum from '../assets/bannerkabum.jpg';
import Produtos from './Produtos';
// Imagens dos produtos
import produto1 from '../assets/produtos-img/produto1.jpg';
import produto2 from '../assets/produtos-img/produto2.jpg';
import produto3 from '../assets/produtos-img/produto3.jpg';
import produto4 from '../assets/produtos-img/produto4.jpg';
import produto5 from '../assets/produtos-img/produto5.jpg';
import produto6 from '../assets/produtos-img/produto6.jpg';
import produto7 from '../assets/produtos-img/produto7.jpg';
import produto8 from '../assets/produtos-img/produto8.jpg';

function SectionMain() {
    return (
        <>
            <div className="main">
                <section className="banner">
                    <img src={bannerkabum} alt="Banner" />
                </section>
                <div className="itens-container">
                    <Produtos
                        img={produto1}
                        marca="Brazil PC"
                        desc="Gabinete Gamer Brazil PC "
                        preco="140,10"
                    />

                    <Produtos
                        img={produto2}
                        marca="Razer"
                        desc="Mouse Sem Fio Gamer Razer Viper Ultimate"
                        preco="499,99"
                    />

                    <Produtos
                        img={produto3}
                        marca="AMD"
                        desc="Processador AMD Ryzen 5 4600G, 3.7GHz"
                        preco="599,99"
                    />

                    <Produtos
                        img={produto4}
                        marca="AOC"
                        desc="Monitor Gamer AOC Hero 23.8 Full HD"
                        preco="1.199,99"
                    />

                    <Produtos
                        img={produto5}
                        marca="Logitech"
                        desc="Volante Logitech G923"
                        preco="2.299,99"
                    />

                    <Produtos
                        img={produto6}
                        marca="Sony"
                        desc="Console Sony PS5"
                        preco="3.959,99"
                    />

                    <Produtos
                        img={produto7}
                        marca="Microsoft"
                        desc="Xbox Series X"
                        preco="4.799,99"
                    />

                    <Produtos
                        img={produto8}
                        marca="Nintendo"
                        desc="Nintendo Switch 32GB"
                        preco="2.299,99"
                    />  

                </div>
            </div>
        </>
    );
}

export default SectionMain;
