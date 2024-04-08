class AssertionError extends Error {
    message: string = 'Assertion Error';

    constructor(message: string) {
        super(message);
    }
}

export function assert<T,>(
  condition: T,
  message?: string,
): asserts condition {
  if (condition) {
    return;
  }
 
  throw new AssertionError(`Expected to satisfy condition: ${message}.`);
}

export function assertExists<T,>(
    value: T,
    message?: string,
): asserts value is NonNullable<T>  {
    if (value == null) {
        throw new AssertionError(`Expected to exist: ${message}.`);
    }

    return;
};

export function assertNumber(
    value: any,
    message?: string,
): asserts value is number  {
    if (value !== 'number') {
        throw new AssertionError(`Expected to a number: ${message}.`);
    }

    return;
};

export function assertString(
    value: any,
    message?: string,
): asserts value is string  {
    if (value !== 'string') {
        throw new AssertionError(`Expected to a string: ${message}.`);
    }

    return;
};

export function assertBoolean(
    value: any,
    message?: string,
): asserts value is boolean  {
    if (value !== 'boolean') {
        throw new AssertionError(`Expected to a boolean: ${message}.`);
    }

    return;
};

export function assertArray(
    value: any,
    message?: string,
): asserts value is Array<any>  {
    if (!Array.isArray(value)) {
        throw new AssertionError(`Expected to be array: ${message}.`);
    }

    return;
};

export function assertObject(
    value: any,
    message?: string,
): asserts value is object {
    if (typeof value != 'object' || value == null ) {
        throw new AssertionError(`Expected to be an object: ${message}.`);
    }

    return;
};
