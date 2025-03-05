export default {
  name: 'postCard',
  title: 'Post Card',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Post Card',
    },
    {
      name: 'postImage',
      title: 'Image',
      type: 'image',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const hasVideo = context.parent?.video
          if (value && hasVideo) {
            return 'Only one of Image or Video can be set, not both.'
          }
          return true
        }),
    },
    {
      name: 'video',
      title: 'Video',
      type: 'file',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const hasImage = context.parent?.postImage
          if (value && hasImage) {
            return 'Only one of Image or Video can be set, not both.'
          }
          return true
        }),
    },
    {
      name: 'postContent',
      title: 'Post Caption',
      type: 'string',
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    },
  ],
}
