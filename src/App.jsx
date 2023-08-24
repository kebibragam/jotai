import { useState } from "react";
import { useTranslation } from "react-i18next";
import { atom, useAtom } from "jotai";

import { light, dark, vars } from "./vars.css";

const themeAtom = atom(false);

function App() {
  const theme = useAtom(themeAtom);
  const { t } = useTranslation();
  const [count, setCount] = useState(0);
  return (
    <div
      className={theme ? dark : light}
      style={{ background: vars.colors.primary }}
    >
      <h1>Vite + {t("React")}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
