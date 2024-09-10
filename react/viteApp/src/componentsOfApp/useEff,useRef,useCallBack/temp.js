function generateRandomString(L) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < L; i++) {
        const randomIndex = Math.floor(Math.random() * (122-65));
        result += characters[randomIndex];
    }
    return result;
}



console.log(generateRandomString(5));
