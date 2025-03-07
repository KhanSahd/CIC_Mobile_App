import {defineField} from 'sanity'

export default {
  name: 'highlights',
  type: 'document',
  title: 'Highlights',
  fields: [
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'clip',
      title: 'Clip',
      type: 'file',
      validation: (rule) => rule.required(),
    }),
  ],
}
