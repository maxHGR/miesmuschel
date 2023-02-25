import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import clam from '../public/images/clam.png';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  function requestAnswer() {
    const nonce = Math.floor(Math.random() * 5);
    let answer;

    switch(nonce) {
      case 0:
        answer = "Auf jeden Fall !";
        break;
      case 1:
        answer = "Ich glaube eher nicht...";
        break;
      case 2:
        answer = "Ja";
        break;
      case 3:
        answer = "Nein";
        break;
      case 4:
        answer = "Frag doch einfach nochmal";
        break;
    }

    window.confirm(answer);
  }

  return (
    <>
      <main>
          <button onClick={requestAnswer}>
            Magische Miesmuschel...
          </button>
      </main>
    </>
  )
}
