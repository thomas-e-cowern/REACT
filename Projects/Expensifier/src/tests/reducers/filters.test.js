import filterReducer from '../../reducers/filters';
import moment from 'moment';

test('should set up default filter values', () => {
    const state = filterReducer(undefined, {
        type: '@@INIT'
    });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filterReducer(undefined, {
        type: 'SORT_BY_AMOUNT'
    })
    expect(state.sortBy).toBe('amount');
});


test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = {
        type: 'SORT_BY_DATE'
    };
    const state = filterReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});


test('should set text filter', () => {
    const text = 'this is the test string';
    const action = {
        type: 'SET_TEXT_FILTER',
        text
    }
    const state = filterReducer(undefined, action)
    expect(state.text).toBe(text);
});

test('should set start date filter', () => {
   const startDate = moment();
    const action = {
        type: 'SET_START_DATE',
        startDate
    };
    const state = filterReducer(undefined, action);
   expect(state.startDate).toEqual(startDate);
});

test('should set end date filter', () => {
   const endDate = moment();
    const action = {
        type: 'SET_END_DATE',
        endDate
    };
    const state = filterReducer(undefined, action);
   expect(state.endDate).toEqual(endDate);
});
