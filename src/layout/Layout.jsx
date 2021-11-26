import React from "react";
import style from './layout.module.css';

const Layout = props => {
  const {children} = props;

  return (
    <div className={style.layout}>
      <header className={style.header}></header>

      <aside className={style.aside}></aside>

      <main className={style.main}></main>

      <footer className={style.footer}></footer>
    </div>
  );
};

export default Layout;