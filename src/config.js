const api = "http://localhost:3000";

export const genericHeaders = () => ({
    "Content-Type": "application/json",
    "Accept": "application/json"
});

export const authHeaders = () => ({
    ...(genericHeaders()),
    "x-access-token": localStorage.getItem('x-access-token')
});

export const formDataHeader = (hasToken = true) => ({
    "Content-Type": "multipart/form-data",
    ...hasToken && { "x-access-token": localStorage.getItem('x-access-token') }
});

export const emailjsTemplateID = `template_aPyow3xB`;
export const emailjsUserID = `user_8JfVAbiiER6TTfD8Ol7Ge`;

export default api;