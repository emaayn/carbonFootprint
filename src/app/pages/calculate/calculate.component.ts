import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.scss']
})
export class CalculateComponent implements OnInit {
  progress = [
    {id: 1, name: 'Ev Enerjisi', icon: 'plug', status: 1, },
    {id: 2, name: 'Alışveriş', icon: 'shop', status: 0, },
    {id: 3, name: 'Ulaşım', icon: 'car', status: 0, },
    {id: 4, name: 'Gıda', icon: 'utensils', status: 0, },
    {id: 5, name: 'Sonuçlar', icon: 'graph', status: 0, },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
