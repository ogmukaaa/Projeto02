import "./cardProduto.css";

export default function CardFilme({ produto }){
    return(
        <div className="cardFilme">
            <img src={products.images} />
            <h2>{products.title}</h2>
            <a href={`/produtos${produto.id}`}></a>

        </div>
    )
}