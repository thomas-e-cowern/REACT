import {
    addExpense,
    editExpense,
    removeExpense
} from '../../actions/expenses';

test('Should set up removeExpense action object', () => {
    const action = removeExpense({
        id: '123abc'
    });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('Should set up editExpense action object', () => {
    const action = editExpense('123abc', {
        note: 'added a note'
    });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'added a note'
        }
    });
});

test('Shoule set up add expense action object with user values', () => {
    const expenseData = {
        description: 'Test',
        amount: 109500,
        createdAt: 1000,
        note: 'This is a test case addExpense'
    };
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('Shoule set up add expense action object with default values', () => {
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    });
});
