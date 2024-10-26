/* eslint-disable react/jsx-pascal-case */
import { useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

function Forum() {
  const [conteudo, setConteudo] = useState("default");

  //? função para renderizar o conteúdo da página
  const renderContent = () => {
    switch (conteudo) {
      default:
        return <p>o conteúdo da página vai aparecer aqui</p>;
    }
  };

  return (
    <>
      <Navbar />
      <Sidebar setConteudo={setConteudo} />
      <main>{renderContent()}</main>
    </>
  );
}

export default Forum;
