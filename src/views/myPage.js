export default class MyPage {
  constructor(){
    this.page = document.createElement('div');

    this.page.className = 'my-page';
    this.page.innerHTML = `
                            <h1>My page</h1>
                            <p>This is My page.</p>
                            <p>
                              Your status...
                            </p>
                          `;
  }
}