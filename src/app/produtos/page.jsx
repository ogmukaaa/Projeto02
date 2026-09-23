"use client";

import { useState, useEffect } from "react";
import CardProduto from "@/components/CardProduto/"

export default function Produtos() {
    const [listaProdutos, setListaProdutos] = useState([]);
    const [msgErro, setMsgErro] = useState("");

    useEffect(() => {
        fetch("https://dummyjson.com/products/1")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setListaProducts(data.products);
                setMsgErro("");
            })
            .catch(error => setMsgErro(error.message));
    }, [])
    return (
        <main>
            {listaProdutos.length > 0 &&
                <div className="container-produtos">
                    {listaProdutos.map(f => {
                        return <CardProduto key={f.id} produto={f} />
                    })}
                </div>
            }
        </main>
    )
}