const sum = require('../index.js');

describe('Operations', () => {
  describe('Sum', () => {
    it('should sums two values', () => {
      expect(sum(2, 3)).toBe(5);
      expect(sum(4, 5)).toBe(9);
    });

    it('should throws on passed with strings', () => {
      const passString = () => {
        sum('4', 5);
        sum('4', '5');
        sum(4, '5');
      };

      // Test that the error message says "valor Inválido" somewhere:
      expect(passString).toThrowError(/Valor/);
      expect(passString).toThrowError(/inválido/);

      // Test the exact error message
      expect(passString).toThrowError(
        /^Valor inválido, somente números são aceitos$/
      );
      expect(passString).toThrowError(
        new Error('Valor inválido, somente números são aceitos')
      );

      // Test that we get a Error
      expect(passString).toThrowError(Error);
    });

    it('should throws on passed with strings', () => {
      const passString = () => {
        sum('4', 5);
        sum('4', '5');
        sum(4, '5');
      };

      // Test that the error message says "valor Inválido" somewhere:
      expect(passString).toThrowError(/Valor/);
      expect(passString).toThrowError(/inválido/);

      // Test the exact error message
      expect(passString).toThrowError(
        /^Valor inválido, somente números são aceitos$/
      );
      expect(passString).toThrowError(
        new Error('Valor inválido, somente números são aceitos')
      );

      // Test that we get a Error
      expect(passString).toThrowError(Error);
    });
  });
});
