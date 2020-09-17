import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Satellite } from "./satellite";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "orbit-report";
  satellitesUrl: string =
    "https://handlers.education.launchcode.org/static/satellites.json";
  sourceList: Satellite[] = [];
  displayList: Satellite[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get(this.satellitesUrl)
      .toPromise()
      .then((data: any) => {
        const { satellites } = data;

        satellites.forEach((sat) => {
          this.sourceList.push(
            new Satellite(
              sat.name,
              sat.type,
              sat.launchDate,
              sat.orbitType,
              sat.operational
            )
          );
        });

        this.displayList = this.sourceList.slice();
      });
  }

  search(searchTerm: string): void {
    let matchingSatellites: Satellite[] = [];
    searchTerm = searchTerm.toLowerCase();
    for (let i = 0; i < this.sourceList.length; i++) {
      let name = this.sourceList[i].name.toLowerCase();
      let type = this.sourceList[i].type.toLowerCase();
      let orbitType = this.sourceList[i].orbitType.toLowerCase();
      if (
        name.indexOf(searchTerm) >= 0 ||
        type.indexOf(searchTerm) >= 0 ||
        orbitType.indexOf(searchTerm) >= 0
      ) {
        matchingSatellites.push(this.sourceList[i]);
      }
    }
    // assign this.displayList to be the the array of matching satellites
    // this will cause Angular to re-make the table, but now only containing matches
    this.displayList = matchingSatellites;
  }
}
