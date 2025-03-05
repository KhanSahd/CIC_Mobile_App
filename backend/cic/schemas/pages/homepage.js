import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      description:
        'The title of the page, this is not a caption, this is just the title of this entry',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      type: 'string',
      options: {
        list: [
          {title: 'Main Images', value: 'mainImages'},
          {title: 'Paragraph', value: 'paragraph'},
          {title: 'post', value: 'post'},
        ],
        layout: 'radio', // Use dropdown ('dropdown') or radio ('radio')
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroImages',
      title: 'Main Images',
      type: 'array',
      of: [
        {
          type: 'image',
          fields: [
            defineField({
              name: 'caption',
              title: 'Caption',
              type: 'string',
            }),
          ],
        },
      ],
      hidden: ({parent}) => parent?.category !== 'mainImages',
    }),
    defineField({
      name: 'paragraphHeading',
      title: 'Heading',
      description:
        'The heading of the paragraph (optional, can do both a heading and a paragraph, or just one, each one displays differently)',
      type: 'string',
      hidden: ({parent}) => parent?.category !== 'paragraph',
    }),
    defineField({
      name: 'paragraphContent',
      title: 'Text Content',
      type: 'text',
      hidden: ({parent}) => parent?.category !== 'paragraph',
    }),
    defineField({
      name: 'postContent',
      title: 'Post Caption',
      type: 'string',
      hidden: ({parent}) => parent?.category !== 'post',
    }),
    defineField({
      name: 'postImage',
      title: 'Image',
      type: 'image',
      hidden: ({parent}) => parent?.category !== 'post',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const hasVideo = context.parent?.video
          if (value && hasVideo) {
            return 'Only one of Image or Video can be set, not both.'
          }
          return true
        }),
    }),
    defineField({
      name: 'video',
      title: 'Video',
      type: 'file',
      hidden: ({parent}) => parent?.category !== 'post',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const hasImage = context.parent?.postImage
          if (value && hasImage) {
            return 'Only one of Image or Video can be set, not both.'
          }
          return true
        }),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
  ],
})
