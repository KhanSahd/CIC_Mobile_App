import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../theme';
import { useSelector } from 'react-redux';
import client from '../backend/client';
import axios from 'axios';
import HeroImagesSlider from '@/components/HeroImagesSlider';
import { paragraphQuery, heroImagesQuery, postCardQuery } from '@/grokQueries';
import ParagraphEntry from '@/components/ParagraphEntry';
import PostCard from '@/components/PostCard';

const HomeScreen = () => {
  const navigation = useNavigation();
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  let [images, setImages] = useState([]);
  let [paragraphs, setParagraphs] = useState([]);
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetchHeroImages();
    fetchParagraphs();
    fetchPosts();
  };

  const fetchHeroImages = async () => {
    try {
      client.fetch(heroImagesQuery).then((data) => setImages(data[0].heroImages));
    } catch (error) {
      console.error('error', error);
    }
  };

  const fetchParagraphs = async () => {
    try {
      client.fetch(paragraphQuery).then((data) => {
        setParagraphs(data);
      });
    } catch (error) {
      console.error('error', error);
    }
  };

  const fetchPosts = async () => {
    try {
      client.fetch(postCardQuery).then((data) => {
        setPosts(data);
      });
    } catch (error) {
      console.error('error', error);
    }
  };

  return (
    <ScrollView style={isDarkMode ? styles.dark : styles.light}>
      {/* Hero Image */}
      <HeroImagesSlider images={images} />

      {/* Add Paragraphs */}
      {paragraphs.map((paragraph, index) => (
        <ParagraphEntry key={index} paragraph={paragraph} />
      ))}

      {/* Add Posts */}
      <View className="w-full flex-row justify-around flex-wrap">
        {posts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
