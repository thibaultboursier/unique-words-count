const SUT = require('./index');

test('It should return 3 unique words', () => {
    // Given
    const text = 'Hello my dear';

    // When
    const uniqueWords = SUT(text);

    // Then
    expect(uniqueWords).toBe(3);
});

test('It should return 4 unique words in spite of the comma and the points of suspension', () => {
    // Given
    const text = 'I love swimming, swimming and swimming...';

    // When
    const uniqueWords = SUT(text);

    // Then
    expect(uniqueWords).toBe(4);
});

test('It should return 4 unique words in spite of the question mark', () => {
    // Given
    const text = 'Do you think that my house is bigger than your house?';

    // When
    const uniqueWords = SUT(text);

    // Then
    expect(uniqueWords).toBe(10);
});
