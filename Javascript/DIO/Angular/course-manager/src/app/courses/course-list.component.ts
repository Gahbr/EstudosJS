import { Component } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: "app-course-list",
    templateUrl: './course-list.component.html'
})

export class CourseListComponent{
    courses : Course[] = [];

    ngOnInit(): void{
        this.courses = [
            { id : 1,
              name : 'Angular Forms',
              imageUrl : '',
              price : 999.99,
              code : 'XPS-8796',
              duration : 120,
              rating : 5.4,
              releaseDate: '10/10/2018'
            },
            { id : 2,
                name : 'Angular http',
                imageUrl : '',
                price : 45.99,
                code : 'LKL-8796',
                duration : 80,
                rating : 4,
                releaseDate: '10/02/2019'
              },

           
        ]
    }   

}