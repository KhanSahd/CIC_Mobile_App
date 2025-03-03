import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'teams',
  title: 'Teams',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'players',
      title: 'Players',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'player'}]}],
    }),
    defineField({
      name: 'record',
      type: 'object',
      fields: [
        defineField({
          name: 'wins',
          type: 'number',
        }),
        defineField({
          name: 'losses',
          type: 'number',
        }),
      ],
    }),
  ],
})
