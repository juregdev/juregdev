import { propsPalestras } from "../../data/palestras";
import styles from "./style.module.css";

import Image from "next/image";

export const CardPalestra = ({
  date,
  firstEvent,
  name,
  cover,
  files,
}: propsPalestras) => {
  return (
    <div className={styles.container}>
      {cover && (
        <div className={styles.image}>
          <Image
            src={cover}
            alt={`Capa da palestra ${name}`}
            width={1920}
            height={1080}
            priority={true}
            layout="responsive"
          />
        </div>
      )}
      <div className={styles.infos}>
        <h2>Primeiro evento: {firstEvent}</h2>
        <h3>
          Data: {date.getDate()}/{date.getMonth()}/{date.getFullYear()}
        </h3>

        {files && (
          <div className={styles.docs}>
            {files.pdf && (
              <button
                onClick={() => {
                  window.open(files.pdf);
                }}
                className={styles.buttonPdf}
              >
                Palestra em PDF
              </button>
            )}
            {files.pdf && (
              <button
                onClick={() => {
                  window.open(files.pptx);
                }}
                className={styles.buttonPptx}
              >
                Palestra em PPTX
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
