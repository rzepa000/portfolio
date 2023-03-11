import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <ContainerBlock
      title="Jakub Rzepinski - Front End Developer"
      description="My portfolio"
    >
      <Hero />
      
    </ContainerBlock>
  );
}
