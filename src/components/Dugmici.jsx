export default function Dugmici({ children, tekst, funk }) {
    funk = tekst;
    return (
      <>
        <button className="defaultButton" onClick={funk}>
          {children}
        </button>
      </>
    );
  }