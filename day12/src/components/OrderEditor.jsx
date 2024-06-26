// src/components/OrderEditor.jsx

import { useRef } from "react";
import { useState } from "react";

const OrderEditor = () => {
  const [orderMenu, setOrderMenu] = useState({
    menu: "",
    address: "",
    request: "",
  });

  const { menu, address, request } = orderMenu;
  const addressRef = useRef();

  const onSubmit = () => {
    if (address === "") {
      addressRef.current.focus();
    } else {
      alert(
        `주문이 완료되었습니다. 메뉴 : ${menu}, 주소 : ${address} , 요청사항:${request}`
      );
    }
  };

  const setChangeMenu = (e) => {
    setOrderMenu({ ...orderMenu, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <h2>배달의민족 주문</h2>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>메뉴 선택</div>
        <select
          style={{ width: 300, padding: 5 }}
          name="menu"
          value={menu}
          onChange={setChangeMenu}
        >
          <option value={"족발"}>족발</option>
          <option value={"떡볶이"}>떡볶이</option>
          <option value={"아이스크림"}>아이스크림</option>
          <option value={"샐러드"}>샐러드</option>
        </select>
      </div>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>배달 주소</div>
        <input
          ref={addressRef}
          style={{ width: 300, padding: 5 }}
          placeholder="주소) 서울특별시 xx동 .."
          name="address"
          value={address}
          onChange={setChangeMenu}
        />
      </div>
      <div>
        <div style={{ marginBottom: 5, fontSize: 14 }}>배달 요청사항</div>
        <textarea
          style={{ width: 300, padding: 5 }}
          placeholder="배달 요청사항을 써 주세요..."
          name="request"
          value={request}
          onChange={setChangeMenu}
        />
      </div>
      <div>
        <button onClick={onSubmit} style={{ width: 300, padding: 5 }}>
          주문 완료
        </button>
      </div>
    </div>
  );
};

export default OrderEditor;
