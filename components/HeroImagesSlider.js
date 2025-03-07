import { View, Text, Image, Dimensions } from 'react-native';
import React from 'react';
import Carousel, { ICarouselInstance, Pagination } from 'react-native-reanimated-carousel';
import { useSharedValue } from 'react-native-reanimated';
import client from '../backend/client';
import imageUrlBuilder from '@sanity/image-url';

const HeroImagesSlider = ({ images }) => {
  const builder = imageUrlBuilder(client);

  function urlFor(source) {
    return builder.image(source);
  }
  const width = Dimensions.get('window').width;
  const ref = React.useRef(null);
  const progress = useSharedValue(0);
  const onPressPagination = (index) => {
    ref.current?.scrollTo({
      /**
       * Calculate the difference between the current index and the target index
       * to ensure that the carousel scrolls to the nearest index
       */
      count: index - progress.value,
      animated: true,
    });
  };

  return (
    // <Image source={{ uri: images[0].asset._ref }} style={{ width: '100%', height: '300' }} />
    <Carousel
      ref={ref}
      width={width}
      height={300}
      style={{ marginBottom: 10 }}
      data={images}
      onProgressChange={progress}
      autoPlay
      autoPlayInterval={2000}
      renderItem={({ item }) => (
        <View>
          <Image
            source={{ uri: urlFor(item.asset._ref).url() }}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          {/* Overlay */}
          <View className="absolute w-full h-full bg-black opacity-40" />
          <Text className="text-white font-bold absolute bottom-2 left-2">{item.caption}</Text>
        </View>
      )}
    />
  );
};

export default HeroImagesSlider;
