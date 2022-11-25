import Text from '../../components/Text/Text';
import Head from 'next/head';
import styles from './Bands.module.css';
import { getData } from '../api/bands';

export default function Band({ name, image }) {
  return (
    <>
      <Head>
        <title>{`Listen / ${
          name.slice(0, 1).toUpperCase() + name.slice(1)
        }`}</title>
      </Head>
      <div className={styles.main}>
        <Text>{name}</Text>
        <img src={image} alt="" width={500} />
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const res = await fetch(
    `${process.env.BASE_FETCH_URL}/api/band/${context.params.band}`
  );
  const data = await await res.json();
  return {
    props: {
      ...data,
    },
  };
}

export async function getStaticPaths(context) {
  const data = await getData();
  const paths = data.map((obj) => {
    return {
      params: { band: obj.id },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
}
