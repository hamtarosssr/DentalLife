export const authentication = (response, next) => {
    if (typeof window !== "undefined") {
        // เก็บข้อมูลลง sessionStorage
        sessionStorage.setItem("token", JSON.stringify(response.data.token));
        sessionStorage.setItem("email", JSON.stringify(response.data.email));
    }
    next();
};

//ดึงข้อมูล token
export const getToken = () => {
    if (typeof window !== "undefined") {
        if (sessionStorage.getItem("token")) {
            return JSON.parse(sessionStorage.getItem("token"));
        } else {
            return false;
        }
    }
};

//ดึงข้อมูล user
export const getUser = () => {
    if (typeof window !== "undefined") {
        if (sessionStorage.getItem("email")) {
            return JSON.parse(sessionStorage.getItem("email"));
        } else {
            return false;
        }
    }
};

//logout
export const logout = (next) => {
    if (typeof window !== "undefined") {
        // remove sessionStorage
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("email");
    }
    next();
};