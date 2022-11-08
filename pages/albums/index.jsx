import Image from 'next/image';
import Text from '../../components/Text/Text';
import Gallery from '../../components/Gallery/Gallery';
import styles from './Albums.module.css';
import { useEffect, useState } from 'react';

const AlbumsPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      setData(await res.json());
    };
    getData();
  }, []);

  console.log(data);
  return (
    <div>
      <Text>Albums</Text>
      <Gallery></Gallery>
    </div>
  );
};

export default AlbumsPage;
