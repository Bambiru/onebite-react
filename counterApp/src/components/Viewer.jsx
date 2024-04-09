function Viewer({ count }) {
  return (
    <section>
      <p>현재 카운트 :</p>
      <p className="font-semibold text-4xl my-4">{count}</p>
    </section>
  );
}

export default Viewer;
