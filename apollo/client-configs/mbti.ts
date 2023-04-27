import { InMemoryCache } from '@apollo/client/core';
import generatedIntrospection from '@/apollo/fragments/possibleTypes';
const cache = new InMemoryCache({
  possibleTypes: generatedIntrospection.possibleTypes,
});

export default () => {
  return {
    httpEndpoint: process.env.MBTI_ENDPOINT,
    cache: cache,
    getAuth: () => 'Bearer ' + localStorage.mbtiJWT,
  };
};
