import React from "react";
import { styles } from "@/theme";
import { useSelector } from "react-redux";
import { Card, Text } from "react-native-paper";
import { useVideoPlayer, VideoView } from "expo-video";
import client from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { Dimensions, View } from "react-native";

const PostCard = ({ post }) => {
  const { postContent, video, postImage, publishedAt } = post;
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  const { width } = Dimensions.get("window");

  const builder = imageUrlBuilder(client);

  function urlFor(source) {
    return builder.image(source);
  }

  const player = useVideoPlayer(post.videoUrl, (player) => {
    player.loop = true;
  });

  return (
    <Card
      mode="elevated"
      style={{
        width: width * 0.45, // 45% of the screen width
        height: 300, // Fixed height for consistency
        backgroundColor: isDarkMode
          ? styles.dark.componentBackgroundColor
          : styles.light.componentBackgroundColor,
      }}
    >
      <View
        style={{
          width: "100%",
          height: "70%", // Height for image/video to maintain uniformity
          borderTopLeftRadius: 12, // Match the card's rounded corners
          borderTopRightRadius: 12,
          overflow: "hidden", // Ensures no content overflows
        }}
      >
        {video ? (
          <VideoView
            player={player}
            style={{ width: "100%", height: "100%" }}
            contentFit="cover"
          />
        ) : (
          <Card.Cover
            source={{ uri: urlFor(postImage?.asset).fit("clip").url() }} // Added optional chaining to avoid crashes
            style={{
              backgroundColor: isDarkMode
                ? styles.dark.componentBackgroundColor
                : styles.light.componentBackgroundColor,
              width: "100%",
              height: "100%",
            }}
          />
        )}
      </View>
      <Card.Content>
        <Text
          variant="bodyLarge"
          style={{
            color: isDarkMode ? styles.dark.color : styles.light.color,
            fontWeight: "bold",
            flexShrink: 1, // Ensures the text doesn't overflow
          }}
        >
          {postContent}
        </Text>
      </Card.Content>
    </Card>
  );
};

export default PostCard;
