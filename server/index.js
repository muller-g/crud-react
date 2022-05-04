const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

const db = mysql.createPool({
    host: "0000000",
    user: "000",
    password: "0000",
    database: "0000",
})

app.use(cors());
app.use(express.json()) //permite pegar os valores do front
app.use(bodyParser.urlencoded({extended: true}))


/* GET */
app.get("/api/get/hardware", (req, res) => {
    const sqlSelect = "SELECT * FROM hardware";
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    })
});

app.get("/api/get/hardware/:opt", (req, res) => {
    const opt = req.params.opt
    const sqlSelect = "SELECT * FROM hardware WHERE opt = ?";

    db.query(sqlSelect, [opt], (err, result) => {
        res.send(result)
    })
});

app.get("/api/get-update/hardware/:id", (req, res) => {
    const id = req.params.id
    const sqlSelect = "SELECT * FROM hardware WHERE id = ?";

    db.query(sqlSelect, [id], (err, result) => {
        res.send(result)
    })
});

/* PUT */
app.put("/api/set-update/hardware/:id", (req, res) => {
    const id = req.params.id
    const dbNome = req.body.dbNome
    const dbMarca = req.body.dbMarca
    const dbProcessador = req.body.dbProcessador
    const dbArmazenamento = req.body.dbArmazenamento
    const dbMemoria = req.body.dbMemoria
    const dbPlacaVideo = req.body.dbPlacaVideo
    const dbEstado = req.body.dbEstado
    const dbNumeroPatrimonio = req.body.dbNumeroPatrimonio
    const dbColaborador = req.body.dbColaborador
    const dbFio = req.body.dbFio
    const dbTamanho = req.body.dbTamanho
    const sqlUpdate = "UPDATE hardware SET nome = ?, marca = ?, processador = ?, armazenamento = ?, memoria = ?, placa_video = ?, estado = ?, numero_patrimonio = ?, colaborador = ?, fio = ?, tamanho = ? WHERE id = ?";

    db.query(sqlUpdate, [dbNome, dbMarca, dbProcessador, dbArmazenamento, dbMemoria, dbPlacaVideo, dbEstado, dbNumeroPatrimonio, dbColaborador, dbFio, dbTamanho, id], (err, result) => {})

});
/* POST */

app.post("/api/insert/hardware", (req, res) => {
    const dbNome = req.body.dbNome
    const dbMarca = req.body.dbMarca
    const dbProcessador = req.body.dbProcessador
    const dbArmazenamento = req.body.dbArmazenamento
    const dbMemoria = req.body.dbMemoria
    const dbPlacaVideo = req.body.dbPlacaVideo
    const dbEstado = req.body.dbEstado
    const dbNumeroPatrimonio = req.body.dbNumeroPatrimonio
    const dbColaborador = req.body.dbColaborador
    const dbFio = req.body.dbFio
    const dbTamanho = req.body.dbTamanho
    const dbOpt = req.body.dbOpt

    const sqlInsert = "INSERT INTO hardware (nome, marca, processador, armazenamento, memoria, placa_video, estado, numero_patrimonio, colaborador, fio, tamanho, opt) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)";
    db.query(sqlInsert, [dbNome, dbMarca, dbProcessador, dbArmazenamento, dbMemoria, dbPlacaVideo, dbEstado, dbNumeroPatrimonio, dbColaborador, dbFio, dbTamanho, dbOpt], (err, result) => {})
});


/* DELETE */

app.delete('/api/delete/hardware/:id', (req, res) => {
    const id = req.params.id

    const sqlDelete = "DELETE FROM hardware WHERE id = ?";
    db.query(sqlDelete, id)
})

app.listen(3001, () => {
    console.log("Tudo ok!")
})
