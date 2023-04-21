import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Book } from '@tmo/shared/models';
import * as BooksActions from './books.actions';
import { Store } from '@ngrx/store';

@Injectable()
export class BooksEffects {
  searchBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BooksActions.searchBooks),
      tap(() => BooksActions.setLoadingSpinner({ status: true })),
      switchMap((action) =>
        this.http.get<Book[]>(`/api/books/search?q=${action.term}`).pipe(
          tap(() => BooksActions.setLoadingSpinner({ status: false })),
          map((data) => BooksActions.searchBooksSuccess({ books: data })),
          catchError((error) => {
            this.store.dispatch(BooksActions.clearSearch());
            return of(BooksActions.searchBooksFailure({ error: error?.error?.message || `Something went wrong! Couldn't fetch Book details for the given search term!` }))
          })
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly http: HttpClient,
    private readonly store: Store
  ) {}
}
