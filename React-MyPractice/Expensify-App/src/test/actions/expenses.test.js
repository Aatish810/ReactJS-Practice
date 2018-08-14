import {addExpense, removeExpense, editExpense} from '../../actions/expenses';

test('should setup remove expense object' ,() => {
    const action = removeExpense({id: '123abd'});
    expect(action).toEqual({
        id: '123abd',
        type: 'REMOVE_EXPENSE'
    })
})

test('sholud setup edit expense object', () => {
    const action = editExpense('123abc', {note: 'New Note'})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {note: 'New Note'}
    })
})

test('should add expense with provider value', ()=> {
    const action = addExpense({
        description: 'Description text',
        note: 'New Expense',
        amount: 200,
        createdAt: 3000
      })
      expect(action).toEqual({
          type: 'ADD_EXPENSE',
          expense : {
            description: 'Description text',
            note: 'New Expense',
            amount: 200,
            createdAt: 3000,
            id: expect.any(String)
          }
      })
})

test('should add expense with default value', ()=> {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense : {
          description: '',
          note: '',
          amount: 0,
          createdAt: 0,
          id: expect.any(String)
        }
    })
})