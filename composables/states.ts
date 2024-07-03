export const useToken = (token: string) => useState('token', () => token);

export const useCounter = () => useState<number>('counter', () => 0)

export const useColor = () => useState<string>('color', () => 'pink')

export const useAuth = () => {
    const cookie: any = useCookie("state");
    return !!cookie.value?.isLogined
}