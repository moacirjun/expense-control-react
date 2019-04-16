export const CALL_API = 'CALL_API';

const API_ROOT = 'https://expenses-control-node.herokuapp.com/'

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
const callApi = async (endpoint) => {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint

  return fetch(endpoint)
    .then(response =>
      response.json().then(json => {
        if (!response.ok) {
          return Promise.reject(json)
        }

        return json;
      })
    )
}

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => action => {
    const callAPI = action[CALL_API]

    if (typeof callAPI === 'undefined') {
        return next(action);
    }

    const { endpoint, types } = callAPI;

    if (typeof endpoint !== 'string') {
        throw new Error('Specify a string endpoint URL.');
    }

    if (!Array.isArray(types) || types.length !== 3) {
        throw new Error('Expected an array of three action types.');
    }

    if (!types.every(type => typeof type === 'string')) {
        throw new Error('Expected action types to be strings.');
    }

    const [ requestType, successType, failureType ] = types;

    next({ type: requestType });

    return callApi(endpoint)
        .then(
            response => next({
                response,
                type: successType
            }),
            error => next({
                error: error.message || 'Something bad is not correct!',
                type: failureType
            })
        );
} 