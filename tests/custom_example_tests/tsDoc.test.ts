import {test} from 'testim';
import { expect } from 'chai';
import {TsDocPage} from "../pageobject/tsDoc.page";
const tsDoc = new TsDocPage();

test("Typescript documentation's page redirects user to npm page", async () => {
    await tsDoc.open();
    await tsDoc.clickDownloads();
    await tsDoc.clickNpmLink();
    expect(await tsDoc.getNpmPageTitle()).to.be.equal('typescript');
});

test("Typescript documentation's page search tool redirects user to valid page", async () => {
    await tsDoc.open();
    await tsDoc.searchViaSearchTool('Generics');
    expect(await tsDoc.getDocsPageTitle()).to.be.equal('Generics');
});

test("Typescript documentation's page allow user to run playground tool", async () => {
    await tsDoc.open();
    await tsDoc.clickPlayground();

    await tsDoc.waitForPlaygroundPageLoaded();
    await tsDoc.runPlayground();
    expect(await tsDoc.getPlaygroundLog()).to.contains('"Hello World"');
});
