export default class Home {
  constructor(){
    this.page = document.createElement('div');

    this.page.className = 'home';
    this.page.innerHTML = `
                            <h1>home-page</h1>
                            <p>This is home page.</p>
                            <p>
                              want meditation...
                            </p>
                          `;
  }
}