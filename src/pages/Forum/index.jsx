/* eslint-disable react/jsx-pascal-case */
import { useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

//* conteúdo
import Visitante_Home from "../Visitante_Home";

function Forum() {
  const [conteudo, setConteudo] = useState("default");

  //? função para renderizar o conteúdo da página
  const renderContent = () => {
    switch (conteudo) {
      default:
        return <Visitante_Home />;
    }
  };

  return (
    <>
      <Navbar />
      <div className="forum-content">
        <Sidebar setConteudo={setConteudo} />
        <main>{renderContent()}</main>
      </div>
    </>
  );
}

export default Forum;
