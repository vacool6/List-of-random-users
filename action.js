const button = document.querySelector("button");
const division = document.querySelector("div");

button.addEventListener("click", () => {
  let data, img, name, phoneNum, email, address, st;
  //
  const div = document.createElement("div");
  div.style.display = "inline-block";
  div.style.margin = "2rem";
  const image = document.createElement("img");
  image.style.width = "20rem";
  image.style.height = "20rem";
  //
  const title = document.createElement("h2");
  const phone = document.createElement("h3");
  const emailID = document.createElement("h4");
  const location = document.createElement("h4");
  const state = document.createElement("h4");
  //
  title.style.color = "white";
  phone.style.color = "white";
  emailID.style.color = "white";
  location.style.color = "white";
  state.style.color = "white";
  //
  division.append(div);
  div.append(image);
  div.append(title);
  div.append(phone);
  div.append(emailID);
  div.append(location);
  div.append(state);
  //
  axios
    .get("https://randomuser.me/api/")
    .then((res) => {
      data = res.data.results[0];
      console.log(data);

      img = data.picture.large;
      name = data.name.first + " " + data.name.last;
      phoneNum = data.cell;
      email = data.email;
      address = data.location.country;
      st = data.location.state;

         if (name === undefined) {
           div.remove();
         } else {
           image.src = `${img}`;
           title.innerText = `Full name: ${name}`;
           phone.innerText = `Phone number: ${phoneNum}`;
           emailID.innerText = `Mail ID: ${email}`;
           location.innerText = `Country: ${address}`;
           state.innerText = `State: ${st}`;
         }
    })
    .catch((err) => console.log(err));
});
