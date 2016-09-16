module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true,
      unique: true
    },
    resourceType: {
      type: 'string',
      required: true,
      unique: true
    },
    createdBy:{
      type: 'int',
      required: true,
    },
    parentResourceId:{
      type: 'int',
    },
    owners:{
      type: 'array'
    },
    developers: {
      type: 'array'
    },
    viewers: {
      type: 'array'
    }
  };
