import * as t from 'testim';
import { expect } from 'chai';

t.test("Typescript documentation's page redirects user to npm page", async () => {
    await t.go('https://www.typescriptlang.org/');
    await t.click('[id="top-menu"] [href="/download"]');
    await t.click('[href="https://www.npmjs.com/package/typescript"]');
    expect(await t.text('[title="typescript"]')).to.be.equal('typescript');
});
