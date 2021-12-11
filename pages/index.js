import Head from 'next/head'
import Columnist from '../components/Columnist'
import Header from '../components/Header'
import Hot from '../components/Hot'
import Quote from '../components/Quote'
// import axios from "axios";
import Browse from '../components/Browse'

export default function Home({news, type}) {
  return (
    <div className="home">
      <Header/>
      <Hot news={news} type={type}/>
      <div className="bg-gray-50 py-2">
        <Quote/>
      </div>
      <Browse/>
      <Columnist/>
    </div>
  )
}


export async function getStaticProps(context) {

  const response =  await fetch('https://bing-news-search1.p.rapidapi.com/news?_limit=3',{
    method: 'GET',
    params: {safeSearch: 'Off', textFormat: 'Raw'},
    headers: {
      'x-bingapis-sdk': 'true',
      'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
      'x-rapidapi-key': 'd63d3a8cabmsha82177fdeaaf6d9p1e9df8jsnb58d00a7318d'
    }
  });

  const {value, _type} = await response.json()



  return {
    props: {
      news: value || null,
      type: _type
    } // will be passed to the page component as props
  }
}