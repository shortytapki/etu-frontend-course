import { config } from 'dotenv';
import { initializeApp } from 'firebase/app';
import { getFirestore, getDoc, doc } from 'firebase/firestore';

config();

const app = initializeApp(JSON.parse(process.env.FIREBASE_CONFIG));
const db = getFirestore(app);

const getData = async (id) => {
  //   const docRef = doc(db, "cities", "SF");
  // const docSnap = await getDoc(docRef);

  const res = await getDoc(doc(db, 'artists', id));
  return res.data();
};

export default async function getBandById(req, res) {
  res.send(await getData(req.query.id));
}
