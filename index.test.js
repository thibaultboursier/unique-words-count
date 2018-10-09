const SUT = require('./index');

test('It should return 3 unique words count', () => {
    // Given
    const text = 'Hello my dear';

    // When
    const uniqueWordsCount = SUT(text);

    // Then
    expect(uniqueWordsCount).toBe(3);
});

test('It should return 4 unique words count in spite of the comma and the points of suspension', () => {
    // Given
    const text = 'I love swimming, swimming and swimming...';

    // When
    const uniqueWordsCount = SUT(text);

    // Then
    expect(uniqueWordsCount).toBe(4);
});

test('It should return 4 unique words count in spite of the question mark', () => {
    // Given
    const text = 'Do you think that my house is bigger than your house?';

    // When
    const uniqueWordsCount = SUT(text);

    // Then
    expect(uniqueWordsCount).toBe(10);
});
