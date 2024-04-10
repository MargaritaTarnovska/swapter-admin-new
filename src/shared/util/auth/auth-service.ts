import { Api } from '../../api/api';

export enum UserRoles {
  Admin = 'ADMIN',
  Support = 'SUPPORT',
}

export type AuthState = {
  authenticated: boolean;
  role?: UserRoles;
};

export class AuthService {
  public static storeUser(payload: { role: UserRoles }) {
    window.localStorage.setItem(
      'auth',
      JSON.stringify({
        authenticated: true,
        ...payload,
      }),
    );
  }

  public static async unregisterUser() {
    try {
      await Api.get('/logout');
      window.localStorage.setItem(
        'auth',
        JSON.stringify({
          authenticated: false,
        }),
      );
    } catch (e) {
      console.log(e);
    }
  }

  public static getLastAuthState(): AuthState | null {
    const auth = window.localStorage.getItem('auth');
    return auth ? JSON.parse(auth) : null;
  }
}
