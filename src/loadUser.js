import httpGet from './http';

export default function loadUser(id) {
  // bad practice
  const str = `http://server:8080/user/\${${id}}`;
  const data = httpGet(str);
  return JSON.parse(data);
}
