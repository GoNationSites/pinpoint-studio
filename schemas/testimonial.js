export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'businessName',
      title: 'Business Name',
      type: 'string',
    },
    {
      name: 'tag',
      title: 'Tag',
      type: 'tag',
    },
    {
      title: 'Business Logo',
      name: 'businessLogo',
      type: 'image',
    },
  ],
};
