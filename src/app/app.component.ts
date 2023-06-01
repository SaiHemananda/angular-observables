import { Component } from '@angular/core';
import { oActor, oName, oFlops  } from './Observables';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name;

  ngOnInit() {
    /*vhvj
      1. log out the actor's name from the oActor
        can you do it by modifying the stream before you subscribe to it?
      2. set the name property of this component to be the data in the oName observable
      3. get the flops out of the oFlops observable and get them displaying on the screen
    */
    
  }
}
