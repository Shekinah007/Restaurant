export default function contactComponent() {
  const contactContent = document.createElement("div");
  contactContent.classList.add("contact-content");

  const call = document.createElement("p");
  call.innerText = "Call - 091-1208-28371";

  const address = document.createElement("p");
  address.innerText = "2, Country Home, Edo";

  contactContent.append(call, address);

  return contactContent;
}
