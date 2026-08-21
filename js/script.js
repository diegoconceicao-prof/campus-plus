// ======================================
// DADOS DOS PROJETOS
// ======================================

let projetos = [

    {
        nome: "EcoSchool",

        turma: "3DS",

        categoria: "Sustentabilidade",

        integrantes: "Ana, João e Pedro",

        descricao:
            "Sistema para incentivar práticas sustentáveis dentro da escola.",

        icone: "🌱"
    },


    {
        nome: "SmartClass",

        turma: "3DS",

        categoria: "Educação",

        integrantes: "Maria, Lucas e Gabriel",

        descricao:
            "Plataforma para organizar atividades e conteúdos escolares.",

        icone: "📚"
    },


    {
        nome: "GameLab",

        turma: "2DS",

        categoria: "Jogos",

        integrantes: "Carlos e Rafael",

        descricao:
            "Projeto de criação de jogos educativos para estudantes.",

        icone: "🎮"
    },


    {
        nome: "TechHelp",

        turma: "3DS",

        categoria: "Tecnologia",

        integrantes: "Pedro, Bruno e Lucas",

        descricao:
            "Sistema para auxiliar alunos com problemas de informática.",

        icone: "💻"
    }

];


// ======================================
// EXIBIR PROJETOS
// ======================================

function carregarProjetos() {

    const lista =
        document.getElementById("listaProjetos");


    if (!lista) {
        return;
    }


    lista.innerHTML = "";


    projetos.forEach(function(projeto, index) {

        lista.innerHTML += `

            <div class="col-md-6 col-lg-4">

                <div class="card project-card">

                    <div class="project-icon text-center">

                        ${projeto.icone}

                    </div>


                    <div class="card-body">

                        <span class="badge bg-primary mb-2">

                            ${projeto.categoria}

                        </span>


                        <h4>
                            ${projeto.nome}
                        </h4>


                        <p>
                            ${projeto.descricao}
                        </p>


                        <p>
                            <strong>Turma:</strong>
                            ${projeto.turma}
                        </p>


                        <p>
                            <strong>Integrantes:</strong>
                            ${projeto.integrantes}
                        </p>


                        <button
                            class="btn btn-primary"
                            onclick="verProjeto(${index})">

                            Ver detalhes

                        </button>

                    </div>

                </div>

            </div>

        `;

    });

}


// ======================================
// PESQUISAR PROJETOS
// ======================================

function pesquisarProjetos() {

    const campo =
        document.getElementById("campoPesquisa");


    const texto =
        campo.value.toLowerCase();


    const cards =
        document.querySelectorAll(".project-card");


    cards.forEach(function(card) {

        const conteudo =
            card.innerText.toLowerCase();


        if (conteudo.includes(texto)) {

            card.parentElement.style.display =
                "block";

        } else {

            card.parentElement.style.display =
                "none";

        }

    });

}


// ======================================
// VER PROJETO
// ======================================

function verProjeto(index) {

    const projeto =
        projetos[index];


    alert(

        "Projeto: " + projeto.nome +

        "\n\nCategoria: " +
        projeto.categoria +

        "\n\nTurma: " +
        projeto.turma +

        "\n\nIntegrantes: " +
        projeto.integrantes +

        "\n\nDescrição:\n" +
        projeto.descricao

    );

}


// ======================================
// EVENTOS
// ======================================

const eventos = [

    {
        nome: "Feira de Tecnologia",

        data: "25/09/2026",

        horario: "09:00",

        local: "Auditório",

        icone: "💻"
    },


    {
        nome: "Semana de Projetos",

        data: "30/09/2026",

        horario: "08:00",

        local: "Quadra da escola",

        icone: "🚀"
    },


    {
        nome: "Mostra Cultural",

        data: "10/10/2026",

        horario: "14:00",

        local: "Pátio",

        icone: "🎨"
    }

];


function carregarEventos() {

    const lista =
        document.getElementById("listaEventos");


    if (!lista) {
        return;
    }


    eventos.forEach(function(evento) {

        lista.innerHTML += `

            <div class="col-md-6 col-lg-4">

                <div class="card event-card h-100">

                    <div class="card-body">

                        <div class="fs-1 mb-3">
                            ${evento.icone}
                        </div>

                        <h4>
                            ${evento.nome}
                        </h4>

                        <p>
                            📅 ${evento.data}
                        </p>

                        <p>
                            🕐 ${evento.horario}
                        </p>

                        <p>
                            📍 ${evento.local}
                        </p>

                        <button
                            class="btn btn-primary"
                            onclick="participarEvento('${evento.nome}')">

                            Participar

                        </button>

                    </div>

                </div>

            </div>

        `;

    });

}


// ======================================
// PARTICIPAR DO EVENTO
// ======================================

function participarEvento(nome) {

    alert(
        "Inscrição realizada no evento:\n\n" +
        nome
    );

}


// ======================================
// AVISOS
// ======================================

const avisos = [

    {
        titulo: "Feira de Tecnologia",

        descricao:
            "A Feira de Tecnologia acontecerá no dia 25/09."
    },


    {
        titulo: "Entrega dos projetos",

        descricao:
            "A entrega dos projetos deverá ser realizada até 30/09."
    },


    {
        titulo: "Semana de Projetos",

        descricao:
            "Prepare seu projeto para a apresentação."
    }

];


function carregarAvisos() {

    const lista =
        document.getElementById("listaAvisos");


    if (!lista) {
        return;
    }


    avisos.forEach(function(aviso) {

        lista.innerHTML += `

            <div class="alert alert-primary">

                <strong>
                    📢 ${aviso.titulo}
                </strong>

                <br>

                ${aviso.descricao}

            </div>

        `;

    });

}


// ======================================
// CADASTRO DE PROJETO
// ======================================

const formulario =
    document.getElementById("formProjeto");


if (formulario) {

    formulario.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const nome =
                document.getElementById(
                    "nomeProjeto"
                ).value;


            const integrantes =
                document.getElementById(
                    "integrantes"
                ).value;


            const turma =
                document.getElementById(
                    "turma"
                ).value;


            const categoria =
                document.getElementById(
                    "categoria"
                ).value;


            const descricao =
                document.getElementById(
                    "descricao"
                ).value;


            const novoProjeto = {

                nome: nome,

                integrantes: integrantes,

                turma: turma,

                categoria: categoria,

                descricao: descricao,

                icone: "🚀"

            };


            projetos.push(novoProjeto);


            localStorage.setItem(
                "projetos",
                JSON.stringify(projetos)
            );


            alert(
                "Projeto cadastrado com sucesso!"
            );


            formulario.reset();

        }
    );

}


// ======================================
// CARREGAR PROJETOS DO LOCALSTORAGE
// ======================================

function carregarDadosSalvos() {

    const dados =
        localStorage.getItem("projetos");


    if (dados) {

        projetos =
            JSON.parse(dados);

    }

}


// ======================================
// MODO ESCURO
// ======================================

function alternarTema() {

    document.body.classList.toggle(
        "dark-mode"
    );


    const modoEscuro =
        document.body.classList.contains(
            "dark-mode"
        );


    localStorage.setItem(
        "tema",
        modoEscuro
    );

}


// ======================================
// CARREGAR TEMA
// ======================================

function carregarTema() {

    const tema =
        localStorage.getItem("tema");


    if (tema === "true") {

        document.body.classList.add(
            "dark-mode"
        );

    }

}


// ======================================
// EDITAR PERFIL
// ======================================

function editarPerfil() {

    const nome =
        prompt(
            "Digite seu nome:"
        );


    if (nome) {

        alert(
            "Perfil atualizado para: " +
            nome
        );

    }

}


// ======================================
// INICIALIZAÇÃO
// ======================================

carregarDadosSalvos();

carregarTema();

carregarProjetos();

carregarEventos();

carregarAvisos();