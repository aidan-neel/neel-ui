import readline from "readline";
import fs from "fs";
import path from "path";
import fetch from "node-fetch";

const user = "aidan-neel";
const repo = "neel-ui-dev";
const branch = "main";

const eventTypesUrl = `https://raw.githubusercontent.com/${user}/${repo}/${branch}/app/src/lib/neel-ui/event-types.ts`;
const stateUrl = `https://raw.githubusercontent.com/${user}/${repo}/${branch}/app/src/lib/neel-ui/state.ts`;
const libraryCssUrl = `https://raw.githubusercontent.com/${user}/${repo}/${branch}/app/src/lib/neel-ui/library.css`;
const transitionUrl = `https://raw.githubusercontent.com/${user}/${repo}/${branch}/app/src/lib/neel-ui/transition.ts`;
const tailwindConfigUrl = `https://raw.githubusercontent.com/${user}/${repo}/${branch}/app/tailwind.config.cjs`;
const utilsTsUrl = `https://raw.githubusercontent.com/${user}/${repo}/${branch}/app/src/lib/neel-ui/utils.ts`;

async function init() {
	console.log("[*] Neel/UI [*]");
	console.log("Initializing the project...");

	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	rl.question(
		"Are you in your root SvelteKit folder? (y/n) ",
		async (answer) => {
			rl.question(
				"Are you sure you want to continue? This will overwrite your tailwind.config.cjs file. (y/n) ",
				async (answer) => {
					if (answer === "y") {
						const inRootFolder =
							answer.trim().toLowerCase() === "y";
						if (!inRootFolder) {
							console.log(
								"Please move the project to the root folder and try again."
							);
							rl.close();
							return;
						}

						console.log(
							"Great! You can proceed with the project setup."
						);

						// Creating the directory for neel-ui files
						const neelUiDir = path.join(
							process.cwd(),
							"src/lib/neel-ui"
						);
						fs.mkdirSync(neelUiDir, { recursive: true });
						console.log("neel-ui directory created successfully.");

						// Downloading and creating/updating files
						await createOrUpdateFileFromUrl(
							eventTypesUrl,
							"src/lib/neel-ui/event-types.ts"
						);
						await createOrUpdateFileFromUrl(
							stateUrl,
							"src/lib/neel-ui/state.ts"
						);
						await createOrUpdateFileFromUrl(
							utilsTsUrl,
							"src/lib/neel-ui/utils.ts"
						);
						await createOrUpdateFileFromUrl(
							libraryCssUrl,
							"src/lib/neel-ui/library.css"
						);
						await createOrUpdateFileFromUrl(
							transitionUrl,
							"src/lib/neel-ui/transition.ts"
						);
						await createOrUpdateFileFromUrl(
							tailwindConfigUrl,
							"tailwind.config.cjs"
						);

						// Add the dependencies to package.json
						await addDependencies();

						console.log("Project setup completed.");
						rl.close();
					}
					rl.close();
				}
			);
		}
	);
}

async function createOrUpdateFileFromUrl(url, filePath) {
	const res = await fetch(url);
	const data = await res.text();
	const fullPath = path.join(process.cwd(), filePath);
	fs.writeFileSync(fullPath, data);
	console.log(`${filePath} created/updated successfully.`);
}

async function addDependencies() {
	const packageJsonPath = path.join(process.cwd(), "package.json");
	if (!fs.existsSync(packageJsonPath)) {
		console.log(
			"package.json not found, make sure you are in the root folder of your project."
		);
		return;
	}

	const packageJsonContent = fs.readFileSync(packageJsonPath);
	const packageJson = JSON.parse(packageJsonContent);

	const dependenciesToAdd = {
		"tailwind-merge": "^2.2.1",
		"tailwind-variants": "^0.1.20",
		"fuse.js": "^7.0.0",
		"lucide-svelte": "^0.365.0",
		clsx: "^2.1.0",
		"@popperjs/core": "^2.11.8",
	};

	packageJson.dependencies = {
		...packageJson.dependencies,
		...dependenciesToAdd,
	};

	fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
	console.log("Dependencies added to package.json successfully.");
}
// Exporting the module if needed, or just call `init()` directly if this script is meant to be executed as a standalone script.
export default init;

// If directly executing, uncomment the following:
// init().catch(console.error);
