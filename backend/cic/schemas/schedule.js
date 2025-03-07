import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'schedule',
  title: 'Schedule',
  type: 'document',
  fields: [
    defineField({
      name: 'eventType',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'League Game', value: 'leagueGame'},
          {title: 'Pickup Game', value: 'pickupGame'},
          {title: 'All Star Game', value: 'allStarGame'},
          {title: 'Playoff Game', value: 'playoffGame'},
          {title: 'Championship Game', value: 'championshipGame'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'team1',
      type: 'reference',
      to: [{type: 'teams'}],
      title: 'Team 1',
      validation: (rule) => rule.required(),
      hidden: ({parent}) => parent?.eventType == 'pickupGame',
    }),
    defineField({
      name: 'team2',
      title: 'Team 2',
      type: 'reference',
      to: [{type: 'teams'}],
      validation: (rule) => rule.required(),
      hidden: ({parent}) => parent?.eventType == 'pickupGame',
    }),
    defineField({
      name: 'date',
      type: 'datetime',
      validation: (rule) => rule.required(),
      options: {},
    }),
  ],
  preview: {
    select: {
      team1: 'team1.name', // Assuming the referenced team has a 'name' field
      team2: 'team2.name',
      date: 'date',
    },
    prepare({team1, team2, date}) {
      const title = team1 && team2 ? `${team1} vs ${team2}` : 'Pickup Game'
      const formattedDate = date
        ? new Intl.DateTimeFormat('en-US', {dateStyle: 'long'}).format(new Date(date))
        : 'No Date'
      return {
        title,
        subtitle: formattedDate,
      }
    },
  },
})
