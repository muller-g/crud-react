import '../App.css';
import axios from 'axios'
import { useState, useEffect } from 'react';
import Button from '../component/Button'

function SuporteNotebookLista(){
    const [data, setData] = useState([]);
    const [opt, setOpt] = useState("SuporteNotebook")

    useEffect(() => {
        axios.get(`https://suporte.grupostra.com/api/get/hardware/${opt}`, {
        }).then(response => {
            setData(response.data)
        }).catch(error => 
            console.log(error)
        )
    }, []);

    function handleDeleteItem(e){
        let id = e.target.id
        axios.delete(`https://suporte.grupostra.com/api/delete/hardware/${id}`)
        alert("Item Removido");
        window.location = window.location.href;
    }

    function handleEditItem(e){
        let id = e.target.id
        window.location = `/editar-item/${id}`
    }
    
    return(
        <div className="container">
            <div className="upper_line">
                <h1>Suporte Notebook Lista</h1>
                <a href="/suporte-notebook-reg">+ Adicionar Novo</a>
            </div>
            <div className="form">
                <table>
                    <tr>
                        <th>Id</th>
                        <th>Estado</th>
                        <th>Colaborador</th>
                        <th></th>
                        <th></th>
                    </tr>
                        {
                            data.map((item, i) =>
                                <tr key={i}>
                                    <td>{item.id}</td>     
                                    <td>{item.estado}</td>    
                                    <td>{item.colaborador}</td> 
                                    <td><Button text="Editar" id={item.id} onClick={(e) => handleEditItem(e)}/></td>
                                    <td><Button text="Deletar" id={item.id} onClick={(e) => handleDeleteItem(e)}/></td>
                                </tr>
                            )
                        } 
                </table>
            </div>
        </div>
    )
}

export default SuporteNotebookLista