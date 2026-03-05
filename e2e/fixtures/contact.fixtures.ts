export const mockEmailJsResponse = {
    status: 200,
    body: 'OK',
};

export const mockEmailJsError = {
    status: 400,
    body: JSON.stringify({
        error: 'Invalid email',
    }),
};
