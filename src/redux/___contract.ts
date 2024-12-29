export interface AuthState {
    user: any | null;
    token: string | null;
    isAuthenticated: boolean;
    loading: boolean;
    error: string | null;
    loggedInUser: any | null;
}

export const initialState: AuthState = {
    user: null,
    token: null,
    isAuthenticated: false,
    loading: false,
    error: null,
    loggedInUser: null
}