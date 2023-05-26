/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Emotion1() {
  return (
    <>
      <h1
        css={css`
          color: red;
        `}
      >
        {/* 普通の要素にはsxが使えない */}
        Hello, world!
      </h1>
    </>
  );
}

export default Emotion1;
