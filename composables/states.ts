export const useToken = (token: string) => useState('token', () => token);

export const useCounter = () => useState<number>('counter', () => 0)

export const useColor = () => useState<string>('color', () => 'pink')

export const useAuth = () => {
    const isLoggedIn = () => {
        const cookie = useCookie("kkb:sess");
        console.log('cookie', cookie);
        return !!cookie?.value;
    };
    
    return {
        isLoggedIn
    }
}