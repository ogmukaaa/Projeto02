import "./cardProduto.css";

export default function CardProduto({ produto }){
    return(
        <div className="cardProduto">
            <img src={produto.thumbnail} alt={produto.title} />
            <h2>{produto.title}</h2>
            <a href={`/produtos/${produto.id}`}>Ver produto</a>

        </div>
    )
}
