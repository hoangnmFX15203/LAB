export const addComment = (data) => {
    return {
        type: 'comments/addComment',
        payload: data,
    };
};

// export const ADD_COMMENTS = 'ADD_COMMENTS';
// export const COMMENTS_FAILED = 'COMMENTS_FAILED';
// export const PROMOS_LOADING = 'PROMOS_LOADING';
// export const ADD_PROMOS = 'ADD_PROMOS';
// export const PROMOS_FAILED = 'PROMOS_FAILED';
