import '../App.css';
import axios from 'axios'
import { useState } from 'react';
import Button from '../component/Button';
import ALink from '../component/ALink';

function Gabinete(){
    const [nome, setNome] = useState("Gabinete");
    const [marca, setMarca] = useState();
    const [processador, setProcessador] = useState();
    const [armazenamento, setArmazenamento] = useState();
    const [memoria, setMemoria] = useState();
    const [placaVideo, setPlacaVideo] = useState();
    const [estado, setEstado] = useState();
    const [numeroPatrimonio, setNumeroPatrimonio] = useState();
    const [colaborador, setColaborador] = useState();
    const [fio, setFio] = useState();
    const [tamanho, setTamanho] = useState();
    const [opt, setOpt] = useState("Gabinete");

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
            <h1>Gabinete</h1>
            <div className="form">
                <legend>Processador</legend>
                <input type="text" name="processador" id="processador" onChange={(e) => setProcessador(e.target.value)}/>
                <legend>Armazenamento</legend>
                <input type="text" name="armazenamento" id="armazenamento" onChange={(e) => setArmazenamento(e.target.value)}/>
                <legend>Memória</legend>
                <input type="text" name="memoria" id="memoria" onChange={(e) => setMemoria(e.target.value)}/>
                <legend>Placa de vídeo</legend>
                <input type="text" name="placa_video" id="placa_video" onChange={(e) => setPlacaVideo(e.target.value)}/>
                <legend>Estado</legend>
                <select name="estado" id="estado" onChange={(e) => setEstado(e.target.value)}>
                    <option value="#" selected disabled>Selecione uma opção</option>
                    <option value="Ruim">Ruim</option>
                    <option value="Regular">Regular</option>
                    <option value="Novo">Novo</option>
                </select>
                <legend>Número do patrimônio</legend>
                <input type="text" name="numero_patrimonio" id="numero_patrimonio" onChange={(e) => setNumeroPatrimonio(e.target.value)}/>
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

export default Gabinete