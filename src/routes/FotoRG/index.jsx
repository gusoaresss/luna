import { Link } from "react-router-dom";

export default function FotoRG(){

    return(
        <main>
            <h1>Foto RG</h1>
            <button id="startCamera">Abrir Câmera</button>
            <p>Tem certeza que a imagem está nítida?</p>
            <Link to="/FotoPessoal">
                <button>Enviar</button>
            </Link>
        </main>
    )
}