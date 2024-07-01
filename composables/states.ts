export const useToken = (token: string) => useState('token', () => token);

export const useCounter = () => useState<number>('counter', () => 0)

export const useColor = () => useState<string>('color', () => 'pink')

export const useAuth = () => {
    const isLogined = () => {
        const cookie: any = useCookie("state");
        // console.log('cookie', cookie.value.isLogined);
        return !!cookie.value?.isLogined
    };
    
    return {
        isLogined
    }
}