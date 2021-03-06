import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import { SERVER_URL } from 'react-native-dotenv';

function fetchQuery(operation, variables) {
  return fetch(SERVER_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json();
  });
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),  
});

export default environment;