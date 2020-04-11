import {
    TOGGLE_SIDEBAR_STATUS,
    TIME_SELECT,
    CHANNEL_SELECT,
    START_TIME,
    END_TIME,
    SET_LIST_DATA,
    GET_LIST_DATA
} from './actionTypes';

/*
* 切换侧边栏菜单状态
* */
export function toggleSidebarStatus (status: boolean): object {
    return {
        type: TOGGLE_SIDEBAR_STATUS,
        payload: status
    }
}

/*
* 更改时间选择器
* */
export function changeTimeSelect (value: string): object {
    return {
        type: TIME_SELECT,
        payload: value
    }
}

/*
* 更改开始时间
* */
export function changeStartTime (value: string): object {
    return {
        type: START_TIME,
        payload: value
    }
}

/*
* 更改结束时间
* */
export function changeEndTime (value: string): object {
    return {
        type: END_TIME,
        payload: value
    }
}


/*
* 更改频道选择器
* */
export function changeChannelSelect (value: string): object {
    return {
        type: CHANNEL_SELECT,
        payload: value
    }
}

export function getListData (params) {
    return {
        type: GET_LIST_DATA,
        payload: params
    }
}

/*
*
* */
export function setListData (value) {
    return {
        type: SET_LIST_DATA,
        payload: value
    }
}
