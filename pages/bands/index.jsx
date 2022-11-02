import Text from '../../components/Text/Text';
import bandPic from '../../public/chvrches.jpg';

import Image from 'next/image';

export default function ChurchesMainPage() {
  return (
    <main>
      <Text style={{ fontSize: '4rem' }}>Band of the day</Text>
      <Text>ChVrches. A Scottish pop band from Glasgow</Text>
      <Image
        src={bandPic}
        alt="Chvrches band picture"
        width={800}
        height={500}
        style={{
          margin: '0px 350px 0px',
        }}
      />
    </main>
  );
}
