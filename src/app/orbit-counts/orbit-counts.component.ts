import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite'

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];
  arr: string [];

  constructor() { 
    this.arr = ['Space Debris', 'Communication', 'Probe', 'Positioning', 'Space Station', 'Telescope']
    console.log(this.arr)
  }

  ngOnInit() {
  }

  total(item: string, satellites) :number {
    let total: number = 0;
    
    for(let i = 0; i < satellites.length; i++){
      if(item === satellites[i].type){
        total += 1
      }
    }

    return total
  }
}
