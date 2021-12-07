import React, { useState, useEffect, Component } from 'react';
import Layout from '../components/Layout';
import { studio } from './api/graphQL/graphQL';
import Image from 'next/image';
import { Grid } from '@material-ui/core';
import { API_URL } from '../environment';

export default function Studio(props) {
  let designers = props.designers;
  let isDesktopSize;
  let styling = ``;
  const size = useWindowSize();
  if (size.width <= 600) {
    isDesktopSize = false;
    styling = `
    .title {
      text-align: center;
    }
  `;
  } else if (size.width > 600) {
    isDesktopSize = true;
    styling = `
    .title {
    }
  `;
  }
  if (typeof window !== 'undefined') {
  }
  let quote =
    'Нашата цел е да пречупим вашите идеи през опита, знанията и фантазиятa която имаме\
    и да разбудим въображението ви. Когато проектираме винаги си задавме въпроса "Защо"\
    и всяко решение е взето на базата на "Защото". Ние разнищваме дизайна и търсим\
    смисъл във всяка мебел в интериора. Дори навлизаме още, до всяко ръбче и извивка.';

  return (
    <Layout>
      <h1 style={{ textAlign: 'center' }}>{quote}</h1>
      <Grid container spacing={3}>
        {designers.map((designer) => (
          <Grid item xs={12} key={designer.id}>
            <Grid container spacing={8} style={{ justifyContent: 'center' }}>
              <Grid item xs={12} sm={3}>
                <div style={{ borderRadius: '250px', overflow: 'hidden' }}>
                  <Image
                    priority={true}
                    className="image"
                    src={API_URL + designer.avatar.url}
                    alt="nz2"
                    width={designer.avatar.width}
                    height={designer.avatar.height}
                    layout="responsive"
                  ></Image>
                </div>
                <Grid item style={{ textAlign: 'center' }}>
                  <h3>{designer.quote}</h3>
                </Grid>
              </Grid>
              <Grid className="title" item xs={9}>
                <Grid item>
                  <h1>{designer.name}</h1>
                </Grid>
                <Grid item>
                  <h3>{designer.title}</h3>
                </Grid>
                <Grid item>
                  <h3>{designer.description}</h3>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
      <style jsx>{styling}</style>
    </Layout>
  );
}

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);
  return windowSize;
}

Studio.getInitialProps = async (ctx) => {
  let data = await studio();
  let designers = data.designers;

  // const res = await fetch(`http://localhost:1337/products`);
  // const products = await res.json();
  return {
    designers,
  };
};
