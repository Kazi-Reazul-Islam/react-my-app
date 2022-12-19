import React, { useRef } from "react";

const HomeBanner = () => {
  let userName = useRef();
  let userPass = useRef();

  const submitForm = () => {
    let getUserName = userName.current.value;
    let getUserPass = userPass.current.value;

    alert(getUserName);
    alert(getUserPass);
  };

  return (
    <div>
      <input ref={userName} type="text" placeholder="User Name" />
      <br /> <br />
      <input ref={userPass} type="password" placeholder="User Password" />
      <br /> <br />
      <button onClick={submitForm}>Send</button>
    </div>
  );
};

export default HomeBanner;
