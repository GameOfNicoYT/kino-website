import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent {
  constructor(private http: HttpClient) {}

  getMovies() {
    this.http.get<any>('http://localhost:5000/getMovies').subscribe({
      next: (data) => {
        const movies = data.movies;

        for (let i = 0; i < movies.length; i++) {
          document.getElementById('movies')!.innerHTML += `
          <div class="card m-5" style="width: 18rem">
            <img src="${movies[i].img}" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">${movies[i].title}</h5>
              <p class="card-text">${movies[i].short_description}</p>
              <a href="#" class="btn btn-primary">Details ansehen</a>
            </div>
          </div>`;
        }
      },
      error: (err) => {},
    });
  }

  ngOnInit() {
    this.getMovies();
  }
}
