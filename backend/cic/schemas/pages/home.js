import {HomeIcon} from '@sanity/icons'

export default {
  name: 'home',
  title: 'Home',
  type: 'document',
  icon: HomeIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Home',
    },
    {
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {
          type: 'slideshow',
        },
        {
          type: 'paragraph',
        },
        {
          type: 'posts',
        },
      ],
    },
  ],
}
