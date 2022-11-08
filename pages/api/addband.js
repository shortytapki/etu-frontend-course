import { config } from 'dotenv';
import { initializeApp } from 'firebase/app';

import { getFirestore, doc, setDoc } from 'firebase/firestore';

import { redirect } from 'next/dist/server/api-utils';

config();

const app = initializeApp(JSON.parse(process.env.FIREBASE_CONFIG));
const db = getFirestore(app);

export default async function postBand(req, res) {
  const { bandName, url } = JSON.parse(req.body);
  await setDoc(doc(db, 'artists', bandName), {
    name: bandName,
    image: url,
  });
  return redirect(res, '/bands');
}
