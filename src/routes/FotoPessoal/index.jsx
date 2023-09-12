import { Link } from "react-router-dom";

export default function FotoPessoal(){

    return(
        <main>
            <h1>Foto Pessoal</h1>
            <p>
            Agora precisamos tirar uma foto sua para validar os dados.<br/>
            Para isso verifique a iluminação do local e caso esteja usando, retire o óculos.<br/>
            Dica: posicione o seu rosto dentro da área circular.
            </p>
            <Link to="/FotoRosto">
                <button>Começar</button>
            </Link>
        </main>
    )
}