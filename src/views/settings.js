export default class Settings {
  constructor(){
    this.page = document.createElement('div');

    this.page.className = 'settings';
    this.page.innerHTML = `
                            <h1>Settings</h1>
                            <p>This is settings.</p>
                            <p>
                              your config...
                            </p>
                          `;
  }
}