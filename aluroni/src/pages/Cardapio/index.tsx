import styles from "./Cardapio.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg"; /* Técnica para imports mais inteligentes: 
                                                                    absolute import */

export default function Cardapio() {
  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav>
    </main>
  );
}
