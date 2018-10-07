export default class {
  constructor () {
    this.users = []
  }

  fetchUsers () {
    fetch('https://randomuser.me/api/?inc=gender,name,picture&results=10')
      .then(res => res.json())
      .then(({ response }) => {
        this.users = response
      })
  }
}
