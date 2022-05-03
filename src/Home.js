import './App.css';
import logoImg from './assets/grupostra_horizontal.png'
import { useState, useEffect } from 'react';
import axios from 'axios'
import Posts from './component/Posts';
import Pagination from './component/Pagination';

function Home() {
  var options = {
    item:[
      {
        category: "Notebook",
        link: "/notebook-lista"
      },
      {
        category: "Monitor",
        link: "/monitor-lista"
      },
      {
        category: "Gabinete",
        link: "/gabinete-lista"
      },
      {
        category: "Mouse",
        link: "/mouse-lista"
      },
      {
        category: "Teclado",
        link: "/teclado-lista"
      },
      {
        category: "Fone",
        link: "/fone-lista"
      },
      {
        category: "Suporte Monitor",
        link: "/suporte-monitor-lista"
      },
      {
        category: "Suporte Notebook",
        link: "/suporte-notebook-lista"
      },
      {
        category: "Mouse Pad",
        link: "/mousepad-lista"
      },
      {
        category: "Impressora",
        link: "/impressora-lista"
      },
      {
        category: "Telefone",
        link: "/telefone-lista"
      },
      {
        category: "Diversos",
        link: "/diversos-lista"
      }
    ]
  }

  const [hardware, setHardware] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = searchResults.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  useEffect(() => {
      axios.get("https://suporte.grupostra.com/api/get/hardware", {
      }).then(response => {
        setSearchResults(response.data)
        setHardware(response.data)
      }).catch(error => 
          console.log(error)
      )
  }, []);

  useEffect(() => {
    const results = hardware.filter(hardSearch =>
      hardSearch.colaborador.toLowerCase().includes(searchTerm)  
    );

    setSearchResults(results)
  }, [searchTerm]);

  function handleSelectFilter(e){
    let opt = e.target.value;
    if(opt === "all"){
      const all = hardware.filter(hardSearch =>
        hardSearch.colaborador  
      );
      setSearchResults(all)

    } else {
        const results2 = hardware.filter(hardSearch =>
          hardSearch.opt.includes(opt)  
        );
        setSearchResults(results2)
    }
  }

  return (
    <div className="App">
      <div className="container">
        <div className="logo_top">
          <img src={logoImg} alt=""/>
        </div>
        <div className="body_itens">
          {
            options.item.map((item, i) =>
              <a key={i} href={item.link}>{item.category}</a>
            )
          }
        </div>
        <div className="body_result">
          <div className="result_querys">
            <legend>Colaborador</legend>
            <input type="text" id="search_colaborator" onChange={(e) => setSearchTerm(e.target.value)} />
            <legend>Categorias</legend>
            <select name="category" id="category" onChange={(e) => handleSelectFilter(e)}>
              <option value="#" disabled selected>Selecione a categoria</option>
              {
                options.item.map((item, i) =>
                  <option key={i} value={item.category}>{item.category}</option>
                )
              }
              <option value="all">Todos</option>
            </select>
          </div>
          <div className="form">
            <table>
              <tr>
                <th>Item</th>
                <th>Colaborador</th>
                <th>Patrimônio</th>
                <th>Estado</th>
              </tr>
              <Posts posts={currentPosts} />
            </table>
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={hardware.length}
                paginate={paginate}
              />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
