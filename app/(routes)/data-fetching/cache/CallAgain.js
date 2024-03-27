"use client";

import { goGetData } from "@/actions/goGetData";
import { goGetDataFetch } from "@/actions/goGetDataFetch";

import { useState } from "react";

export default function CallAgain() {
  const [res, setRes] = useState({ NONE: "NONE" });

  const onClick = async () => {
    setRes({ status: "API 응답 기다리는 중..." });
    const data = await goGetData();
    console.table(data);
    setRes(data);
  };

  const [res2, setRes2] = useState({ NONE: "NONE" });
  const onClick2 = async () => {
    setRes2({ status: "API 응답 기다리는 중..." });
    const data = await goGetDataFetch();
    console.table(data);
    setRes2(data);
  };

  return (
    <div>
      <h2>
        (AXIOS) 이 API CALL은 응답까지 5초 후에 돌아오도록 설계되어 있습니다.
      </h2>
      <p>더 빠르게 돌아온다면 캐싱된 값이 돌아오는 것 입니다.</p>
      <button onClick={onClick}>GO TEST</button>
      <div>
        <p>{JSON.stringify(res)}</p>
      </div>
      <hr />
      <h2>
        (fetch) 이 API CALL은 응답까지 5초 후에 돌아오도록 설계되어 있습니다.
      </h2>
      <p>더 빠르게 돌아온다면 캐싱된 값이 돌아오는 것 입니다.</p>
      <button onClick={onClick2}>GO TEST</button>
      <div>
        <p>{JSON.stringify(res2)}</p>
      </div>
    </div>
  );
}
