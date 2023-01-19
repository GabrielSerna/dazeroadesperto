*** React *** è una libreria, Angular e VJS sono dei framework

*** render() ***
è la funzione che restituisce il contenuto che si vuole mostrare nella pagina. questa funzione si aspetta come valore di ritorno **un solo elemento**

const Componente = () => {
  return (
    <>
      <div>
        componente 1
      </div>
      <div>
        componente2 
      </div>
    </>
  );
};

export default Componente;

*** VIRTUAL DOM ***
è la rappresentazione virtuale della struttura della pagina. React interviene su questa ed è estremamente veloce rispetto alla DOM. Inoltre siamo indipendenti dal browser in quanto pensa a tutto React.

*** LO STATE ***
React attribuisce a ciscun componente un oggetto Javascript che rappresenta lo stato.
L'oggetto appartiene al componente ed è privato: è possibile consentirne l'inizializzazione accentanto valori in input tramite **porps**
per modificare l'oggetto si usa la funzione **setState()**