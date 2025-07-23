# 1. Cos'è React


### Prerequisiti
- Node.js
- Vite (for Scaffolding and locahost server). Serve anche a far funzionare il JSX (Cioè la possibilità di scrivere html in un file .js dato che questo fa React). Insomma questo permette di fare lo start del project `npm install vite`
- Alternative a Vite: Create React App, online tool
- 

### SetUp a Projects
- react.new in un qualsiasi browser e ci porta in una sandbox da cui è possibile sviluppare quello che mi pare.
  - Una volta scaricato il progetto poi lanciare sempre `npm install` per scaricare le dipendenze
- Versione Locale:
  - `npm create vite@latest nomeProgetto `
  - Seguire le istruzioni (Scegli React) (Scegli Javascript)
  - Spostarsi nella cartella del progetto e lanciare `npm install`. Installerà i node modules e la mappa per le dipendenze
  - Poi `npm run dev`
  - Successivamente cancellare quello che c'è nei vari css e jsx tranne il main
  
### Estensioni per React

1. ES7 React Redux
2. ES7 React Snippet

## Struttura del progetto React

* **Node Modules:** Contiene tutti i pacchetti necessari per far funzionare il progetto.
* **Public:** Contiene risorse pubbliche come la sitemap, il file robots.txt e la favicon.
* **Source:** Cartella principale dove si trova il codice del progetto.
* **.eslintrc.cjs:** File di configurazione per ESLint (strumento per il controllo dello stile del codice).
* **.gitignore:** Contiene i file e le cartelle che Git dovrebbe ignorare durante il controllo della versione.
* **index.html:** Punto di ingresso principale dell'applicazione web.
* **package.json:** Contiene metadati sul progetto, come dipendenze e script.
* **package-lock.json:** Registra le versioni esatte di tutte le dipendenze del progetto, plugin ecc.
* **README.md:** File di descrizione del progetto.
* **vite.config.js:** Configura Vite, il motore di build utilizzato.

**Source (approfondimento):**

* **Assets:** Contiene risorse come immagini e file SVG.
* **App.css/App.jsx:** File CSS e JSX (una estensione di JavaScript) correlati
* **index.css:** Fogli di stile per l'index.html
* **main.jsx:** Il file principale dell'applicazione, scritto in JSX.


# 2. I componenti
Il primo componente che vediamo è proprio App()

## Componenti in React (in Lezione 1)

* **Cos'è un componente?** Un blocco di codice riutilizzabile che definisce una parte dell'interfaccia utente. Pensa ai componenti come a dei "mattoncini" che puoi combinare per costruire interfacce più complesse.
* **Perché usare i componenti?** Evitare la ripetizione di codice, rendendo il tuo progetto più organizzato e facile da mantenere.
* **Componenti in React:** Implementati come funzioni JavaScript che restituiscono JSX (simile all'HTML). In sostanza sono funzioni PURE che renderizzano dell'html
* **Componente come classe** Questo approccio è andato in disuso in REACT. Il concetto di classe è identico a quello della OOP
* **Esempi di componenti:** `Navbar` e `Link`
* **Componenti annidati:** Possono contenere altri componenti per creare strutture complesse.
* **Passare dati ai componenti:** Usare "props" per personalizzare i componenti.
* **Children:** Inserire elementi all'interno dei tag di un componente per accedervi tramite la prop `children`.

### Regole per component 
1. Mai definire un component dentro un altro component. Posso sempre utilizzare invece un component dentro l'altro 
2. Il `return()` di una funzione deve restituire SEMPRE un solo elemento radice
   ES: 
   ```html
   <div>
   <section></section>
   </div>

   ```
3. Se ho la necessità di passare più elementi posso utilizzare i frammenti ` <> </> ` a wrappare del codice al posto di utilizzare sempre `<div> ` o `<span> `
```html
    <>
    <nav></nav>
    <section></section>
    </>
```

## Utilizzo delle {}
Le { } sono necessarie per inserire codice JS all'interno dei nostri component

## Template Literals per utilizzo di classi dinamiche
Posso avere delle fusioni di stringhe e codice, per poterlo fare uso le { }

```
  className={`box rounded ${x < 11 ? "rotated": ""}`}
```

# 3. Props in React

In React, **props** (abbreviazione di "properties") sono un meccanismo per passare dati da un componente genitore a un componente figlio. Da considerarsi come argomenti di funzioni per i componenti React.


* **Passaggio di dati:** Le props consentono di rendere i componenti dinamici e riutilizzabili, passando loro informazioni specifiche.
* **Solo lettura:** Le props sono "read-only" (solo lettura) all'interno del componente figlio. Un componente figlio non può modificare le props che riceve.
* **Comunicazione unidirezionale:** I dati fluiscono in una sola direzione, dal genitore al figlio.

**Come si usano:**

1.  **Passaggio di props dal componente genitore:**

    ```jsx
    function ComponenteGenitore() {
      const messaggio = "Ciao dal genitore!";
      return <ComponenteFiglio testo={messaggio} />;
    }
    ```

2.  **Ricezione di props nel componente figlio:**

    ```jsx
    function ComponenteFiglio(props) {
      return <p>{props.testo}</p>;
    }
    ```

    * Nel componente figlio, le props vengono ricevute come un oggetto.
    * Si accede ai valori delle props utilizzando `props.nomeProp`.

**Esempio :**

```jsx
function Profilo(props) {
  return (
    <div>
      <h2>{props.nome}</h2>
      <p>Età: {props.eta}</p>
      <p>Città: {props.citta}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Profilo nome="Mario Rossi" eta={30} citta="Roma" />
      <Profilo nome="Laura Bianchi" eta={25} citta="Milano" />
    </div>
  );
}
```

### Utilizzo proprietà `children` 

In React, `children` è una prop speciale utilizzata per passare elementi o componenti figli all'interno di un componente genitore. In pratica, rappresenta tutto ciò che viene inserito tra i tag di apertura e chiusura di un componente.

**Cos'è `children`?**

* `children` è una prop che un componente riceve automaticamente quando contiene altri elementi o componenti al suo interno.
* Consente di creare componenti riutilizzabili e flessibili che possono contenere contenuti dinamici.
* Può essere qualsiasi cosa: testo, elementi HTML, altri componenti React o una combinazione di essi.

**Come si usa `children`?**

1.  **Passaggio di `children`:**

    * Quando inserisci elementi o componenti all'interno di un componente, questi vengono automaticamente passati come prop `children`.
    * Esempio:

        ```jsx
        function Contenitore(props) {
          return (
            <div style={{ border: '1px solid black', padding: '10px' }}>
              {props.children}
            </div>
          );
        }

        function App() {
          return (
            <Contenitore>
              <h1>Titolo</h1>
              <p>Testo del contenuto.</p>
            </Contenitore>
          );
        }
        ```

    * In questo esempio, `<h1>Titolo</h1>` e `<p>Testo del contenuto.</p>` sono passati come `children` al componente `Contenitore`.

2.  **Rendering di `children`:**

    * Per visualizzare i `children` all'interno del componente, si utilizza `props.children`.
    * Nel componente `Contenitore` dell'esempio precedente, `{props.children}` viene utilizzato per inserire gli elementi figli all'interno del `div`.


### Rendering Condizionale

  In React, l'operatore logico `&&` (AND logico) è spesso utilizzato per la renderizzazione condizionale di elementi JSX. Questa tecnica sfrutta il comportamento "short-circuiting" dell'operatore `&&` in JavaScript.

  #### Come Funziona

  * **Valutazione da sinistra a destra**: JavaScript valuta l'espressione a sinistra di `&&`.
  * Se l'espressione a sinistra è "truthy" (cioè, un valore che JavaScript considera vero, come `true`, un numero diverso da zero, una stringa non vuota, o un oggetto), allora JavaScript valuta anche l'espressione a destra di `&&`.
  * Se l'espressione a sinistra è "falsy" (cioè, un valore che JavaScript considera falso, come `false`, `0`, `""`, `null`, o `undefined`), allora JavaScript interrompe la valutazione e restituisce il valore falsy. L'espressione a destra non viene valutata.
  * **Renderizzazione condizionale**: In React, puoi sfruttare questo comportamento per renderizzare condizionalmente elementi JSX.
    * Se la condizione a sinistra di `&&` è vera, l'elemento JSX a destra viene renderizzato.
    * Se la condizione a sinistra è falsa, l'elemento JSX a destra non viene renderizzato.

  #### Esempio

  ```javascript
  function MyComponent({ isLoggedIn }) {
    return (
      <div>
        {isLoggedIn && <p>Benvenuto, utente loggato!</p>}
        <p>Questo testo viene sempre visualizzato.</p>
      </div>
    );
  }
  ```

# 4. Gestione degli Eventi

In React, la gestione degli eventi si basa sulla sintassi degli eventi del DOM (Document Object Model), ma con alcune differenze chiave rispetto a JS. 

**Punti chiave:**

* **Sintassi CamelCase**: Gli eventi React sono definiti usando `camelCase`.
* **Gestori di eventi come funzioni**: I gestori di eventi sono funzioni e non stringhe.
* **Eventi sintetici**: React avvolge gli eventi nativi del browser in eventi sintetici per garantire la coerenza tra i browser.

**Esempio:**

```javascript
import React, { useState } from 'react';

function EventoEsempio() {
  const [testo, setTesto] = useState('');

  const gestisciClick = (event) => {
    setTesto('Pulsante cliccato!');
    console.log(event); //stampa l'evento sintetico
  };

  return (
    <div>
      <button onClick={gestisciClick}>Clicca qui</button>
      <p>{testo}</p>
    </div>
  );
}

export default EventoEsempio;
```

# 5. State dei component

In React, lo **state** è un oggetto che rappresenta i dati interni di un componente e che possono cambiare nel tempo. È il modo in cui un componente "ricorda" le informazioni e reagisce alle interazioni dell'utente o ad altri eventi.

Punti chiave:

* **Dati Dinamici**: Lo state contiene dati che possono essere modificati, a differenza delle props (proprietà), che sono immutabili e passate da un componente genitore.
* **Gestione dell'Interattività**: Lo state è fondamentale per creare componenti interattivi. Quando lo state cambia, React aggiorna l'interfaccia utente (UI) per mostrare le nuove informazioni.
* **useState Hook**: Nei componenti funzionali, lo state viene gestito utilizzando l'hook `useState`. Questo hook ti consente di dichiarare variabili di stato e funzioni per aggiornarle.
* **Aggiornamento dello State**: Per modificare lo state, si utilizza una funzione di aggiornamento fornita da `useState`. Non si deve mai modificare lo state direttamente.
* **Rendicizzazione**: Quando lo state cambia, React esegue di nuovo il rendering del componente, aggiornando l'interfaccia utente con i nuovi dati.

In sintesi, lo state consente ai componenti React di essere dinamici e reattivi, reagendo ai cambiamenti e fornendo una UX interattiva.


# 6. Passaggio dati Child -> Parent

In React, il passaggio di informazioni da un componente figlio a un componente genitore avviene principalmente attraverso l'utilizzo di funzioni callback.

## Concetto Fondamentale

* **Callback del Genitore:**
    * Il componente genitore definisce una funzione che gestirà i dati ricevuti dal figlio.
* **Chiamata del Figlio:**
    * Il componente figlio invoca la funzione callback ricevuta come "prop", passando i dati desiderati come argomenti.
    * Il genitore riceve i dati e li elabora di conseguenza.
    * Questa funzione viene passata come "prop" al componente figlio.

## Esempio di Codice

```jsx

function Genitore() {
  const [messaggioDalFiglio, setMessaggioDalFiglio] = useState('');

  const gestisciMessaggioDalFiglio = (messaggio) => {
    setMessaggioDalFiglio(messaggio);
  };

  return (
    <div>
      <h1>Componente Genitore</h1>
      <p>Messaggio dal Figlio: {messaggioDalFiglio}</p>
      <Figlio onMessaggioInviato={gestisciMessaggioDalFiglio} />
    </div>
  );
}

// Componente Figlio
function Figlio({ onMessaggioInviato }) {
  const inviaMessaggioAlGenitore = () => {
    onMessaggioInviato('Ciao Genitore, questo è un messaggio dal figlio!');
  };

  return (
    <div>
      <h2>Componente Figlio</h2>
      <button onClick={inviaMessaggioAlGenitore}>Invia Messaggio al Genitore</button>
    </div>
  );
}
```

# Appunti Gestione di Form in React (Figlio-Genitore)

## Obiettivo

* Gestire un form in un componente figlio e visualizzare i dati nel componente genitore.
* Utilizzare una funzione `handleChange` per una gestione più pulita degli eventi `onChange`.

## Componente Figlio (Form.js)

* **`useState` con oggetto:**
    * Utilizzo di un oggetto per `formData` per gestire più campi di input in modo efficiente.
    * Esempio:

    ```jsx
    const [formData, setFormData] = useState({ nome: '', cognome: '' });
    ```

* **`handleChange(e)`:**
    * Funzione centralizzata per gestire gli eventi `onChange` di tutti gli input (VANTAGGIOSO rispetto all'utilizzo dei useRef per fare la stessaa cosa solo all'esecuzione del onSubmit).
    * Utilizzo della destrutturazione (`const { name, value } = e.target;`) per ottenere il nome e il valore dell'input.
    * Aggiornamento dello stato `formData` con la sintassi spread per preservare gli altri campi.
    * Gestione dinamica dei valori tramite la prop name dei tag input.
    * Esempio:

    ```jsx
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
    ```

* **`handleSubmit(e)`:**
    * Previene il comportamento predefinito del form (`e.preventDefault();`).
    * Chiama la funzione `onFormSubmit` del genitore, passando l'oggetto `formData`.
    * Esempio:

    ```jsx
    const handleSubmit = (e) => {
      e.preventDefault();
      onFormSubmit(formData);
    };
    ```

* **`onFormSubmit` (prop):**
    * Funzione ricevuta dal genitore per comunicare i dati del form.

OSS: le funzioni in gioco sono 4: 
  1. `onFormSubmit` prop che ha il nome della funzione nel parent
  2. `useState()` per settare lo stato del mio component e quindi anche come dovrà essere fatto l'oggetto da passare alla funzione del parent
  3. `handleChange()` che gestisce il change sui singoli campi input del form
  4. `handleSubmit()`questa permette il passaggio dell'informazione verso il parent attraverso il prop e manda tutto in `preventDefault`

```javascript
import React, { useState } from 'react';

function Form({ onFormSubmit }) {
  const [formData, setFormData] = useState({
    nome: '',
    cognome: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
        />
      </label>
      <label>
        Cognome:
        <input
          type="text"
          name="cognome"
          value={formData.cognome}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Invia</button>
    </form>
  );
}

export default Form;
```

## Component Parent
```javascript
import React, { useState } from 'react';
import Form from './Form';

function App() {
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div>
      <Form onFormSubmit={handleFormSubmit} />
      {formData && (
        <div>
          <h2>Dati Inviati:</h2>
          <p>Nome: {formData.nome}</p>
          <p>Cognome: {formData.cognome}</p>
        </div>
      )}
    </div>
  );
}

export default App;
```

# useEffect in React

In React, `useEffect` è un Hook che ti permette di eseguire "effetti collaterali" all'interno dei componenti funzionali. Gli effetti collaterali sono azioni che avvengono al di fuori del normale flusso di rendering di un componente, come:

* Recupero di dati da un'API: Quando devi caricare informazioni da un server esterno.
* Modifiche al DOM: Per interagire direttamente con gli elementi HTML della pagina.
* Impostazione listener: Ad esempio, per monitorare eventi del browser o per connettersi a un WebSocket.
* Aggiornamento del titolo del documento: Per mostrare informazioni dinamiche nella barra del titolo del browser.
* Gestione Cookie

In sostanza è tutto ciò che non viene mandato a schermo, che accade dietro le quinte

## A cosa serve useEffect?

`useEffect` serve a gestire questi effetti collaterali in modo dichiarativo all'interno dei componenti React. Invece di eseguire questi effetti direttamente nel corpo del componente, che verrebbe eseguito a ogni rendering, `useEffect` ti permette di specificare quando e come questi effetti devono essere eseguiti.

## Come funziona useEffect?

`useEffect` accetta due argomenti:

1.  **Una funzione di "effetto":** Questa funzione contiene il codice che esegue l'effetto collaterale.
2.  **Un array di "dipendenze" (opzionale):** Questo array specifica quali valori devono cambiare per far sì che l'effetto venga rieseguito.

## Esempi

* **Recupero di dati:**

    ```javascript
    import React, { useState, useEffect } from 'react';

    function DatiUtente({ idUtente }) {
      const [dati, setDati] = useState(null);

      useEffect(() => {
        fetch(`https://api.example.com/utenti/${idUtente}`)
          .then(response => response.json())
          .then(dati => setDati(dati));
      }, [idUtente]); // L'effetto viene rieseguito solo se idUtente cambia

      if (!dati) {
        return <div>Caricamento...</div>;
      }

      return (
        <div>
          <h2>{dati.nome}</h2>
          <p>{dati.email}</p>
        </div>
      );
    }
    ```

* **Aggiornamento del titolo del documento:**

    ```javascript
    import React, { useEffect } from 'react';

    function Contatore({ conteggio }) {
      useEffect(() => {
        document.title = `Conteggio: ${conteggio}`;
      }, [conteggio]); // Il titolo viene aggiornato solo se conteggio cambia

      return <div>{conteggio}</div>;
    }
    ```

* **Pulizia (cleanup):**
    * Se l'effetto collaterale crea abbonamenti o listener, è importante pulirli quando il componente viene smontato o quando l'effetto viene rieseguito. Puoi farlo restituendo una funzione di "pulizia" dalla funzione di effetto.

    ```javascript
    useEffect(() => {
      const handleResize = () => {
        console.log('Dimensioni della finestra cambiate');
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    ```

In sintesi, `useEffect` è uno strumento fondamentale per gestire gli effetti collaterali nei componenti React, permettendo di mantenere il codice pulito e organizzato.

# Tip & Tricks

* ### Installazione di bootstrap
  Da terminale: `npm install bootstrap@latest`.
  Nel main.jsx `import 'bootstrap/dist/css/bootstrap.min.css';`
  Da questo momento posso utilizzare le classi di Bootstrap senza problemi ricordandosi che il termine class deve essere sostituito da className altrimenti produce errori


* ### React Developer Tool
  Strumento utile per il debug di app
  https://chromewebstore.google.com/detail/react-developer-tools/
  è un plugin per Chrome, funziona come l'ispeziona del browser

* ### Installazione di React Bootstrap
  Aggiungere descrizione 

* ### Installazione e utilizzo di Tailwind
  Aggiungere descrizione
