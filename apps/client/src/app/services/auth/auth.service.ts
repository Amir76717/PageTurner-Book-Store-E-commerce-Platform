import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseURL = environment.apiUrlV1;
  private apiUrl = this.baseURL + '/auth';
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  private currentUserSubject = new BehaviorSubject<any>(null);

  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {
    // Check initial auth state
    this.getCurrentUser().subscribe({
      next: (user) => {
        this.isAuthenticatedSubject.next(true);
        this.currentUserSubject.next(user);
      },
      error: () => {
        this.isAuthenticatedSubject.next(false);
        this.currentUserSubject.next(null);
      },
    });
  }

  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http
      .post(`${this.apiUrl}/login`, credentials, {
        headers: this.headers,
        withCredentials: true,
      })
      .pipe(
        tap((response: any) => {
          this.isAuthenticatedSubject.next(true);
          this.currentUserSubject.next((response as any)?.data?.user);
        })
      );
  }

  signup(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, userData, {
      headers: this.headers,
      withCredentials: true,
    });
  }

  logout(): Observable<any> {
    return this.http
      .post(
        `${this.apiUrl}/logout`,
        {},
        {
          headers: this.headers,
          withCredentials: true,
        }
      )
      .pipe(
        tap(() => {
          document.cookie = `token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
          this.isAuthenticatedSubject.next(false);
          this.currentUserSubject.next(null);
        })
      );
  }

  forgotPassword(email: string) {
    return this.http.post(`${this.apiUrl}/forgot-password`, { email });
  }

  getCurrentUser(): Observable<any> {
    return this.http
      .get(`${this.baseURL}/users/me`, {
        headers: this.headers,
        withCredentials: true,
      })
      .pipe(
        tap((user) => {
          this.currentUserSubject.next(user);
          this.isAuthenticatedSubject.next(true);
        })
      );
  }
  updateProfile(userData: any): Observable<any> {
    return this.http
      .patch(`${this.baseURL}/users/me`, userData, {
        headers: this.headers,
        withCredentials: true,
      })
      .pipe(
        tap(() => {
          // Update the current user data
          const updatedUser = { ...this.currentUserSubject.value, ...userData };
          this.currentUserSubject.next(updatedUser);
        })
      );
  }

  changePassword(passwordData: { currentPassword: string; newPassword: string }): Observable<any> {
    return this.http.post(`${this.baseURL}/users/me/change-password`, passwordData, {
      headers: this.headers,
      withCredentials: true,
    });
  }
  get isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }
  get currentUser(): any {
    return this.currentUserSubject.value;
  }
  getAddresses(): Observable<any> {
    return this.http.get(`${this.baseURL}/users/me/address`, {
      headers: this.headers,
      withCredentials: true,
    });
  }
  verifyEmail(data: { token: string }) {
    return this.http.post(`${this.apiUrl}/active-email`, data);
  }
  addAddress(addressData: any): Observable<any> {
    return this.http.post(`${this.baseURL}/users/me/address`, addressData, {
      headers: this.headers,
      withCredentials: true,
    });
  }
  updateAddress(addressId: string, addressData: any): Observable<any> {
    return this.http.patch(`${this.baseURL}/users/me/address/${addressId}`, addressData, {
      headers: this.headers,
      withCredentials: true,
    });
  }
  deleteAddress(addressId: string): Observable<any> {
    return this.http.delete(`${this.baseURL}/users/me/address/${addressId}`, {
      headers: this.headers,
      withCredentials: true,
    });
  }

  resetPassword(data: { newPassword: string; token: string }) {
    return this.http.post(`${this.apiUrl}/reset-password`, data);
  }
}
