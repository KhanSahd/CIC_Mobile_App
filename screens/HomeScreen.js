import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../theme';
import { useSelector } from 'react-redux';
import client from '../backend/client';
import HeroImagesSlider from '@/components/HeroImagesSlider';
import { homeppageQuery } from '@/grokQueries';
import ParagraphEntry from '@/components/ParagraphEntry';
import PostCard from '@/components/PostCard';
import List from '@/components/List';

const HomeScreen = () => {
  const navigation = useNavigation();
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  let [homePage, setHomePage] = useState([]);

  useEffect(() => {
    fetchHomePage();
  }, []);

  const fetchHomePage = async () => {
    try {
      client.fetch(homeppageQuery).then((data) => setHomePage(data));
    } catch (error) {
      console.error('error', error);
    }
  };

  return (
    <ScrollView style={isDarkMode ? styles.dark : styles.light}>
      {homePage[0]?.sections.map((section, index) => {
        switch (section._type) {
          case 'slideshow':
            return <HeroImagesSlider key={index} images={section.images} />;
          case 'paragraph':
            return <ParagraphEntry key={index} paragraph={section} />;
          case 'posts':
            return (
              <View key={index} className="w-full flex-row justify-around mb-10 flex-wrap gap-y-7">
                {section.post.map((post, index) => (
                  <PostCard key={index} post={post} />
                ))}
              </View>
            );
          case 'rankingList':
            return <List key={index} rankingList={section} />;
          default:
            return null;
        }
      })}
    </ScrollView>
  );
};

export default HomeScreen;
