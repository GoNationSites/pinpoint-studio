export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        'This will be the page title. So pinpoint.com/slug-here. Click generate to automatically generate from the title.',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      title: 'Main Image',
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      name: 'bodyTextBlurb',
      title: 'Body Text',
      type: 'text',
    },
    {
      title: 'Project Images',
      name: 'projectImages',
      type: 'array',
      of: [{ type: 'image' }],
    },
    {
      name: 'footerBlurb',
      title: 'Footer Text',
      type: 'text',
    },
    {
      title: 'Footer Block',
      name: 'loot',
      type: 'array',
      of: [
        {
          type: '',
        },
      ],
      fields: [
        {
          title: 'Heading',
          name: 'heading',
          type: 'string',

          // Here the user will be prompted to write any string to describe the resource type.
          // There is a way to limit this to a number of preset strings and provide a pull-down
          // or radio buttons to select resource. This is left as an exercise for the reader! See
          // the reference docs!
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
    },
  ],
};
