function handleSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  localStorage.setItem("contactName", name);
  window.location.href = "thankyou.html";
}
