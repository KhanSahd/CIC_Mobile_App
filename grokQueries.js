const paragraphQuery = `
*[
  _type == "homepage" && category == "paragraph"
] 
| order(_createdAt asc) 
{
  _createdAt,
  paragraphContent,
  paragraphHeading
}
`;

const heroImagesQuery = `*[
          _type=='homepage' 
          && category=='mainImages'
          ]
          {
            heroImages[] {
              caption,
              asset ->
              {
                url
              }
            }
          } 
          `;

const postCardQuery = `
*[
          _type=='homepage' 
  && category=='post'
          ]
| order(_updatedAt asc)
{
  postContent,
  video {
    asset -> {
      url
    }
  },
    postImage {
      asset -> {
      url
      }
    },
    publishedAt
}
`;

const scheduleQuery = `
  *[
  _type == 'schedule'
  ]
  {
    date,
    team1 -> {
      name,
      record
    },
      team2 -> {
        name,
        record
      },
      eventType
  }
`;

export { paragraphQuery, heroImagesQuery, postCardQuery, scheduleQuery };
