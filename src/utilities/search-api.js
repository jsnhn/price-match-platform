import sendRequest from './send-request';

const BASE_URL = '/api/search';

export async function searchItems(queryData) {
    return sendRequest(BASE_URL, 'POST', queryData)
}