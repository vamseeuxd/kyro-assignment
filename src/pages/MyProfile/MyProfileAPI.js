// A mock function to mimic making an async request for data
export function fetchProfile(id) {
  return fetch(`https://62b55a25da3017eabb18fac1.mockapi.io/users/${id}`).then((value) => value.json());
  /* return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  ); */
}
