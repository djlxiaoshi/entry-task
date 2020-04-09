import { REPLY_ITEM, SET_REPLY_MODE } from './actionTypes';

const initState = {
    replyItem: null,
    isReplyMode: false
};

export default function (state=initState, action) {
    const value = action.payload;
    switch (action.type) {
        case REPLY_ITEM: {
            return {
                ...state,
                replyItem: value
            }
        }
        case SET_REPLY_MODE: {
            return {
                ...state,
                isReplyMode: value
            }
        }
        default: {
            return initState
        }
    }
}