function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    
    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa)
    {
      section.innerHTML = "<h2> Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte<\h2>"
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada dado da pesquisa
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase();
      descricao = dado.descricao.toLowerCase();
      tags = dado.tags.toLowerCase();
      // Se o titulo includes campoPesquisa
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa))
      {
        // Cria o HTML para cada item do resultado
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">
            ${dado.descricao}
          </p>
           <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
        `; 
      }
    }

    if(!resultados)
    {
      resultados = "<h2>Nada foi encontrado</h2>"
    }
  
    //Insere os resultados na seção HTML
    section.innerHTML = resultados;
  }

//console.log(dados);
