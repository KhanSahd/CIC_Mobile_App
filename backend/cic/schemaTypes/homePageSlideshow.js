import {defineField, defineType} from 'sanity'

export const homePageSlideshow = defineType({
  name: 'homePageSlideshow',
  title: 'Home Page Slideshow',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
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
