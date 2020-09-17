import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { Satellite } from "../satellite";

@Component({
  selector: "app-orbit-counts",
  templateUrl: "./orbit-counts.component.html",
  styleUrls: ["./orbit-counts.component.css"],
})
export class OrbitCountsComponent implements OnChanges {
  @Input() satellites: Satellite[];
  // Method 1
  count: any;
  // Method 2
  types: string[] = [
    "Space Debris",
    "Communication",
    "Probe",
    "Positioning",
    "Space Station",
    "Telescope",
  ];

  //
  // Method 1
  //
  ngOnChanges(changes: SimpleChanges): void {
    if (changes["satellites"]) {
      this.count = {};
      this.satellites.forEach(
        (sat: Satellite) =>
          (this.count[sat.type] = this.count[sat.type] + 1 || 1)
      );
    }
  }

  //
  // Method 2
  //
  total(item: string): number {
    return this.satellites.filter((satellite) => satellite.type === item)
      .length;
  }
}
