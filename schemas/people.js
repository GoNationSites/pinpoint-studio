export default {
  title: 'Team Member',
  name: 'teamMember',
  type: 'document',
  fields: [
    {
      title: 'Member Name',
      name: 'memberName',
      type: 'string',
    },
    {
      title: 'Position',
      name: 'position',
      type: 'string',
    },
    {
      title: 'Bio',
      name: 'bio',
      type: 'text',
    },
    {
      title: 'Member Image',
      name: 'memberImage',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
  ],
};
