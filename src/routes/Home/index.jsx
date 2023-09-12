import { Link } from "react-router-dom";

export default function Home(){

    return(
        <main>
            <h1>Vamos Começar?</h1>
            <Link to="/NotaFiscal">
                <button>Começar</button>
            </Link>
        </main>
    )
}