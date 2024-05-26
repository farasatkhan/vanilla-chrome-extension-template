const API_URL = "";

export const fetchData = async () => {
    fetch(API_URL)
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .catch((error) => {
        console.error(error);
    })
    .finally(() => {
        console.log("API call is done");
    });
};