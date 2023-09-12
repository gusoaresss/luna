import { Link } from "react-router-dom";

export default function FotoRosto(){

    return(
        <main>
            <h1>Foto Rosto</h1>
            <button id="startCamera">Abrir Câmera</button>
            <p>Tem certeza que a imagem está nítida?</p>
            <Link to="/Validar">
                <button>Enviar</button>
            </Link>    
        </main>
    )
}