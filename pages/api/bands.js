import { config } from 'dotenv';
import { initializeApp } from 'firebase/app';
import { getFirestore, getDocs, collection } from 'firebase/firestore';

config();

const app = initializeApp(JSON.parse(process.env.FIREBASE_CONFIG));
const db = getFirestore(app);

const getData = async () => {
  let data = [];
  const docSnaps = await getDocs(collection(db, 'artists'));
  docSnaps.forEach((snap) => data.push(snap.data()));
  return data;
};

export default async function getAllBands(req, res) {
  res.send(await getData());
}
