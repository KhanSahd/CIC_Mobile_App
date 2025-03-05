const homeppageQuery = `*[_type == "home"] {
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
    }
  }
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

export { homeppageQuery, scheduleQuery };
