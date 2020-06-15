import {Readable, Writable} from 'stream';
import * as yup from 'yup';

/**
 * The base context of the CLI.
 *
 * All Contexts have to extend it.
 */
export type BaseContext = {
    /**
     * The input stream of the CLI.
     *
     * @default
     * process.stdin
     */
    stdin: Readable;

    /**
     * The output stream of the CLI.
     *
     * @default
     * process.stdout
     */
    stdout: Writable;

    /**
     * The error stream of the CLI.
     *
     * @default
     * process.stderr
     */
    stderr: Writable;
};

declare module 'yup' {
    interface Schema<T> {
        atMostOneOf(keys: string[]): this;
    }
}

yup.addMethod(yup.object, `atMostOneOf`, function (this: yup.ObjectSchema<object>, list: string[]) {
    return this.test({
        name: `atMostOneOf`,
        message: `\${path} must only have at most one of these keys: \${keys}`,
        params: {keys: list.join(`, `)},
        test: (value: any) => value == null || list.filter((f: any) => !!value[f]).length <= 1,
    });
});

export const x = (): BaseContext => {
    return {} as any;
}
