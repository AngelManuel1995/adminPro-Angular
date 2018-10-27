import { Component, Input } from "@angular/core";

@Component({
    selector:'app-graphic',
    templateUrl:'./graphic.component.html'
})

export class GraphicComponent{
    @Input() leyenda:string = ""
    @Input() pieChartLabels:string[] = []
    @Input() pieChartData:number[] = [] 

    //public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
    //public pieChartData:number[] = [300, 500, 100];
    public pieChartType:string = 'pie';
    constructor(){

    }
}