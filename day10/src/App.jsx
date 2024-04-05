import "./App.css";

function Welcome({ name, isMember }) {
  {
    return isMember ? (
      <div>{name}님 다시 오셨군요</div>
    ) : (
      <div>{name}님 가입하시겠어요 ?</div>
    );
  }
}

function App() {
  return (
    <>
      <button>true</button>
      <Welcome name={"밤비"} isMember={true} />
      <hr />
      <button>false</button>
      <Welcome name={"밤비"} isMember={false} />
    </>
  );
}

export default App;
