import * as actions from '../sum.jsx';

describe('localSum tests', () => {
    it('should return sum', () => {
        expect(actions.sum(3, 8)).toEqual(11);
    });

    it('should call sum', () => {

        actions.sum = jest.fn();

        actions.localSum(3, 9);

        expect(actions.sum).toHaveBeenCalledWith(3, 9);
    });
});
