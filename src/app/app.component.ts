import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colors = [
    { id: 1, colorCode: '#6f98a8' },
    { id: 2, colorCode: '#2b8ead' },
    { id: 3, colorCode: '#2f454e' },
    { id: 4, colorCode: '#2b8ead' },
    { id: 5, colorCode: '#2f454e' },
    { id: 6, colorCode: '#bfbfbf' },
    { id: 7, colorCode: '#bfbfbf' },
    { id: 8, colorCode: '#6f98a8' },
    { id: 9, colorCode: '#2f454e' }
  ];

  

    shuffle(){
      console.log(this.colors)
    return this.colors.sort(() => Math.random() - 0.5);
   }
 

  sort() {
    console.log(this.colors)
  return this.colors.sort((a ,b ) => a.id - b.id) ;
  }
}