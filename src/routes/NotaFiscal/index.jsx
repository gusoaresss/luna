import { Link } from "react-router-dom";

export default function NotaFiscal(){

    return(
        <main>
            <h1>Nota Fiscal</h1>
            <label for="nome">Número da NF:</label><br></br>
            <input type="text" id="nome" name="nome"></input><br></br>
            <label for="nome">Empresa emissora:</label><br></br>
            <input type="text" id="nome" name="nome"></input><br></br>
            <label for="nome">Data de emissão:</label><br></br>
            <input type="text" id="nome" name="nome"></input><br></br>
            <label for="nome">Produto:</label><br></br>
            <input type="text" id="nome" name="nome"></input><br></br>
            <label for="nome">Modelo:</label><br></br>
            <input type="text" id="nome" name="nome"></input><br></br>
            <label for="nome">Cor:</label><br></br>
            <input type="text" id="nome" name="nome"></input><br></br>
            <label for="nome">Valor Pago:</label><br></br>
            <input type="text" id="nome" name="nome"></input><br></br>
            <input type="checkbox" id="meuCheckbox" name="meuCheckbox"></input>
            <label for="meuCheckbox">Concordo com os Termos e Condições</label><br></br>
            <Link to="/Documentos">
                <button>Enviar</button>
            </Link>
        </main>
    )
}