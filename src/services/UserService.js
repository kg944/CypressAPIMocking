import axios from "axios";

export async function getUsers() {
  let users = [];
  const ret = await axios.get(`https://randomuser.me/api/?results=3`);
  const data = ret.data.results;
  data.forEach((user) => {
    const name = user.name.first + " " + user.name.last;
    users.push(name);
  });
  return users;
}
