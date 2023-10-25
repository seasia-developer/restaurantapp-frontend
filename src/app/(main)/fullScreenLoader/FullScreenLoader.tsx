import React from 'react';
import style from "./loader.module.scss";
import { Spinner } from "react-bootstrap";

export default function FullScreenLoader() {
  return (
    <div className={style.loaderMain}>
        <Spinner animation="border" variant="danger" />
    </div>
  )
}
