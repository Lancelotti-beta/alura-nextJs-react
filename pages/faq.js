import Head from "next/head"
import Link from "../src/components/link";

//export async function getServerSideProps(){}
//Em DEV roda o tempo todo && Roda acada acesso que receber

export async function getStaticProps() {
//Em DEV roda o tempo todo && Roda somente em tempo de Build

    const URL_API_FAQ = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'
    const faq = await fetch(URL_API_FAQ)
        .then(response => response.json())
        .then(response => response)

    return {
        props: {
            qualquercoisa: '....',
            faq,
        },
        
    }
}

export default function FaqPage({ faq }){
    // const [faq, setFaq] = ([]);
    return (
        <div>
            <Head>
                <title>Faq - Alura Cases</title>
            </Head>
            <h1> Alura Case - Perguntas</h1>
            <Link href="/">
                Ir para a Home
            </Link>
            <ul>
                {faq.map(({answer, question}) => (
                    <li key={question}>
                        <article>
                            <h2>
                                {question}
                            </h2>
                            <p>
                                {answer}
                            </p>
                        </article>
                    </li>
                ))}
            </ul>
        </div>
    );
}
