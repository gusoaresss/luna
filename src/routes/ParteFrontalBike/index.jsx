import { Link } from "react-router-dom";

export default function ParteFrontalBike(){

    return(
        <main>
            <h1>Parte Frontal Bike</h1>
            <button id="startCamera">Abrir Câmera</button>
            <p>Tem certeza que a imagem está nítida?</p>
            <Link to="/Obrigado">
                <button>Enviar</button>
            </Link> 
        </main>
    )
}