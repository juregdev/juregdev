import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdiGithub } from "../../public/icons/github";

//Components
import { TeenyiconsNextjsOutline } from "../../public/icons/next";
import { LogosReact } from "../../public/icons/ReactIcon";
import { LogosTailwindcssIcon } from "../../public/icons/tailwind";
import { LogosTypescriptIcon } from "../../public/icons/TypescriptIcon";
import { IcRoundEmail } from "../../public/socialMedia/email";
import { SimpleLineIconsSocialInstagram } from "../../public/socialMedia/instagram";
import { FaBrandsLinkedin } from "../../public/socialMedia/linkedin";
import { SimpleIconsSpotify } from "../../public/socialMedia/Spotify";
import { github } from "../services/Github";

//CSS
import styles from "../styles/home.module.css";

interface GitHubUserData {
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
  bio: string;
  followers: number;
}

interface propsServerSide {
  user: GitHubUserData;
}

const Home: NextPage<propsServerSide> = (props) => {
  const infoUser = props.user;

  const [user, setUser] = useState<GitHubUserData>(infoUser as GitHubUserData);
  const [stack, setStack] = useState<Boolean>(false);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <title>Jureg | Home</title>
      </Head>
      <section className={styles.container}>
        <div className={styles.InfosUser}>
          <div className={styles.profileImage}>
            <Image
              priority={true}
              src={user.avatar_url}
              width={300}
              height={300}
              alt="Profile Filipe Barros (Jureg)"
              layout="responsive"
            />
          </div>
          <div className={styles.bio}>
            <h1>{user.name}</h1>
            <div className={styles.userName}>
              <button
                className={styles.github}
                onClick={() => {
                  window.open(user.html_url, "_blank");
                }}
              >
                <MdiGithub />
                <span> {user.login}</span>
              </button>
            </div>
            <p>{user.bio}</p>

            <button
              className={styles.seeStack}
              onClick={() => {
                window.location.pathname = "/palestras";
              }}
            >
              Palestras
            </button>
            <button
              className={styles.seeStack}
              onClick={() => {
                setStack(!stack);
              }}
            >
              Minha Stack
            </button>
            <div
              className={`${styles.stack} transition-all duration-700 ${
                stack ? "max-h-[100px]" : "max-h-0"
              }`}
            >
              <div className={styles.NextJS}>
                <TeenyiconsNextjsOutline />
              </div>
              <div className={styles.ReactJS}>
                <LogosReact />
              </div>

              <div className={styles.Typescript}>
                <LogosTypescriptIcon />
              </div>
              <div className={styles.TailwindCSS}>
                <LogosTailwindcssIcon />
              </div>
            </div>

          </div>
        </div>
        <div className={styles.socialMedia}>
          <button
            className={styles.instagram}
            onClick={() => {
              window.open("https://www.instagram.com/juregdev/", "_blank");
            }}
          >
            <SimpleLineIconsSocialInstagram />
            <span>Instagram</span>
          </button>

          <button
            className={styles.linkedin}
            onClick={() => {
              window.open("https://www.linkedin.com/in/juregdev/", "_blank");
            }}
          >
            <FaBrandsLinkedin />
            <span>Linkedin</span>
          </button>
          <button
            className={styles.spotify}
            onClick={() => {
              window.open(
                "https://open.spotify.com/user/224dmzx7ogomf6goaw6s4cn5a?si=mppq2McBQsuTKDcu9glZkQ&utm_source=copy-link",
                "_blank"
              );
            }}
          >
            <SimpleIconsSpotify />
            <span> Spotify</span>
          </button>
          <button
            className={styles.email}
            onClick={() => {
              window.open("mailto:filipe.barrosti@gmail.com", "_blank");
            }}
          >
            <IcRoundEmail />
            <span>E-mail</span>
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  let user: GitHubUserData = {
    login: "",
    name: "",
    avatar_url: "",
    html_url: "",
    bio: "",
    followers: 0,
  };

  await github
    .get("")
    .then((res) => {
      user = {
        login: res.data.login,
        name: res.data.name,
        avatar_url: res.data.avatar_url,
        html_url: res.data.html_url,
        bio: res.data.bio,
        followers: res.data.followers,
      };
    })
    .catch((err) => {
      console.log(err);
    });

  return {
    props: { user },
  };
};
