import Link from "../src/components/link";

export default function HomePage(){
    return (
        <div 
            style={
                { 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    textAlign: 'center', 
                    padding: '1.5rem',
                    fontSize: '1.25rem',
                }
            }
        >
            <h1> Alura Case - Home </h1>
            <Link href="/faq">
                Ir para o FAQ
            </Link>
        </div>
    )
}
