/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const modules: Map<string, Map<string, string>> = new Map();

// EVERYTHING BELOW IS AUTOGENERATED. SEE SCRIPTS FOLDER FOR UPDATE SCRIPTS
modules.set(
  'rome',
  new Map(
    [
      [
        'index.ts',
        "/**\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nexport {TestHelper, test, testOptions} from './test';\n",
      ],
      [
        'package.json',
        '{\n  "name": "@romejs-runtime/rome",\n  "type": "module",\n  "private": true,\n  "main": "index.ts",\n  "version": "0.0.0"\n}\n',
      ],
      [
        'test.ts',
        "/**\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nexport type AsyncFunc = () => undefined | Promise<void>;\n\nexport type SyncThrower = () => void;\n\nexport type ExpectedError = undefined | string | RegExp | Function;\n\nexport interface TestHelper {\n  // TODO this should be DiagnosticAdviceItem\n  addToAdvice(item: unknown): void;\n  clearAdvice(): void;\n  onTeardown(callback: AsyncFunc): void;\n  clearTimeout(): void;\n  extendTimeout(time: number): void;\n  setTimeout(time: number): void;\n  checkTimeout(): void;\n  truthy(value: unknown, message?: string): void;\n  falsy(value: unknown, message?: string): void;\n  true(value: unknown, message?: string): void;\n  false(value: unknown, message?: string): void;\n  is(received: unknown, expected: unknown, message?: string): void;\n  not(received: unknown, expected: unknown, message?: string): void;\n  looksLike(received: unknown, expected: unknown, message?: string): void;\n  notLooksLike(received: unknown, expected: unknown, message?: string): void;\n  throws(thrower: SyncThrower, expected?: ExpectedError, message?: string): void;\n  throwsAsync(thrower: AsyncFunc, expected?: ExpectedError, message?: string): Promise<\n    void\n  >;\n  notThrows(nonThrower: SyncThrower, message?: string): void;\n  notThrowsAsync(nonThrower: AsyncFunc, message?: string): Promise<void>;\n  regex(contents: string, regex: RegExp, message?: string): void;\n  notRegex(contents: string, regex: RegExp, message?: string): void;\n  snapshot(expected: unknown, message?: string): string;\n  snapshotNamed(name: string, expected: unknown, message?: string): string;\n  getSnapshot(snapshotName: string): unknown;\n}\n\nexport type TestName = string | Array<string>;\n\ndeclare const __ROME__TEST_OPTIONS__: GlobalTestOptions;\n\nexport type GlobalTestOptions = undefined | {\n  dirname?: string;\n  register?: (err: Error, opts: TestOptions, callback?: TestCallback) => void;\n};\n\ntype NamelessTestOptions = {\n  timeout?: number;\n  only?: boolean;\n};\n\nexport type TestCallback = (t: TestHelper) => void | undefined | Promise<void>;\n\nexport type TestOptions = NamelessTestOptions & {name: TestName};\n\ntype TestArg = TestName | NamelessTestOptions | TestCallback | undefined;\n\nexport const testOptions: NonNullable<GlobalTestOptions> = __ROME__TEST_OPTIONS__ ===\n  undefined ? {} : __ROME__TEST_OPTIONS__;\n\nfunction registerTest(\n  callsiteError: Error,\n  opts: TestOptions,\n  callback: undefined | TestCallback,\n) {\n  const register = testOptions.register;\n\n  if (typeof register !== 'function') {\n    throw new Error('Test harness does not exist');\n  }\n\n  register(callsiteError, opts, callback);\n}\n\nfunction isOptionsObject(arg: TestArg): arg is NamelessTestOptions {\n  return typeof arg === 'object' && arg != null && !Array.isArray(arg);\n}\n\nfunction splitArgs(args: TestRegisterFunctionArgs): {\n  options: TestOptions;\n  callback: undefined | TestCallback;\n} {\n  const name: TestName = args[0];\n  if (typeof name !== 'string' && !Array.isArray(name)) {\n    throw new Error('Expected test name to be a string or an array of strings');\n  }\n  args.shift();\n\n  let foundOptions;\n  let options: NamelessTestOptions = {};\n  let callback;\n\n  // Try callback which will always be at the end\n  const callbackOrOpts = args.pop();\n  if (typeof callbackOrOpts === 'function' || callbackOrOpts === undefined) {\n    callback = callbackOrOpts;\n  } else if (isOptionsObject(callbackOrOpts)) {\n    options = callbackOrOpts;\n    foundOptions = true;\n  } else {\n    throw new Error('Expected to find callback or options at the end');\n  }\n\n  // Try options which should be in the middle position\n  if (!foundOptions && args.length > 0) {\n    const maybeOptions = args.pop();\n    if (isOptionsObject(maybeOptions)) {\n      options = maybeOptions;\n    } else {\n      throw new Error('Expected to find test options');\n    }\n  }\n\n  if (args.length > 0) {\n    throw new Error('Expected to have exhausted test register arguments');\n  }\n\n  return {\n    options: {\n      ...options,\n      name,\n    },\n    callback,\n  };\n}\n\ntype TestRegisterFunctionArgs = [TestName] | [TestName, TestCallback] | [\n  TestName,\n  NamelessTestOptions,\n  TestCallback\n];\n\ntype TestRegisterFunction = (...args: TestRegisterFunctionArgs) => void;\n\nexport const test: {\n  (...args: TestRegisterFunctionArgs): void;\n  skip: TestRegisterFunction;\n  only: TestRegisterFunction;\n} = function(...args: TestRegisterFunctionArgs) {\n  const {options, callback} = splitArgs(args);\n  registerTest(new Error(), options, callback);\n};\n\ntest.skip = function(...args: TestRegisterFunctionArgs) {\n  const {options} = splitArgs(args);\n  registerTest(new Error(), options, undefined);\n};\n\ntest.only = function(...args: TestRegisterFunctionArgs) {\n  const {options, callback} = splitArgs(args);\n  registerTest(new Error(), {\n    ...options,\n    only: true,\n  }, callback);\n};\n",
      ],
    ],
  ),
);
