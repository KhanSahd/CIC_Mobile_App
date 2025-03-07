const homeppageQuery = `
*[_type == "home"] {
  ...,
  sections[] {
    ...,
    images[] {
      ...,
      "url": asset->url
    },
    post[] {
      ...,
      "postImageUrl": postImage.asset->url,
      "videoUrl": video.asset->url
    },
    ranking[]->{  
      name,
      position[0]
    }
  }
}

`;

const scheduleQuery = `
  *[
    _type == 'schedule'
  ]
  | order(date asc) 
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

const highlightsQuery = `
*[_type == "highlights"] 
{
  caption,
    "url": clip.asset._ref
}`;

export { homeppageQuery, scheduleQuery, highlightsQuery };
