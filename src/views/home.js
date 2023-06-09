export default class Home {
  constructor(){
    this.page = document.createElement('div');

    page.className = 'home';
    page.innerHTML = `
                      <h1>home-page</h1>
                      <p>This is home page.</p>
                      <p>
                        want meditation...
                      </p>
                    `;
  }

  get page() {
    return this.page;
  }

  set page(div) {
    this.page = div;
  } 
}