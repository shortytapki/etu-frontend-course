import Image from 'next/image';
import Text from '../../components/Text/Text';
import Gallery from '../../components/Gallery/Gallery';
import ch from '../../public/Ch.jpg';
import cb from '../../public/CoB.jpg';
import ds from '../../public/Ds.jpg';
import lg from '../../public/LoG.jpg';
import styles from './Albums.module.css';

const AlbumsPage = () => {
  return (
    <div>
      <Text>Check out today&apos;s albums</Text>
      <Gallery>
        <Image
          src={ch}
          alt=""
          width={250}
          height={250}
          className={styles.album}
        ></Image>
        <Image
          src={cb}
          alt=""
          width={250}
          height={250}
          className={styles.album}
        ></Image>
        <Image
          src={ds}
          alt=""
          width={250}
          height={250}
          className={styles.album}
        ></Image>
        <Image
          src={lg}
          alt=""
          width={250}
          height={250}
          className={styles.album}
        ></Image>
      </Gallery>
    </div>
  );
};

export default AlbumsPage;
