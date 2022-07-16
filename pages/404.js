import Head from "next/head";
import React from "react";
import Link from "../src/components/link";

function Title( { children, as } ) {
    const Tag = as
    return (
        <React.Fragment>
            <Tag>
                {children}
            </Tag>
            <style jsx>{`
                ${Tag} {
                    color: #ccc;
                    font-size: 1.75rem;
                }
            `}</style>
        </React.Fragment>
    );
}

export default function Page404(){
    return (
        <div>
            <Head>
                <title>404 - Alura Cases</title>
            </Head>
            <Title as="h1"> Parece que Você se perdeu </Title>
            <Title as="h2"> Erro | 404 </Title>
            <Link href="/">
                Ir para a Home
            </Link>
        </div>
    );
}