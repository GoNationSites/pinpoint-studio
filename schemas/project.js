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
      title: 'Categories',
      name: 'categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    },
    {
      name: 'footerBlurb',
      title: 'Footer Text',
      type: 'text',
    },
    {
      name: 'stats',
      title: 'Stats',
      type: 'blockContent',
    },
    // {
    //   title: 'Footer Block',
    //   name: 'loot',
    //   type: 'array',
    //   of: [
    //     {
    //       type: 'reference',
    //       to: {
    //         type: 'category',
    //       },
    //     },
    //   ],
    //   // fields: [
    //   //   {
    //   //     title: 'Heading',
    //   //     name: 'heading',
    //   //     type: 'string',
    //   //   },
    //   //   {
    //   //     title: 'Bullet Points',
    //   //     name: 'bulletPoints',
    //   //     type: 'array',
    //   //     of: [
    //   //       {
    //   //         type: 'string',
    //   //       },
    //   //     ],
    //   //   },
    //   // ],
    // },
  ],
};
