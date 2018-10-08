export default {
  fetchUsers (nb = 0) {
    return fetch(`https://randomuser.me/api/?inc=gender,name,picture&nat=fr&results=${nb}`)
      .then(res => res.json())
      .then(data => data.results)
  }
}
