import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({ 
  selector: 'app-card',  
  template: `
<div class="center">
<article class="card">
  <img src="https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?cs=srgb&dl=pexels-martin-damboldt-814499.jpg&fm=jpg" class="image">
  <h2 class="card__title">
    Card Title
  </h2>
  <p>Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More Bingo. Lorem Ipum doth be hard.</p>
</article>
</div>
  `,
})
export class CardComponent {
  @Input() card: any;
}