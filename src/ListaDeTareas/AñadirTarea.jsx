import { React, useRef } from "react"

function AñadirTarea({ children }) {
  const lst = []
  const inputEl = useRef(null);

  const clic = (event) => {
    event.preventDefault();
    lst.push(inputEl.current.value)
  };

  return (
    <form action="">
      <input
        type="input"
        ref={inputEl}
      />
      <button onClick={clic}>{children}</button>
    </form>
  );
}

export { AñadirTarea }