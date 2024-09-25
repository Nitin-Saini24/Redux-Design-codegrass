export const userAuth = () => {
    const token = localStorage.getItem("userInfo");
    // Here you can also decode and check the token's expiration if needed
    return !!token; // returns true if the token exists
};