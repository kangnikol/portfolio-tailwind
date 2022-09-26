window.dataLayer = window.dataLayer || []

function t() {
  dataLayer.push(arguments)
}
t("js", new Date())
t("config", "UA-77712845-1")
const n = document.querySelector("#contact"),
  e = document.querySelector("#contactModal"),
  d = document.querySelector("#close")
n.addEventListener("click", () => {
  e.classList.remove("hidden"),
    setTimeout(() => (e.children[0].style.top = "0"), 10)
})

function c() {
  ;(e.children[0].style.top = "1024px"),
    setTimeout(() => e.classList.add("hidden"), 250)
}
d.addEventListener("click", () => {
  c()
})
document.body.addEventListener("keyup", (o) => {
  o.key === "Escape" && c()
})
