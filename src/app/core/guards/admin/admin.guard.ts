import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const token = localStorage.getItem('userToken');
  if (!token) {
    router.navigate(['/login']);
    return false;
  }

  try {
    const userData: any = jwtDecode(token);
    const role = userData["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

    if (role === 'Admin') {
      return true;
    } else {
      router.navigate(['/home']);
      return false;
    }
  } catch (e) {
    router.navigate(['/login']);
    return false;
  }
};
