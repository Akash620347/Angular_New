const url = 'https://api.restful-api.dev/objects';

const apiResponse = async () => {
        let response = await fetch(url);
        let data = await response.json();
        console.log("API response", data);
}
