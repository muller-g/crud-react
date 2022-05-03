import './App.css'
import { useParams } from 'react-router-dom';
import Button from './component/Button'
import ALink from './component/ALink';
import { useState, useEffect } from 'react';
import axios from 'axios';

function EditItem(){
    
    const { idEdit } = useParams();

    const [nome, setNome] = useState();
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

    const [data, setData] = useState([])
    const [rendered, setRendered] = useState(false)


    const submitFields = () => {
        axios.put(`https://suporte.grupostra.com/api/set-update/hardware/${idEdit}`, {
            dbNome: nome,
            dbMarca: marca,
            dbProcessador: processador,
            dbArmazenamento: armazenamento,
            dbMemoria: memoria,
            dbPlacaVideo: placaVideo,
            dbEstado: estado,
            dbNumeroPatrimonio: numeroPatrimonio,
            dbColaborador: colaborador,
            dbFio: fio,
            dbTamanho: tamanho,

        }).then(response => {
            console.log(response)
        }).catch(error => 
            console.log(error)
        )
        /* alert("Item Cadastrado com sucesso!")
        window.location = window.location.href; */
    }

    useEffect(() => {
        axios.get(`https://suporte.grupostra.com/api/get-update/hardware/${idEdit}`, {
        }).then(response => {
            setData(response.data)
            setRendered(true)
        }).catch(error => 
            console.log(error)
        )
    }, []);

    useEffect(() => {
        setTimeout(() => {
            disableEmpty()
        }, 2000)
    }, [])

    function disableEmpty(){
        let inputs = document.querySelectorAll('input');
        for(let i=0; i<inputs.length; i++){
            if(inputs[i].placeholder===""){
                inputs[i].disabled = true;
            }
        } 
    }

    return(
        <div className="container">
            
            <div className="form">
                { rendered && (
                <>
                    <div className="upper_line">
                        <h1>Editar {data[0].opt}</h1>
                    </div>
                    <legend>Nome</legend>
                    <input type="text" name="nome" id="nome" placeholder={data[0].nome} onChange={(e) => setNome(e.target.value)}/>
                    <legend>Marca</legend>
                    <input type="text" name="marca" id="marca" placeholder={data[0].marca} onChange={(e) => setMarca(e.target.value)}/>
                    <legend>Processador</legend>
                    <input type="text" name="processador" id="processador" placeholder={data[0].processador} onChange={(e) => setProcessador(e.target.value)}/>
                    <legend>Armazenamento</legend>
                    <input type="text" name="armazenamento" id="armazenamento" placeholder={data[0].armazenamento} onChange={(e) => setArmazenamento(e.target.value)}/>
                    <legend>Memória</legend>
                    <input type="text" name="memoria" id="memoria" placeholder={data[0].memoria} onChange={(e) => setMemoria(e.target.value)}/>
                    <legend>Placa de Video</legend>
                    <input type="text" name="placa_video" id="placa_video" placeholder={data[0].placa_video} onChange={(e) => setPlacaVideo(e.target.value)}/>
                    <legend>Estado</legend>
                    <select name="estado" id="estado" onChange={(e) => setEstado(e.target.value)}>
                        <option value="#" selected disabled>Selecione uma opção</option>
                        <option value="Ruim">Ruim</option>
                        <option value="Regular">Regular</option>
                        <option value="Novo">Novo</option>
                    </select>
                    <legend>Número do Patrimônio</legend>
                    <input type="text" name="patrimonio" id="patrimonio" placeholder={data[0].numero_patrimonio} onChange={(e) => setNumeroPatrimonio(e.target.value)}/>
                    <legend>Colaborador</legend>
                    <input type="text" name="colaborador" id="colaborador" placeholder={data[0].colaborador} onChange={(e) => setColaborador(e.target.value)}/>
                    <legend>Com fio ou sem fio</legend>
                    <select name="fio" id="fio" onChange={(e) => setFio(e.target.value)}>
                        <option value="#" selected disabled>Selecione uma opção</option>
                        <option value="Sem fio">Sem fio</option>
                        <option value="Sem fio">Com fio</option>
                    </select>
                    <legend>Tamanho</legend>
                    <input type="text" name="tamanho" id="tamanho" placeholder={data[0].tamanho} onChange={(e) => setTamanho(e.target.value)}/>
                    <div className="btn_form">
                        <Button type="submit" onClick={submitFields} text="Cadastrar" />
                        <ALink href="/" text="Voltar" />
                    </div>
                </>
                )}
            </div>
        </div>
    )

}

export default EditItem