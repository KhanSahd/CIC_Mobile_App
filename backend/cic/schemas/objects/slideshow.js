import {ComponentIcon} from '@sanity/icons'

export default {
  name: 'slideshow',
  title: 'Slideshow',
  type: 'object',
  icon: ComponentIcon,
  fields: [
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'customImage',
        },
      ],
    },
  ],
  preview: {
    title: 'Slideshow',
    select: {
      images: 'images',
    },
    prepare(selection) {
      const {images} = selection
      return {
        title: `Slideshow with ${images.length} images`,
        subtitle: 'A slideshow of images',
      }
    },
  },
}
