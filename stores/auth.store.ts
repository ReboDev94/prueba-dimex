interface User {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    token: string;
    role: string

}
type TStatusAuthenticated = 'authenticated' | 'error' | 'un-authenticated';

interface State {
    user: User | null,
    loading: boolean,
    statusAuthenticated: TStatusAuthenticated
}


export const useAuthStore = defineStore('authStore', {
    state: (): State => ({
        user: null,
        loading: false,
        statusAuthenticated: 'un-authenticated'
    }),
    getters: {
        isErrorAuth(state) {
            return state.statusAuthenticated === 'error';
        },
        isLoading(state) {
            return state.loading;
        },
        isUser(state) {
            return state.user
        }
    },
    actions: {
        async login(username: string, password: string) {
            this.loading = true;
            const { data, pending, error } = await useFetch<User>('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: {
                    username,
                    password,
                },
            })
            this.loading = false;
            if (data.value) {
                const token = useCookie('token');
                token.value = data.value.token;
                this.setDataUser(data.value);
            }
            if (error.value) this.statusAuthenticated = 'error'
        },
        async getUser() {
            const token = useCookie('token');
            const { data, error } = await useFetch<User>('https://dummyjson.com/auth/me', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token.value}`,
                },
            });

            if (data.value) {
                const {
                    id,
                    username,
                    email,
                    firstName,
                    lastName,
                    gender,
                    image } = data.value;
                this.setDataUser(
                    {
                        id,
                        username,
                        email,
                        firstName,
                        lastName,
                        gender,
                        image,
                        token: token.value as string,
                        role: ''
                    }
                );
            }

            if (error.value) {
                this.logout();
            }

        },
        logout() {
            const token = useCookie('token');
            token.value = null;
            this.user = null;
            this.statusAuthenticated = 'un-authenticated'
        },
        setDataUser(user: User) {
            this.user = { ...user, role: 'admin' }
            this.statusAuthenticated = 'authenticated'
        },
        setStatusAuthenticated(status: TStatusAuthenticated) {
            this.statusAuthenticated = status
        }
    }
})