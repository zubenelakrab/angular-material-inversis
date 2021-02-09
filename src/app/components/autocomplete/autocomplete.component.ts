import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { NasaService } from "../../services/nasa.service";

interface Option {
  value: string;
  description: string;
}

@Component({
  selector: "autocomplete-example",
  templateUrl: "./autocomplete.component.html",
  styleUrls: ["./autocomplete.component.css"]
})
export class AutocompleteComponent implements OnInit {
  title = "ngNasaApi";
  myControl = new FormControl();

  public options: Option[] = [
    {
      value: "One",
      description: "the first one"
    },
    {
      value: "Two",
      description: "the second one"
    },
    {
      value: "Three",
      description: "the third one"
    }
  ];

  public nasaImgObj: any;

  constructor(private nasaApi: NasaService) {}

  ngOnInit() {
    this.nasaApi.getPatent().subscribe(response => {
      this.nasaImgObj = response;
      console.log("NASA API response", response);
    });
  }
}
