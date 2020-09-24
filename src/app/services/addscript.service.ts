import { Injectable,Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddscriptService {

  constructor(private renderer:Renderer2) { }

 
  public loadScripts() {
    this.renderExternalScript('assets/js/main.js').onload = () => {
    }
    this.renderExternalScript('assets/js/nouislider.js').onload = () => {
    }
    this.renderExternalScript('assets/js/jquery.min.js').onload = () => {
    }
    this.renderExternalScript('assets/js/jquery.zoom.min.js').onload = () => {
    }
    this.renderExternalScript('assets/js/slick.min.js').onload = () => {
    }
  }
  public renderExternalScript(src: string): HTMLScriptElement {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.async = true;
    script.defer = true;
    this.renderer.appendChild(document.body, script);
    return script;
  }
}
