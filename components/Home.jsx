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
    setTimeout(() => {
      axios.get(randomURL())
      .then((res) => {
        const list = res.data.data.list;
        const filteredList = list.slice(list.length - 6, list.length)
        setNews(filteredList);
      })
      .catch((err) => {
        console.log('Please retry later');
        console.log(err);
      })
      .finally(() => {
        setUpdating(false);
      });
    }, 1000)
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
      <View style={styles.list}>
        {news.map(singleNews => <News key={singleNews.title} info={singleNews}/>)}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 3,
    alignContent: 'space-around',
    // backgroundColor: 'red'
  }
});

export default Home;
