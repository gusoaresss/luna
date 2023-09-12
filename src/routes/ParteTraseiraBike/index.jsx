import { Link } from "react-router-dom";

export default function ParteTraseiraBike(){

    return(
        <main>
            <h1>Parte Traseira Bike</h1>
            <button id="startCamera">Abrir Câmera</button>
            <p>Tem certeza que a imagem está nítida?</p>
            <Link to="/ParteFrontal">
                <button>Enviar</button>
            </Link>
        </main>
    )
}