"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import "./produto.css";

export default function Produto() {
    const [produto, setProduto] = useState(null);
    const params = useParams();

    useEffect(() => {
        const produtoEncontrado = dados.find(f => f.id == params.id)
        setProduto(produtoEncontrado);
    }, [])

    return (
        <main>
            {filme != null && <>
                <img src={products.images} />
                <h1>{products.title}</h1>
                <h2>Categoria: {products.category}</h2>
                <h2>{products.price}</h2>
                <h3>Descrição: {products.description}</h3>
            </>}
        </main>
    )
}