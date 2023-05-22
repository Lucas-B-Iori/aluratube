import React from "react";
import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";
import Banner from "../src/components/Banner";
import {StyledFavoritos} from "../src/components/Favoritos";

function Page() {
  const [ valorDoFiltro, setvalorDoFiltro] = React.useState("");

  return (
    <>
      <CSSReset />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setvalorDoFiltro} />
        <Banner />
        <Header />
        <Timeline valorDoFiltro={valorDoFiltro} playlists={config.playlists} />
        <Favoritos favoritos={config.favoritos} />
      </div>
    </>
  );
}

export default Page;

const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .user-info {
    margin-top: 25px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 8px 32px;
    gap: 16px;
  }
`;

function Header() {
  return (
    <StyledHeader>
      {/* <img src="banner" /> */}
      <section className="user-info">
        <img src={config.github} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

function Timeline({valorDoFiltro, ...props}) {
  const playlistsNames = Object.keys(props.playlists);
  return (
    <StyledTimeline>
      {playlistsNames.map((playlistName) => {
        const videos = props.playlists[playlistName];
        return (
          <section key={playlistName}>
            <h2>{playlistName}</h2>
            <div>
              {videos.filter(video => {
                const titleNormalized = video.title.toLowerCase();
                const valorDoFiltroNormalized = valorDoFiltro.toLowerCase();
                return titleNormalized.includes(valorDoFiltroNormalized);
              }).map((video) => {
                return (
                  <a href={video.url} key={video.url}>
                    <img src={video.thumb} />
                    <span>{video.title}</span>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}

function Favoritos(props) {
  const favoritosNames = props.favoritos;
  return (
    <StyledFavoritos>
      <section key='favoritos'>
        <h2>AluraTubes Favoritos</h2>
        <div>

      {favoritosNames.map(favoritoName => {
        return (
              <a key={favoritoName.url} href={favoritoName.url}>
                <img src={favoritoName.icone} className="icone-fav"/>
                <span className="nome-fav">{favoritoName.nome}</span>
              </a>
        );
      })};
      </div>
      </section>
    </StyledFavoritos>
  )
};
