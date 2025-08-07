import {TextIcon} from '@sanity/icons'

export default {
  name: 'paragraph',
  title: 'Paragraph',
  type: 'object',
  icon: TextIcon,
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text',
    },
  ],
  preview: {
    select: {
      title: 'heading',
    },
  },
}
