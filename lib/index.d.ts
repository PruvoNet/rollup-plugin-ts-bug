/// <reference types="node" />
/// <reference types="yup" />
import { Readable, Writable } from "stream";
/**
 * The base context of the CLI.
 *
 * All Contexts have to extend it.
 */
type BaseContext = {
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
declare module "yup" {
    interface Schema<T> {
        atMostOneOf(keys: string[]): this;
    }
}
export { BaseContext };
