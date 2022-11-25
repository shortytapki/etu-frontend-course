import { config } from 'dotenv';
import { initializeApp } from 'firebase/app';

import {
  getFirestore,
  collection,
  serverTimestamp,
  addDoc,
} from 'firebase/firestore';

import { redirect } from 'next/dist/server/api-utils';

config();

const app = initializeApp(JSON.parse(process.env.FIREBASE_CONFIG));
const db = getFirestore(app);

export default async function postBand(req, res) {
  const { bandName, url } = JSON.parse(req.body);
  await addDoc(collection(db, 'artists'), {
    name: bandName,
    image: url,
    added: serverTimestamp(),
  });
  return redirect(res, '/bands');
}
