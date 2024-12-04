import React from 'react'
import { TailSpin } from "react-loader-spinner";

export const Loader = () => {
  return (
    <>
      <TailSpin
        visible={true}
        height="80"
        width="80"
        color="#F8CB46"
        ariaLabel="tail-spin-loading"
        radius="5"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </>
  );
}
