// cookie.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CookieService {
  setCookie(name: string, value: string, ttl?: number, path: string = '/', secure: boolean = false): void {
    let cookieString = `${name}=${encodeURIComponent(value)}; path=${path}`;

    if (ttl) {
      const expires = new Date();
      expires.setTime(expires.getTime() + ttl * 60 * 1000); // Устанавливаем время в минутах
      cookieString += `; expires=${expires.toUTCString()}`;
    }

    if (secure) {
      cookieString += '; secure';
    }

    document.cookie = cookieString;
  }

  // Получение куки по имени
  getCookie(name: string): string | null {
    const nameEQ = `${name}=`;
    const cookies = document.cookie.split(';');

    for (let cookie of cookies) {
      cookie = cookie.trim();
      if (cookie.indexOf(nameEQ) === 0) {
        return decodeURIComponent(cookie.substring(nameEQ.length));
      }
    }

    return null;
  }

  // Удаление куки по имени
  deleteCookie(name: string, path: string = '/'): void {
    // Устанавливаем cookie с прошедшей датой для удаления
    this.setCookie(name, '', -1, path);
  }

  // Проверка, существует ли куки
  hasCookie(name: string): boolean {
    return this.getCookie(name) !== null;
  }

  // Установка cookie с флагом HttpOnly (предполагается серверная поддержка)
  setHttpOnlyCookie(name: string, value: string, minutes?: number): void {
    let cookieString = `${name}=${encodeURIComponent(value)}; HttpOnly`;

    if (minutes) {
      const expires = new Date();
      expires.setTime(expires.getTime() + minutes * 60 * 1000); // Устанавливаем время в минутах
      cookieString += `; expires=${expires.toUTCString()}`;
    }

    document.cookie = cookieString;
  }
}
