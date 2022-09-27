export function fetchProfile(id) {
  return fetch(`https://62b55a25da3017eabb18fac1.mockapi.io/users/${id}`).then(
    (value) => value.json()
  );
}

export function updateProfile(id, body) {
  return fetch(`https://62b55a25da3017eabb18fac1.mockapi.io/users/${id}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    method: "PUT",
  }).then((value) => value.json());
}
