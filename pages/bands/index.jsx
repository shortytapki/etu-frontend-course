import Text from '../../components/Text/Text';
import styles from './Bands.module.css';

import Image from 'next/image';
import Gallery from '../../components/Gallery/Gallery';
import { useEffect, useState } from 'react';
import Form from '../../components/Form/Form';

export default function Bands() {
  const [bands, setBands] = useState([]);
  const [page, setPage] = useState(0);
  const [url, setUrl] = useState('');
  const [bandName, setBandName] = useState('');

  useEffect(() => {
    const getBands = async () => {
      const res = await fetch('/api/bands');
      let data = await res.json();
      data = data.sort((a, b) => b.added.seconds - a.added.seconds);
      console.log(data);
      setBands(data);
    };
    getBands();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!url && !bandName) return;
    await fetch(`/api/addband/`, {
      method: 'POST',
      body: JSON.stringify({
        bandName: bandName,
        url: url,
      }),
    });
    setBands((prevState) => [{ name: bandName, image: url }, ...prevState]);
    setPage(0);
    setBandName('');
    setUrl('');
  };

  return (
    <main className={styles.main}>
      <Text>Favorite Bands</Text>
      <p className={styles.title}>Add a Band</p>
      <Form
        submitHandler={submitHandler}
        nameChangeHandler={setBandName}
        urlChangeHnadler={setUrl}
        bandName={bandName}
        url={url}
      />
      <Gallery
        nextPageHandler={() => {
          if ((page + 1) * 4 < bands.length) setPage((prev) => (prev += 1));
        }}
        prevPageHandler={() => {
          if (page) setPage((prev) => (prev -= 1));
        }}
      >
        {bands &&
          bands.slice(page * 4, (page + 1) * 4).map(({ name, image }, idx) => (
            <div key={idx} className={styles.imgcontainer}>
              <img
                src={image}
                alt={`${name} band image`}
                width={200}
                height={200}
                className={`${styles.bandimg} card`}
              />
              <p className={styles.title}>{name}</p>
            </div>
          ))}
      </Gallery>
    </main>
  );
}
