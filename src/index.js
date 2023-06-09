import Home from "./views/home";

const routes = [
  {path: "/", view: new Home()}
]
const router = async () => {

  let current_view = routes[0];

  for(const route of routes){
    if(location.pathname === route.path){
      current_view = route
    }
  }
  document.querySelector('#app').appendChild = await current_view.getHomeDiv
}

window.addEventListener("popstate", () => {
  router();
})

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener('click', e => {
    e.preventDefault();
    history.pushState(null, null, e.target.href);
    router();
  })
})