import { Component } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  async ngAfterViewInit() {
		await this.loadScript('https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js');
		await this.loadScript('https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js');
	}
private loadScript(scriptUrl: string) {
	   return new Promise((resolve, reject) => {
		 const scriptElement = document.createElement('script');
		 scriptElement.src = scriptUrl;
		 scriptElement.onload = resolve;
		 document.body.appendChild(scriptElement);
		})
   }

  title = 'app';
}



// "./src/assets/fontawesome-free-5.0.12/web-fonts-with-css/css/fa-brands.min.css",
// "./src/assets/fontawesome-free-5.0.12/web-fonts-with-css/css/fa-regular.min.css",
// "./src/assets/fontawesome-free-5.0.12/web-fonts-with-css/css/fa-solid.min.css",
// "./src/assets/fontawesome-free-5.0.12/web-fonts-with-css/css/fontawesome-all.min.css",
// "./src/assets/fontawesome-free-5.0.12/web-fonts-with-css/css/fontawesome.min.css"