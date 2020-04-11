import { watchGetListData } from '../page/Home/store/saga'

export default function *rootSaga () {
    yield watchGetListData();
}