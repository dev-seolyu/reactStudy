import './App.css';

function AppJSX() {
  const name = '설유';
  const list = ['우유', '딸기', '바나나', '요거트'];

  return (
    <>
      <h1 className="orange">{`Hello! ${name}`}</h1>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default AppJSX;
