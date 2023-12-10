import { useContext } from "react";
import _ from "lodash";
import { termContext } from "../Terminal";

const Fun: React.FC = () => {
  const { history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = _.split(history[0], " ");

  /* ===== check current command makes redirect ===== */
  if (rerender && currentCommand[0] === "fun") {
    window.open("https://fun.idot07.repl.co/fun", "_blank");
  }

  return <span></span>;
};

export default Fun;
