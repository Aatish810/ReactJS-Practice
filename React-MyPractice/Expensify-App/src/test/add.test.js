const add = (a, b) => (a+b);

test('should add two numbers', () => {
    const result = add(4, 7)
    expect(result).toBe(11);
})

const generateGreeting = (name) => `Hello ${name}`

test('should generate greeting', () => {
    const result = generateGreeting('Aatish')
    expect(result).toBe('Hello Aatish')
})