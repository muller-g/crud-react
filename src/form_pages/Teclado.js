import '../App.css';
import axios from 'axios'
import { useState } from 'react';
import Button from '../component/Button';
import ALink from '../component/ALink';

function Teclado(){
    const [nome, setNome] = useState("Teclado");
    const [processador, setProcessador] = useState("");
    const [armazenamento, setArmazenamento] = useState("");
    const [memoria, setMemoria] = useState("");
    const [placaVideo, setPlacaVideo] = useState("");
    const [estado, setEstado] = useState();
    const [numeroPatrimonio, setNumeroPatrimonio] = useState("");
    const [colaborador, setColaborador] = useState();
    const [fio, setFio] = useState("");
    const [tamanho, setTamanho] = useState();
    const [opt, setOpt] = useState("Teclado");

    const submitFields = () => {
        axios.post("https://suporte.grupostra.com/api/insert/hardware", {
            dbNome: nome,
            dbProcessador: processador,
            dbArmazenamento: armazenamento,
            dbMemoria: memoria,
            dbPlacaVideo: placaVideo,
            dbEstado: estado,
            dbNumeroPatrimonio: numeroPatrimonio,
            dbColaborador: colaborador ,
            dbFio: fio,
            dbTamanho: tamanho,
            dbOpt: opt

        }).then(() => {
            alert("Item Cadastrado")
        })
        alert("Item Cadastrado com sucesso!")
        window.location = window.location.href;
    }
    return(
        <div className="container">
            <h1>Teclado</h1>
            <div className="form">
                <legend>Com fio ou sem fio</legend>
                <select name="fio" id="fio" onChange={(e) => setFio(e.target.value)}>
                    <option value="#" selected disabled>Selecione uma opção</option>
                    <option value="Sem fio">Sem fio</option>
                    <option value="Sem fio">Com fio</option>
                </select>
                <legend>Estado</legend>
                <select name="estado" id="estado" onChange={(e) => setEstado(e.target.value)}>
                    <option value="#" selected disabled>Selecione uma opção</option>
                    <option value="Ruim">Ruim</option>
                    <option value="Regular">Regular</option>
                    <option value="Novo">Novo</option>
                </select>
                <legend>Colaborador</legend>
                <input type="text" name="colaborador" id="colaborador" onChange={(e) => setColaborador(e.target.value)}/>
                <div className="btn_form">
                    <Button type="submit" onClick={submitFields} text="Cadastrar" />
                    <ALink href="/" text="Voltar" />
                </div>
            </div>
        </div>
    )
}

export default Teclado