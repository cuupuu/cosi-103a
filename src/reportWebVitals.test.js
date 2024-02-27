import reportWebVitals from './reportWebVitals';

describe('reportWebVitals', () => {
    it('should call onPerfEntry with performance entry', () => {
        const onPerfEntry = jest.fn();
        reportWebVitals(onPerfEntry);
        expect(onPerfEntry).toHaveBeenCalled();
    });

    it('should not call onPerfEntry if it is not provided', () => {
        const onPerfEntry = jest.fn();
        reportWebVitals();
        expect(onPerfEntry).not.toHaveBeenCalled();
    });
});
