function validateStatusCode(response) {
  return new Promise((resolve, reject) => {
    const status = response.status;
    const next = status < 400 ? resolve : reject;
    response.text().then(next);
  });
}

function onResponseValid(payload) {
  return new Promise((resolve, reject) => resolve(parsePayload(payload)))
}

function onResponseInvalid(payload) {
  return new Promise((resolve, reject) => reject(parsePayload(payload)))
}


function parsePayload(payload) {
  try {
    return JSON.parse(payload);
  } catch (err) {
    return payload;
  }
}

function makeRequest(method, url, data = null, stubData = null) {
  if (stubData)
    return new Promise((resolve, reject) => setTimeout(() => stubData.isError ? reject(stubData) : resolve(stubData), 1000));
  let fetchParams = {
    method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  };
  const token = localStorage.getItem('token');
  if(token) fetchParams.headers['Authorization'] = `Bearer ${token}`;
  if (data) fetchParams.body = JSON.stringify(data);
  return fetch(url, fetchParams)
    .then(validateStatusCode)
    .catch(onResponseInvalid)
    .then(onResponseValid);
}

export function get(url, stubData = null) {
  return makeRequest('GET', url, null, stubData);
}

export function post(url, data, stubData = null) {
  return makeRequest('POST', url, data, stubData);
}

export function put(url, data, stubData = null) {
  return makeRequest('PUT', url, data, stubData);
}

export function patch(url, data, stubData = null) {
  return makeRequest('PATCH', url, data, stubData);
}

export function remove(url, stubData = null) {
  return makeRequest('DELETE', url, null, stubData);
}