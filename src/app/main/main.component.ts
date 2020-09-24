import { Component, OnInit,AfterViewInit,Renderer2 } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit,AfterViewInit {

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
