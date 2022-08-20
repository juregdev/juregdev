import { NextPage } from "next";
import Head from "next/head";
import { CardPalestra } from "../components/CardPalestra";
import { PalestrasData } from "../data/palestras";

import styles from "../styles/palestras.module.css";

const Palestras: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <title>Jureg | Palestras</title>
      </Head>
      <div className={styles.container}>
        {PalestrasData.map((palestra, index) => (
          <CardPalestra
            key={index}
            date={palestra.date}
            firstEvent={palestra.firstEvent}
            files={palestra.files}
            cover={palestra.cover}
            name={palestra.name}
          />
        ))}
      </div>
    </>
  );
};

export default Palestras;
