// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

import image from './image';
import categories from './category';
// import bullets from './bullets';
import project from './project';
import people from './people';
import post from './post';
import blockContent from './blockContent';
import testimonial from './testimonial';
import tag from './tag';
// import bullets from './bullets';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    project,
    categories,
    people,
    post,
    blockContent,
    testimonial,
    tag,
  ]),
});
