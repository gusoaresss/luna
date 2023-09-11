export default function ValidarBike(){

    return(
        <main>
            <h1>Validar Bike</h1>
            <p>
            Agora vamos iniciar a etapa de validação da sua bike.<br/>
            Para isso, informe:<br/>
            A sua Bike possui modificações?
            </p>
            <input type="checkbox" id="meuCheckbox" name="meuCheckbox"></input>
            <label for="meuCheckbox">Sim, possui modificações</label><br></br>
            <input type="checkbox" id="meuCheckbox" name="meuCheckbox"></input>
            <label for="meuCheckbox">Não possui modificação.</label><br></br>
            <button>Continuar</button>
        </main>
    )
}