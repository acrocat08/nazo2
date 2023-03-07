
const serverURL = "http://0.0.0.0:5000";

async function get_data() {
    const response = await fetch(serverURL + "/test", { mode: 'cors' });
    return await response.json();
}

export { get_data };