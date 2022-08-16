import {Injectable} from '@angular/core';
import {Hero} from "./hero";
import {catchError, Observable, of, tap} from "rxjs";
import {HEROES} from "./mock-heroes";
import {Router} from "@angular/router";
import {MessageService} from "./message.service";
import {Location} from "@angular/common";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroes: Hero[] = HEROES
  isHeroDetail = true
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  private heroesUrl = 'api/heroes'

  constructor(private router: Router,
              private messageService: MessageService,
              private location: Location,
              private http: HttpClient) {
  }

  getIsHeroDetail(): boolean {
    this.isHeroDetail = this.location.isCurrentPathEqualTo('/heroes');
    return this.isHeroDetail
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap(_ => {
        this.heroes = _
        this.log('fetched heroes')
      }),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    )
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`
    this.messageService.openSnackBar(`HeroesComponent: Selected hero id=${id}`)
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    )
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    )
  }

  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`update hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero')),
    )
  }

  deleteHero(hero: Hero): Observable<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`
    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${hero.id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      return of([])
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found heroes matching "${term}"`) :
        this.log(`no heroes matching "${term}"`)
      ),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error)
      this.log(`${operation} failed ${error.message}`)
      return of(result as T)
    }
  }

  private log(message: string) {
    this.messageService.openSnackBar(`HeroService: ${message}`);
  }

}
