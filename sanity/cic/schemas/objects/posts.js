import {ComponentIcon} from '@sanity/icons'

export default {
  name: 'posts',
  title: 'Posts',
  type: 'object',
  icon: ComponentIcon,
  fields: [
    {
      name: 'post',
      title: 'Post',
      type: 'array',
      of: [
        {
          type: 'postCard',
        },
      ],
    },
  ],

  preview: {
    title: 'posts',
    icon: '📝',
    select: {
      post: 'post',
    },
    prepare(selection) {
      const {post} = selection
      return {
        title: `Posts Section with ${post.length} posts`,
        subtitle: 'A list of posts to be displayed on the app at this section',
      }
    },
  },
}
