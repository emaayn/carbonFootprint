import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  missions = [
    {
      id: 1,
      img: '../../../assets/icons/green-energy.png',
      title: 'TEMİZ ENERJİ',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et feugiat mi. Sed lacinia euismod convallis. Nam pharetra aliquam leo, Sed lacinia euismod convallis.'
    },
    {
      id: 2,
      img: '../../../assets/icons/cup.png',
      title: 'PLASTİK TÜKETİMİ',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et feugiat mi. Sed lacinia euismod convallis. Nam pharetra aliquam leo, Sed lacinia euismod convallis.'
    },
    {
      id: 3,
      img: '../../../assets/icons/eco-fuel.png',
      title: 'FOSİL YAKITLAR',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et feugiat mi. Sed lacinia euismod convallis. Nam pharetra aliquam leo, Sed lacinia euismod convallis.'
    }
  ]
  slideConfig = { slidesToShow: 1, slidesToScroll: 1 };
  constructor() { }

  ngOnInit(): void {
  }

}
