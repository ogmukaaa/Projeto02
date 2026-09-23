"use client";

import { useState, useEffect } from "react";
import dados from "@/filmes.json";
import { useParams } from "next/navigation";
import "./filme.css";


export default function Filme() {
    const [filme, setFilme] = useState(null);
    const params = useParams();

    useEffect(() => {
        const filmeEncontrado = dados.find(f => f.id == params.id)
        setFilme(filmeEncontrado);
    }, [])

    return (
        <main>
            {filme != null && <>
                <img src={filme.imagem} />
                <h1>Titulo: {filme.titulo}</h1>
                <h2>Duração do filme: {filme.duracaoMinutos}</h2>
                <h2>Ano: {filme.ano}</h2>
                <h2>Gênero: {filme.genero}</h2>
                <h3>Descrição do filme: {filme.sinopse}</h3>
            </>}
        </main>
    )
}