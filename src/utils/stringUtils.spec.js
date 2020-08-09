import { camelToDashCase, isCamelCaseValid } from "./stringUtils";

describe('#camelToDashCase', () => {
  it('should transform a UpperCamelCase to dash-case', () => {
    // Arrange
    const testString = 'ProjectTestName';
    const expectedResult = 'project-test-name';

    // Act
    const result = camelToDashCase(testString);

    // Assert
    expect(result).toBe(expectedResult);
  });
});

describe('#isCamelCaseValid', () => {
  it('should return true if string is valid UpperCamelCase', () => {
    // Arrange
    const testString = 'ProjectTestName';

    // Act
    const result = isCamelCaseValid(testString);

    // Assert
    expect(result).toBeTruthy();
  });

  it('should return false if string contains spaces', () => {
    // Arrange
    const testString = 'Project Test Name';

    // Act
    const result = isCamelCaseValid(testString);

    // Assert
    expect(result).toBeFalsy();
  });

  it('should return false if string starts with number', () => {
    // Arrange
    const testString = '6ProjectTestName';

    // Act
    const result = isCamelCaseValid(testString);

    // Assert
    expect(result).toBeFalsy();
  });

  it('should return false if string contains characters besides letters, numbers', () => {
    // Arrange
    const testString = 'Project#$%.Test-Name6';

    // Act
    const result = isCamelCaseValid(testString);

    // Assert
    expect(result).toBeFalsy();
  });

  it('should return false if string is empty', () => {
    // Arrange
    const testString = '';

    // Act
    const result = isCamelCaseValid(testString);

    // Assert
    expect(result).toBeFalsy();
  });
});
