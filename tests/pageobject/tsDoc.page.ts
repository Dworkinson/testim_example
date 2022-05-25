import {go, type, click, text, waitForElement} from "testim";

export class TsDocPage {
    async open(): Promise<void> {
        await go('https://www.typescriptlang.org/');
    }

    async clickDownloads(): Promise<void> {
        await click('[id="top-menu"] [href="/download"]');
    }

    async clickNpmLink(): Promise<void> {
        await click('[href="https://www.npmjs.com/package/typescript"]');
    }

    async getNpmPageTitle(): Promise<string> {
        return text('[title="typescript"]')
    }

    async searchViaSearchTool(searchForItem: string): Promise<void> {
        await type('[id="search-box-top"]', searchForItem);
        await click('[class="algolia-docsearch-suggestion--highlight"]');
    }

    async getDocsPageTitle(): Promise<string> {
        return text('[id="handbook-content"] h2');
    }

    async clickPlayground(): Promise<void> {
        await click('[href="/play"]');
    }

    async runPlayground(): Promise<void> {
        await click('[id="run-button"]');
    }

    async getPlaygroundLog(): Promise<string> {
        return text('[id="log"]');
    }

    async waitForPlaygroundPageLoaded(): Promise<void> {
        await waitForElement('[id="run-button"]');
    }
}
