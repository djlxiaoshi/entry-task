import { TEST } from './actionTypes';

const initState = {


};

export default function (state=initState, action) {
    switch (action.type) {
        case TEST: {
            return {

            }
        }
        default: {
            return initState
        }
    }
}