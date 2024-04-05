function Main() {
  const user = {
    name: "밤비",
    isLogin: true,
  };
  return (
    <>
      {user.isLogin ? (
        <div>
          <p>{user.name}님 안녕하세요</p>
          <p>로그아웃</p>
        </div>
      ) : (
        <div>로그인</div>
      )}
    </>
  );
}

export default Main;
