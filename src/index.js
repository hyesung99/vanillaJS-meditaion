import Home from "./views/home.js";
import MyPage from "./views/myPage.js";
import Settings from "./views/settings.js";
import './css/index.css';

const routes = [
  {path: "/", view: new Home()},
  {path: "/myPage", view: new MyPage()},
  {path: "/settings", view: new Settings()}
]
const router = async () => {

  let currentView;

  for(const route of routes){
    if(location.pathname === route.path){
      currentView = route.view;
    }
  }
  document.querySelector('#app').innerHTML = await currentView.page.innerHTML;
}

window.addEventListener("popstate", () => {
  router();
})

document.addEventListener("DOMContentLoaded", () => {
  router();
  const links = document.querySelectorAll('a');
  console.log(links);
  for(const link of links){
    link.addEventListener('click', e => {
      e.preventDefault();
      history.pushState(null, null, e.target.href);
      router();
    })
  }
})