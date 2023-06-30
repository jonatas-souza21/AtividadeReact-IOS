function Produtos ({img, marca, desc, preco}) {
    return (
        <>
            <div className="item-box">
                <div className="item-img">
                    <img src={img} alt="" />
                </div>

                <div className="item-desc">
                    <h2>{desc}</h2>
                    <h3>{marca}</h3>
                    <p>R${preco}</p>
                    <button>Aproveite</button>
                </div>

            </div>
        </>
    )
}

export default Produtos