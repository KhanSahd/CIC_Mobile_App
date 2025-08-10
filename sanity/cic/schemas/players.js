import {defineType, defineField} from 'sanity'
const heightRegex = /^[4-7]'([0-9]|1[01])"?$/

export default defineType({
  name: 'player',
  title: 'Players',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'jerseyNumber',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'position',
      type: 'array',
      validation: (rule) => rule.required(),
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Point Guard', value: 'PG'},
          {title: 'Shooting Guard', value: 'SG'},
          {title: 'Small Forward', value: 'SF'},
          {title: 'Power Forward', value: 'PF'},
          {title: 'Center', value: 'C'},
        ],
      },
    }),
    defineField({
      name: 'height',
      type: 'string',
      validation: (rule) => rule.required().regex(heightRegex),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'name'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
  ],
})
