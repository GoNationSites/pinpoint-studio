export default {
  title: 'Project Footer Bullet Points',
  name: 'bullets',
  type: 'document',
  fields: [
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
    },
    {
      title: 'Bullet Points',
      name: 'bulletPoints',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    },
  ],
};
