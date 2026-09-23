import "./cardProduto.css";

export default function CardFilme({ produto }){
    return(
        <div className="cardProduto">
            <img src={products.images} />
            <h2>{products.title}</h2>
            <a href={`/produtos${products.id}`}></a>

        </div>
    )
}