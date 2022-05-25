import * as t from 'testim';
import { expect } from 'chai';

t.test("Typescript documentation's page redirects user to npm page", async () => {
    await t.go('https://www.typescriptlang.org/');
    await t.click('[id="top-menu"] [href="/download"]');
    await t.click('[href="https://www.npmjs.com/package/typescript"]');
    expect(await t.text('[title="typescript"]')).to.be.equal('typescript');
});

t.test("Typescript documentation's page search tool redirects user to valid page", async() => {
    await t.go('https://www.typescriptlang.org/');
    await t.type('[id="search-box-top"]', 'generics');
    await t.click('[class="algolia-docsearch-suggestion--highlight"]');
    expect(await t.text('[id="handbook-content"] h2')).to.equal('Generics');
});

t.test("Typescript documentation's page allow user to run playground tool", async () => {
    await t.go('https://www.typescriptlang.org/');
    await t.click('[href="/play"]');
    await t.click('[id="run-button"]');
    expect(await t.text('[id="log"]')).contains('"Hello World"');
});
