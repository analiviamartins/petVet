function verificarCampos(){
    let tutor= document.getElementById("tutor").value;
    let nome= document.getElementById("nome").value;
    let especie= document.getElementById("especie").value;
    let foto= document.getElementById("foto").value;
    let data= document.getElementById("data").value;

    console.log({tutor});
    console.log({nome});
    console.log({especie});
    console.log({foto});
    console.log({data});

    if(tutor == "" || nome == "" || especie == "" || foto == "" || data == ""){
        console.log("Preencha todos os campos!")
        return true;
    }else{
        console.log("Cadastrado!")
        return false;
    }
}

function mostrarMsg(msg, tipo){
    let msgIndex= document.getElementById("msg");
    msgIndex.innerHTML = "";

    let msgTela = `
        <p class='${tipo}'>${msg}</p>
    `
    msgIndex.innerHTML += msgTela;

    setTimeout(function () {
        msgIndex.innerHTML = "";
    }, 3000)
}

function calcIdade(data) {
    let date = new Date,
        ano_atual = date.getFullYear(),
        mes_atual = date.getMonth() + 1,
        dia_atual = date.getDate(),
        split = data.split('/'),
        novadata = split[1] + "/" +split[0]+"/"+split[2],
        data_americana = new Date(novadata),
        vAno = data_americana.getFullYear(),
        vMes = data_americana.getMonth() + 1,
        vDia = data_americana.getDate(),
        ano_aniversario = +vAno,
        mes_aniversario = +vMes,
        dia_aniversario = +vDia,
        quantos_anos = ano_atual - ano_aniversario;
    if (mes_atual < mes_aniversario || mes_atual == mes_aniversario && dia_atual < dia_aniversario) {
        quantos_anos--;
    }
    return quantos_anos < 0 ? 0 : quantos_anos;
}

function isURLValida(url) {
    if(url.match(/\.(jpeg|jpg|gif|png)$/) != null){
        return true;
    } else {
        return false;
    }
}

class Animal{
    constructor(tutor, nome, especie, foto, data){
        this.tutor = tutor;
        this.nome = nome;
        this.especie = especie;
        this.foto = foto;
        this.data = data;
    }
}

function comporAnimal(){
    let tutor= document.getElementById("tutor").value;
    let nome= document.getElementById("nome").value;
    let especie= document.getElementById("especie").value;
    let foto= document.getElementById("foto").value;
    let data= document.getElementById("data").value;

    const animal = new Animal(tutor, nome, especie, foto, data);

    bibliotecaAnimais.add(animal);

    renderizarCampos();
}

const animal = new Animal(tutor, nome, especie, foto, data);

class Animais{
    constructor(){
        this.animaisArray = [];
    }
    addAnimais(animal){
        if (verificarCampos()) {
            mostrarMsg("Preencha todos os campos", "erro");
        } else {
            this.animaisArray.push(animal);
            limparCampos();
            mostrarMsg("Cadastrado com sucesso", "sucesso")
            console.log(this.animaisArray);
        }
    }
}

const bibliotecaAnimais= new Animais();
console.log(bibliotecaAnimais);

function limparCampos(){
    document.getElementById("tutor").value = "";
    document.getElementById("nome").value = "";
    document.getElementById("especie").value = "";
    document.getElementById("foto").value = "";
    document.getElementById("data").value = "";
}

function renderizarCampos() {
    const listaHTML = document.getElementById('containerResult');
    listaHTML.innerHTML = '';

    let array = bibliotecaAnimais.animaisArray;

    console.log(array);
    array.forEach(animal => {
        const animalDiv = `
            <div class='animalDetalhe'>
                <h2>Tutor: ${animal.tutor}</h2>
                <p>Nome do Pet: R$${animal.nome}</p>
                <p>Espécie: ${animal.especie}</p>
                <p>Data de Nacimento: ${animal.data}</p>
                <img src="${animal.data}" alt="${animal.especie}">
            </div>
       `;

        listaHTML.innerHTML += animalDiv;
    });
}