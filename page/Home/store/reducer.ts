import { TOGGLE_SIDEBAR_STATUS, TIME_SELECT, CHANNEL_SELECT, START_TIME, END_TIME, SET_LIST_DATA } from './actionTypes';

const initState = {
    sidebarStatus: false,
    timeValue: 'anytime',
    channelValue: 'all',
    startTime: '',
    endTime: '',
    listData: 1

};
export default function (state=initState, action) {
    switch (action.type) {
        case TOGGLE_SIDEBAR_STATUS: {
            return {
                ...state,
                sidebarStatus: action.payload
            }
        }
        case TIME_SELECT: {
            return {
                ...state,
                timeValue: action.payload
            }
        }
        case START_TIME: {
            return {
                ...state,
                startTime: action.payload
            };
        }
        case END_TIME: {
            return {
                ...state,
                endTime: action.payload
            };
        }
        case CHANNEL_SELECT: {
            return {
                ...state,
                channelValue: action.payload
            };
        }
        case SET_LIST_DATA: {
            return {
                ...state,
                listData: action.payload
            }
        }
        default: {
            return initState;
        }
    }
}