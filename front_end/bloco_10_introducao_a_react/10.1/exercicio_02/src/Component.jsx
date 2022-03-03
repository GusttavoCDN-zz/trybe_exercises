import { Component } from "react";
import "./App.css";

class Content extends Component {
  render() {
    const conteudos = [
      {
        conteudo: "High Order Functions",
        bloco: 8,
        status: "Aprendido",
      },
      {
        conteudo: "Composicao de Componentes",
        bloco: 11,
        status: "Aprendendo",
      },
      {
        conteudo: "Composicao de Estados",
        bloco: 12,
        status: "Aprenderei",
      },
      {
        conteudo: "Redux",
        bloco: 16,
        status: "Aprenderei",
      },
    ];

    return (
      <main className="main">
        {conteudos.map(({ conteudo, bloco, status }) => {
          const content = `O conteúdo é ${conteudo}`;
          const statusT = `Status: ${status}`;
          const block = `Bloco: ${bloco}`;

          return (
            <div key={conteudo} className="card_div">
              <p className="content">{content}</p>
              <p className="status">{statusT}</p>
              <p className="block">{block}</p>
            </div>
          );
        })}
      </main>
    );
  }
}

export default Content;
