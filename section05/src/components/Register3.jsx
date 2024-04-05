// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

import { useState, useRef } from "react";

function Register() {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const { name, birth, country, bio } = input;

  const countRef = useRef(0);
  const inputRef = useRef();

  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (input.name === "") {
      inputRef.current.focus();
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          ref={inputRef}
          name="name"
          placeholder={"이름"}
          onChange={onChange}
          value={name}
        />
      </div>

      <div>
        <input name="birth" type="date" onChange={onChange} value={birth} />
      </div>

      <div>
        <select name="country" value={country} onChange={onChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
        {country}
      </div>

      <div>
        <textarea
          name="bio"
          cols="30"
          rows="10"
          value={bio}
          onChange={onChange}
        />
      </div>
      <button>제출</button>
    </form>
  );
}

export default Register;
