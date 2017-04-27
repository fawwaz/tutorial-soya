import Segment from 'soya/lib/data/redux/Segment';
import Load from 'soya/lib/data/redux/Load';
import QueryResult from 'soya/lib/data/redux/QueryResult';
import update from 'react-addons-update';

const ID = 'todoSegment';

const INIT_ACTION_TYPE = `${ID}.init`;
const ADD_ACTION_TYPE = `${ID}.add`;

let nextTodoId = 0;

const ACTION_CREATOR = {
	init() {
		return {
			type : INIT_ACTION_TYPE
		}
	},
	add(text) {
    return {
      type : ADD_ACTION_TYPE,
      id : nextTodoId++,
      text : text,
      isCompleted : false
    }
  }
}

const REDUCER = function ( state, action ) {
	switch ( action.type ) {
		case INIT_ACTION_TYPE :
			state = update (
        state,
        {
          $set : {
            todos: [],
            filter_iscomplete : 'All'
          }
        }
      );
      break;
    case ADD_ACTION_TYPE :
      state = update(
        state,
        {
          todos: {
            $push : [{
              id : action.id,
              text : action.text,
              isCompleted : action.isCompleted
            }]
          }
        }
      );
      break;
	}
	return state;
}

export default class TodoSegment extends Segment {
  static id() {
    return ID;
  }

  static getServiceDependencies() {
    return [];
  }

  static getActionCreator() {
    return ACTION_CREATOR;
  }

  static getReducer() {
    return REDUCER;
  }

  static generateQueryId(query) {
  	return query;
  }

  static queryState(query, queryId, segmentState) {
    if(segmentState == null || segmentState[queryId] == null) {
      return QueryResult.notLoaded();
    }

    return QueryResult.loaded(segmentState[queryId]);
  }

  static createLoadFromQuery(query, queryId, segmentState, services) {
    return ACTION_CREATOR.init();
  }
}