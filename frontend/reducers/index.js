import {combineReducers} from 'redux';
import images from './images';
import digest from './digest';
import tag from './tag';

export default combineReducers({
    images,
    digest,
    tag
});
