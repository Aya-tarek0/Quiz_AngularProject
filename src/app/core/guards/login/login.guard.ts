import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

export const loginGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  if (typeof localStorage !== 'undefined') {
    const token = localStorage.getItem('userToken');

    if (!token) {
      return true;
    }

    const userData: any = jwtDecode(token);
    const role = userData["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

    if (role === 'Admin') {
      return router.navigate(['/exams']);
    } else if (role === 'Student') {
      return router.navigate(['/studentDashboard']);
    } else {
      return router.navigate(['/home']);
    }
  }

  return true;
};
