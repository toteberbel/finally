import React, { useRef } from "react";
import { Global, css } from "@emotion/core";
import Head from "next/head";
import Footer from "./Footer";
import Login from "./Login";
import Header from "./Header";
import Container from "./Container";
import Sidebar from '../ui/Sidebar';

const Layout = (props) => {
  let menu = useRef(null);

  return (
    <>
      <Global
        styles={css`
          :root {
            --amarillo1: #00e676;
            --azul1: #0b3c5d;
          }

          html {
            font-size: 62.5%; /* Haciendo esto nos evitamos usar la calc para convertir px por rems */
            box-sizing: border-box;
            height: 100vh;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          body {
            font-size: 1.6rem; /* Esto sería igual a 16px */
            line-height: 1.5;
            font-family: "Montserrat", sans-serif;
            background-color: #eaeaea;
          }
          h1,
          h2,
          h3 {
            margin: 0 0 2rem 0;
            line-height: 1.5;
          }
          h1,
          h2 {
            font-family: "Quicksand", sans-serif;
            font-weight: 300;
          }
          a {
            text-decoration: none;
          }
          img {
            width: 100%;
          }
        `}
      />
      <Head>
        {/* <html lang="es" /> */}
        <title> Finally - Grupos de estudio en WhatsApp</title>
        <link rel="shortcut icon" href="/static/img/favicon2.ico" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&family=Montserrat:wght@300&family=Open+Sans:wght@300&family=Quicksand:wght@700&display=swap"
          rel="stylesheet"
        />

        <script
          src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
          integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
          integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
          integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
          crossOrigin="anonymous"
        ></script>
        <link href="/static/css/app.css" rel="stylesheet" />
        {/* Anmiaciones */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.13.1/css/all.css"
          integrity="sha384-xxzQGERXS00kBmZW/6qxqJPyxW3UR0BPsL4c8ILaIWXva5kFi7TxkIIaMiKtqV1Q"
          crossOrigin="anonymous"
        />
      </Head>
      <Header menu={menu} />
      <div className="d-flex" id="wrapper" ref={menu}>
        <Sidebar />

        <Container id="page-content-wrapper bg-light">

          <main>{props.children}</main>
        </Container>
      </div>

      <Footer />
    </>
  );
};

export default Layout;
