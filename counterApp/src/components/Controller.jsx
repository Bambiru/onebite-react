function Controller({ onClickButton }) {
  const buttonStyle = `bg-gray-200 border border-gray-500 px-1 rounded-md`;

  return (
    <section className="flex gap-2">
      <button
        className={buttonStyle}
        onClick={() => {
          onClickButton(-1);
        }}
      >
        -1
      </button>
      <button
        className={buttonStyle}
        onClick={() => {
          onClickButton(-10);
        }}
      >
        -10
      </button>
      <button
        className={buttonStyle}
        onClick={() => {
          onClickButton(-100);
        }}
      >
        -100
      </button>
      <button
        className={buttonStyle}
        onClick={() => {
          onClickButton(100);
        }}
      >
        +100
      </button>
      <button
        className={buttonStyle}
        onClick={() => {
          onClickButton(10);
        }}
      >
        +10
      </button>
      <button
        className={buttonStyle}
        onClick={() => {
          onClickButton(1);
        }}
      >
        +1
      </button>
    </section>
  );
}

export default Controller;
