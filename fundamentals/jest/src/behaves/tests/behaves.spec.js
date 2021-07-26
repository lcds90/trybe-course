const service = require('../index');
jest.mock('../index');

describe('behaves test', () => {
  it('should return `true` when number is even', () => {
    service.divisivelPorDois.mockImplementation((a) => a % 2 === 0);
    service.divisivelPorDois(10);
    expect(service.divisivelPorDois(10)).toBe(true); // Como garantimos que o número retornado será par?
  });

  /*  it('should check if is called and validate result', () => {
    /* NOTE testando somente se foi chamada
    randomRgbColor = jest.fn();
    expect(randomRgbColor).toHaveBeenCalled();
    

    // NOTE testando se a função foi chamada e seu retorno
     service.randomRgbColor = jest
      .mockReturnValue('rgb(255, 255, 255)')
      .mockReturnValue('second call'); 
     randomRgbColor(); // NOTE Observação que neste caso necessita verificar invocar-la antes do teste.
    expect(service.randomRgbColor).toHaveBeenCalled();
    expect(service.randomRgbColor()).toBe('second call');
    expect(service.randomRgbColor).toHaveBeenCalledTimes(2); 
  }); */

  it('should return correct results, sum', () => {
    service.somar.mockImplementation((a, b) => a + b);
    service.somar(1, 2);
    expect(service.somar).toHaveBeenCalled();
    expect(service.somar).toHaveBeenCalledTimes(1);
    expect(service.somar).toHaveBeenCalledWith(1, 2);
    expect(service.somar(1, 2)).toBe(3);
  });
});
