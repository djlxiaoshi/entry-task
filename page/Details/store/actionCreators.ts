import  { REPLY_ITEM, SET_REPLY_MODE } from './actionTypes';

export function createReplyItemAction (value) {
    return {
        type: REPLY_ITEM,
        payload: value
    }
}

export function createChangeReplyModeAction (value) {
    return {
        type: SET_REPLY_MODE,
        payload: value
    }
}

