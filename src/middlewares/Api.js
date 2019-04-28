export const CALL_API = 'CALL_API';

const API_ROOT = 'https://cors-anywhere.herokuapp.com/https://expenses-control-node.herokuapp.com/'

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
const callApi = async (endpoint, isPost = false, body = {}) => {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint;

  let init  = {method: 'GET'};

  if (isPost) {
      init = {
          method: 'POST',
          body: convertObjectToFormData(body)
      }
  }

  return fetch(fullUrl, init)
    .then(response =>
      response.json().then(json => {
        if (!response.ok) {
            console.log(json);
            return Promise.reject(json)
        }

        console.log(json);
        return json;
      })
    )
}

const convertObjectToFormData = (object) => {
    let formData = new FormData();

    for (var key in object) {
        formData.append(key, object[key]);
    }

    return formData;
}

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => action => {
    const callAPI = action[CALL_API]

    if (typeof callAPI === 'undefined') {
        return next(action);
    }

    const { endpoint, isPost = false, body = {}, types } = callAPI;

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

    return callApi(endpoint, isPost, body)
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