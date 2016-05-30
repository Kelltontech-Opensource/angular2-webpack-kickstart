import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  template: `
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <ul class="nav navbar-nav">
          <li linkActive="active">
            <a linkTo="/">Home</a>
          </li>
          <li>
            <a linkTo="/invalid">Invalid Link</a>
          </li>
        </ul>
      </div>
    </nav>
  `
})
export class NavBar { }
