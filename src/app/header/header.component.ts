import { Component, OnInit, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,AfterViewInit {

  constructor(private renderer:Renderer2) { }

  ngOnInit(): void {
  }
  ngAfterViewInit() { 
    this.loadScripts();
  }
  public loadScripts() {

     this.renderExternalScript("assets/js/jquery.min.js").onload = () => {
    }
     this.renderExternalScript("assets/js/bootstrap.min.js").onload = () => {
    }
     this.renderExternalScript("assets/js/slick.min.js").onload = () => {
    }
     this.renderExternalScript("assets/js/nouislider.min.js").onload = () => {
    }
     this.renderExternalScript("assets/js/jquery.zoom.min.js").onload = () => {
    }
     this.renderExternalScript("assets/js/main.js").onload = () => {
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
