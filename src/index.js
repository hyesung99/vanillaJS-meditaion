import Home from "./views/home";
import MyPage from "./views/myPage";
import Settings from "./views/settings";

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
  console.log(currentView);
  document.querySelector('#app').innerHTML = await currentView.page.innerHTML;
}

window.addEventListener("popstate", () => {
  router();
})

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('a');
  for(const link of links){
    link.addEventListener('click', e => {
      e.preventDefault();
      history.pushState(null, null, e.target.href);
      router();
    })
  }
})