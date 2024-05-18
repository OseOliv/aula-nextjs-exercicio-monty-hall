import Cartao from "@/components/Cartao";
import styles from "../styles/form.module.css";
import Link from "next/link";
import EntradaNumerica from "@/components/EntradaNumerica";
import { useState } from "react";

export default function Form() {
  const [qtdPortas, setQtdPortas] = useState(3);
  const [comPresente, setComPresente] = useState(1);

  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Cartao>

        <Cartao>
          <EntradaNumerica
            value={qtdPortas}
            onChange={(novaQtd) => setQtdPortas(novaQtd)}
            text="Qtd Portas?"
          />
        </Cartao>
      </div>
      <div>
        <Cartao>
          <EntradaNumerica
            value={comPresente}
            onChange={(novaPortaComPresente) =>
              setComPresente(novaPortaComPresente)
            }
            text="Porta com presente"
          />
        </Cartao>

        <Cartao bgcolor="#28a085">
          <Link className={styles.link} href={`/jogo/${qtdPortas}/${comPresente}`}>
            <h2>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  );
}
