import React from "react";
import "../../styles/JsxIntro.css";
import ExampleImg from "../../logo.svg";

const JsxIntro = () => {
  const name = "react"; // example 1

  const formatName = (user) => {
    return user.firstName + " " + user.lastName;
  };

  const user = {
    firstName: "react",
    lastName: "js",
  }; // example 2

  const link = (
    <a href="https://ko.legacy.reactjs.org/">
      This link is react document web page.
    </a>
  ); // example 3

  const img = <img src={ExampleImg} alt="react logo" />; // example 4

  const element = (
    <div>
      <p className="greeting">Hello!</p>
      <p>I'm react. Happy coding !</p>
    </div>
  ); // example 5

  const otherElement = React.createElement(
    // js => document.createElement / react => React.createElement
    `p`,
    { className: "greeting" },
    "Hello! this code is React.createElement()."
  );

  return (
    <>
      <div className="example 1">Hello! my name is {name}.</div>
      {/* 변수를 사용한 후, 중괄호로 감싸 사용 가능합니다. */}
      <div className="example 2">Hello! my name is {formatName(user)}.</div>
      {/* 함수와 객체를 이용하여 표현 가능합니다. */}
      <div className="example 3">{link}</div>
      {/* 어트리뷰트에 따옴표를 이용해 문자열 리터럴을 정의할 수 있습니다. */}
      <div className="example 4">{img}</div>
      {/* 이미지는 중괄호를 이용하여 삽입할 수 있습니다. */}
      <div className="example 5">{element}</div>
      {/* JSX 태그는 자식을 포함할 수 있습니다. */}
      <div className="example 6">{otherElement}</div>
      {/* Babel은 JSX를 React.createElement */}
    </>
  );
};
export default JsxIntro;
