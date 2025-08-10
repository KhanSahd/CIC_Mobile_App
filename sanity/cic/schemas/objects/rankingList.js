export default {
  name: 'rankingList',
  title: 'Ranking List',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'ranking',
      title: 'Ranking',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'player'}],
        },
      ],
    },
  ],
}
