let searcher$$ = document.getElementById("input");
let button$$ = document.getElementById("button");
async function fetchData() {
  let users = [];
  await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((e) => (users = e));
    searcher$$.addEventListener("input", () => searchUser(users));
  renderUsers(users);
}
const searchUser = (users) => {
  const userfiltered = [];
  for (const user of users) {
    if (user.id === parseInt(searcher$$.value)) {
      userfiltered.push(user);
    }
  }
  renderUsers(userfiltered);
};

function renderUsers(users) {
  let list = document.querySelector("#container");
  list.innerHTML = ``;
  for (const user of users) {
    let dlId$$ = document.createElement("dl");
    let dtId$$ = document.createElement("dt");
    let ddId$$ = document.createElement("dd");

    let dlName$$ = document.createElement("dl");
    let dtName$$ = document.createElement("dt");
    let ddName$$ = document.createElement("dd");

    let dlCity$$ = document.createElement("dl");
    let dtCity$$ = document.createElement("dt");
    let ddCity$$ = document.createElement("dd");

    dlId$$.classList.add("dl_container");
    dtId$$.classList.add("dt_id");
    ddId$$.classList.add("dd_id");
    dtName$$.classList.add("dt_name");
    ddName$$.classList.add("dd_name");
    dtCity$$.classList.add("dt_city");
    ddCity$$.classList.add("dd_city");
    let city = user.address.city;
    dtId$$.innerHTML = `Id`;
    ddId$$.innerHTML = `${user.id}`;
    dtName$$.innerHTML = `Name`;
    ddName$$.innerHTML = `${user.name}`;
    dtCity$$.innerHTML = `Ciudad`;
    ddCity$$.innerHTML = `${city}`;
    list.appendChild(dlId$$);
    dlId$$.appendChild(dtId$$);
    dlId$$.appendChild(ddId$$);
    list.appendChild(dlName$$);
    dlName$$.appendChild(dtName$$);
    dlName$$.appendChild(ddName$$);
    list.appendChild(dlCity$$);
    dlCity$$.appendChild(dtCity$$);
    dlCity$$.appendChild(ddCity$$);
  }
}

fetchData();
