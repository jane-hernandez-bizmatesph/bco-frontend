import { InMemoryCache } from '@apollo/client/core';
import generatedIntrospection from '@/apollo/fragments/possibleTypes';

const cache = new InMemoryCache({
  possibleTypes: generatedIntrospection.possibleTypes,
});

export default () => {
  return {
    httpEndpoint: process.env.BCO_ENDPOINT,
    cache: cache,
  };
};
