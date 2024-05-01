import fs from 'fs/promises';
import path from 'path';
import fetch from 'node-fetch';

async function fetchDirectoryContents(user, repo, directoryPath) {
    const apiUrl = `https://api.github.com/repos/${user}/${repo}/contents/${directoryPath}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    if (!response.ok) {
        throw new Error(`GitHub API error: ${data.message}`);
    }
    return data;
}

async function downloadFile(url, outputPath) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to download file: ${response.statusText}`);
    }
    const buffer = await response.buffer();
    await fs.writeFile(outputPath, buffer);
}

async function downloadDirectory(user, repo, directoryPath, localDirectory) {
    const directoryContents = await fetchDirectoryContents(user, repo, directoryPath);
    for (const content of directoryContents) {
        const outputPath = path.join(localDirectory, content.name);
        if (content.type === 'file') {
            console.log(`Downloading ${content.name}...`);
            await downloadFile(content.download_url, outputPath);
            console.log(`${content.name} downloaded to ${outputPath}`);
        } else if (content.type === 'dir') {
            await fs.mkdir(outputPath, { recursive: true });
            await downloadDirectory(user, repo, content.path, outputPath);
        }
    }
}

async function add(args) {
    const componentName = args[1];
    const user = 'aidan-neel';
    const repo = 'neel-ui-dev';
    const baseLocalDirectory = path.join('src', 'lib', 'neel-ui', 'components');

    const essentialComponents = ['blur', 'popover', 'spinner'];
    if (componentName === '*') {
        await fs.mkdir(baseLocalDirectory, { recursive: true });
        for (const component of essentialComponents) {
            const localDirectory = path.join(baseLocalDirectory, component);
            const directoryPath = `components/${component}`;
            await fs.mkdir(localDirectory, { recursive: true });
            await downloadDirectory(user, repo, directoryPath, localDirectory);
        }
        const baseDirectoryPath = 'components';
        await downloadDirectory(user, repo, baseDirectoryPath, baseLocalDirectory);
    } else {
        const requestedComponents = [componentName, ...essentialComponents.filter(c => c !== componentName)];
        for (const component of requestedComponents) {
            const directoryPath = `components/${component}`;
            const localDirectory = path.join(baseLocalDirectory, component);
            await fs.mkdir(localDirectory, { recursive: true });
            await downloadDirectory(user, repo, directoryPath, localDirectory);
        }
    }

    console.log('All requested files have been downloaded successfully.');
}

export default add;
