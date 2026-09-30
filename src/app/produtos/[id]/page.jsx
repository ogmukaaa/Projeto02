"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import "./produto.css";

export default function Produto() {
    const [produto, setProduto] = useState(null);
    const params = useParams();

    useEffect(() => {
        if (params?.id) {
            fetch(`https://dummyjson.com/products/${params.id}`)
                .then((res) => res.json())
                .then((data) => {
                    setProduto(data);
                });
        }
    }, [params?.id]);

    return (
        <main>
            {produto != null && <>
                <img src={produto.thumbnail} alt={produto.title} />
                <h1>{produto.title}</h1>
                <h2>Categoria: {produto.category}</h2>
                <h2>{produto.price}</h2>
                <h3>Descrição: {produto.description}</h3>
            </>}
        </main>
    )
}