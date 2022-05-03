import '../App.css';
import axios from 'axios'
import { useState } from 'react';
import Button from '../component/Button';
import ALink from '../component/ALink';

function Monitor(){
    const [nome, setNome] = useState("Monitor");
    const [tamanho, setTamanho] = useState();
    const [marca, setMarca] = useState();
    const [processador, setProcessador] = useState("");
    const [armazenamento, setArmazenamento] = useState("");
    const [memoria, setMemoria] = useState("");
    const [placaVideo, setPlacaVideo] = useState("");
    const [estado, setEstado] = useState();
    const [numeroPatrimonio, setNumeroPatrimonio] = useState("");
    const [colaborador, setColaborador] = useState();
    const [fio, setFio] = useState("");
    const [opt, setOpt] = useState("Monitor");

    const submitFields = () => {
        axios.post("https://suporte.grupostra.com/api/insert/hardware", {
            dbNome: nome,
            dbMarca: marca,
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
            <h1>Monitor</h1>
            <div className="form">
                <legend>Tamanho</legend>
                <input type="text" name="tamanho" id="tamanho" onChange={(e) => setTamanho(e.target.value)}/>
                <legend>Estado</legend>
                <select name="estado" id="estado" onChange={(e) => setEstado(e.target.value)}>
                    <option value="#" selected disabled>Selecione uma opção</option>
                    <option value="Ruim">Ruim</option>
                    <option value="Regular">Regular</option>
                    <option value="Novo">Novo</option>
                </select>
                <legend>Número do Patrimônio</legend>
                <input type="text" name="patrimonio" id="patrimonio" onChange={(e) => setNumeroPatrimonio(e.target.value)}/>
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

export default Monitor