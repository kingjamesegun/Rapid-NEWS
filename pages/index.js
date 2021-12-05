import Head from 'next/head'
import Header from '../components/Header'
import Hot from '../components/Hot'
import Quote from '../components/Quote'

export default function Home() {
  return (
    <div className="home">
      <Header/>
      <Hot/>
      <Quote/>
    </div>
  )
}
