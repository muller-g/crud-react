import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import EditItem from './EditItem';
import Diversos from './form_pages/Diversos';
import Fone from './form_pages/Fone';
import Gabinete from './form_pages/Gabinete';
import Impressora from './form_pages/Impressora';
import Monitor from './form_pages/Monitor';
import Mouse from './form_pages/Mouse';
import MousePad from './form_pages/MousePad';
import Notebook from "./form_pages/Notebook"
import SuporteMonitor from './form_pages/SuporteMonitor';
import SuporteNotebook from './form_pages/SuporteNotebook';
import Teclado from "./form_pages/Teclado"
import Telefone from './form_pages/Telefone';
import DiversosLista from './get_pages/DiversosLista';
import FoneLista from './get_pages/FoneLista';
import GabineteLista from './get_pages/GabineteLista';
import ImpressoraLista from './get_pages/ImpressoraLista';
import MonitorLista from './get_pages/MonitorLista';
import MouseLista from './get_pages/MouseLista';
import MousePadLista from './get_pages/MousePadLista';
import NotebookLista from './get_pages/NotebookLista';
import SuporteMonitorLista from './get_pages/SuporteMonitorLista';
import SuporteNotebookLista from './get_pages/SuporteNotebookLista';
import TecladoLista from './get_pages/TecladoLista';
import TelefoneLista from './get_pages/TelefoneLista';
import Home from './Home';

const AppRoutes = () =>{

    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
            </Routes>
            <Routes>
                <Route path="/notebook-reg" element={<Notebook />} />
            </Routes>
            <Routes>
                <Route path="/monitor-reg" element={<Monitor />} />
            </Routes>
            <Routes>
                <Route path="/gabinete-reg" element={<Gabinete />} />
            </Routes>
            <Routes>
                <Route path="/mouse-reg" element={<Mouse />} />
            </Routes>
            <Routes>
                <Route path="/teclado-reg" element={<Teclado />} />
            </Routes>
            <Routes>
                <Route path="/fone-reg" element={<Fone />} />
            </Routes>
            <Routes>
                <Route path="/telefone-reg" element={<Telefone />} />
            </Routes>
            <Routes>
                <Route path="/suporte-monitor-reg" element={<SuporteMonitor />} />
            </Routes>
            <Routes>
                <Route path="/suporte-notebook-reg" element={<SuporteNotebook />} />
            </Routes>
            <Routes>
                <Route path="/mousepad-reg" element={<MousePad />} />
            </Routes>
            <Routes>
                <Route path="/impressora-reg" element={<Impressora />} />
            </Routes>
            <Routes>
                <Route path="/diversos-reg" element={<Diversos />} />
            </Routes>
            <Routes>
                <Route path="/diversos-lista" element={<DiversosLista />} />
            </Routes>
            <Routes>
                <Route path="/fone-lista" element={<FoneLista />} />
            </Routes>
            <Routes>
                <Route path="/telefone-lista" element={<TelefoneLista />} />
            </Routes>
            <Routes>
                <Route path="/gabinete-lista" element={<GabineteLista />} />
            </Routes>
            <Routes>
                <Route path="/impressora-lista" element={<ImpressoraLista />} />
            </Routes>
            <Routes>
                <Route path="/monitor-lista" element={<MonitorLista />} />
            </Routes>
            <Routes>
                <Route path="/mouse-lista" element={<MouseLista />} />
            </Routes>
            <Routes>
                <Route path="/mousepad-lista" element={<MousePadLista />} />
            </Routes>
            <Routes>
                <Route path="/notebook-lista" element={<NotebookLista />} />
            </Routes>
            <Routes>
                <Route path="/suporte-monitor-lista" element={<SuporteMonitorLista />} />
            </Routes>
            <Routes>
                <Route path="/suporte-notebook-lista" element={<SuporteNotebookLista />} />
            </Routes>
            <Routes>
                <Route path="/teclado-lista" element={<TecladoLista />} />
            </Routes>
            <Routes>
                <Route path="/editar-item/:idEdit" element={<EditItem />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes