import  { TEST } from './actionTypes';

export function testAction (value) {
    return {
        type: TEST,
        payload: value
    }
}

