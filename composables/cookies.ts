export const useCookies = () => {
    const deleteCookie = (cookieName: any) => {
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;

    };
    
    return {
        deleteCookie
    }
}