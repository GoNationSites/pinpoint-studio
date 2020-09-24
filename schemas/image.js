export default {
  name: 'mainImage',
  title: 'Main Image',
  type: 'object',
  fields: [
    {
      name: 'img',
      type: 'image',
      title: 'Image',
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },
    {
      name: 'caption',
      type: 'string',
      title: 'Caption',
      options: {
        isHighlighted: true, // <-- make this field easily accessible
      },
    },
    {
      // Editing this field will be hidden behind an "Edit"-button
      name: 'attribution',
      type: 'string',
      title: 'Attribution',
    },
  ],
};
