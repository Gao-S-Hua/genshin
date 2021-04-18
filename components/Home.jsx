import { Text, View, StyleSheet, ScrollView, RefreshControl } from 'react-native';
import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import News from './News';
import NewsSwiper from './NewsSwiper';
const url = 'https://genshin.mihoyo.com/content/yuanshen/getContentList?pageSize=6&channelId=11&pageNum=';


const Home = () => {
  const [news, setNews] = useState([]);
  const [prev, setPrev] = useState(NaN);
  const [updating, setUpdating] = useState(false);
  const updateNews = () => {
    setUpdating(true);
    axios.get(randomURL())
      .then((res) => {
        const list = res.data.data.list;
        setNews(list);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setUpdating(false);
      });
  }
  const randomURL = useCallback(() => {
    let random = -1;
    random = (Math.random() * 10) >> 0;
    while (random === prev) {
      random = (Math.random() * 10) >> 0;
    }
    setPrev(random);
    return url + random;
  }, [prev]);
  const renderRefresh = useCallback(
    () =>  (
      <RefreshControl
        onRefresh={updateNews}
        refreshing={updating}
        title={'Updating News'}
      >
      </RefreshControl>
    ), [updating]);
  useEffect(updateNews, []);
  return(
    <ScrollView 
      style={styles.container}
      refreshControl={renderRefresh()}
    >
      <NewsSwiper />
      {news.map(singleNews => <News key={singleNews.title} info={singleNews}/>)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
  }
});

export default Home;
