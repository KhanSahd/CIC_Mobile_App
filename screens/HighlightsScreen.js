import { View, Text, FlatList, Dimensions } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import client from "../sanity/client";
import { highlightsQuery } from "@/grokQueries";
import { ResizeMode, Video } from "expo-av";

const HighlightsScreen = () => {
  const navigation = useNavigation();
  let [data, setData] = useState([]);
  const video = useRef(null);

  console.log(data[0]?.url);

  const renderItem = ({ item }) => (
    <View
      key={item.id}
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Video
        ref={video}
        source={{ uri: item.url }}
        style={{ flex: 1 }}
        resizeMode={ResizeMode.CONTAIN}
      />
    </View>
  );

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const results = await client.fetch(highlightsQuery);
      setData(results);
    } catch (error) {
      console.error("Error fetching highlights:", error);
    }
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      pagingEnabled
      decelerationRate="fast"
      showsVerticalScrollIndicator={false}
    />
  );
};

export default HighlightsScreen;
