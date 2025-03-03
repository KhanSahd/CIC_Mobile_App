import React from 'react';
import { styles } from '@/theme';
import { useSelector } from 'react-redux';
import { Card, Text } from 'react-native-paper';
import { useVideoPlayer, VideoView } from 'expo-video';

const PostCard = ({ post }) => {
  const { postContent, video, postImage, publishedAt } = post;
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  const player = useVideoPlayer(video?.asset?.url, (player) => {
    player.loop = true;
  });

  return (
    <Card
      mode="outlined"
      style={{
        width: '45%',
        height: 'auto',
        backgroundColor: isDarkMode
          ? styles.dark.componentBackgroundColor
          : styles.light.componentBackgroundColor,
      }}>
      {video ? (
        <VideoView player={player} style={{ width: '100%', height: '70%' }} contentFit="cover" />
      ) : (
        <Card.Cover
          source={{ uri: postImage?.asset?.url }} // Added optional chaining to avoid crashes
          style={{
            backgroundColor: isDarkMode
              ? styles.dark.componentBackgroundColor
              : styles.light.componentBackgroundColor,
          }}
        />
      )}
      <Card.Content>
        <Text
          variant="bodyLarge"
          style={{
            color: isDarkMode ? styles.dark.color : styles.light.color,
            fontWeight: 'bold',
          }}>
          {postContent}
        </Text>
      </Card.Content>
    </Card>
  );
};

export default PostCard;
