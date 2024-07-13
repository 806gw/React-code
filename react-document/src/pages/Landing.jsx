import { Link } from "react-router-dom";

const Landing = () => {
  const JsxIntro = <Link to="/jsxIntro">JSX 소개 코드</Link>;
  const ElementLender = <Link to="/elementLender">엘리먼트 렌더링</Link>;

  return (
    <>
      <div>
        {JsxIntro}
        {ElementLender}
      </div>
    </>
  );
};
export default Landing;
