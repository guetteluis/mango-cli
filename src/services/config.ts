import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import { readFileSync } from 'fs';

const configFile = path.join(os.homedir(), '.mango-cli', 'config.json');

interface ConfigData {
	localFilestorePath?: string;
}

class Config {
	protected data: ConfigData = {
		localFilestorePath: undefined,
	};

	addLocalFileStore(path: string) {
		this.readConfigData();

		this.data.localFilestorePath = path;

		this.saveFile();
	}

	getLocalFileStorePath(): string | undefined {
		this.readConfigData();

		return this.data.localFilestorePath;
	}

	readConfigData() {
		if (!this.fileExists()) {
			this.createFile();
			this.saveFile();
		}

		const data = readFileSync(configFile, 'utf-8');
		this.data = JSON.parse(data);
	}

	protected saveFile() {
		if (!this.fileExists()) this.createFile();

		const data = JSON.stringify(this.data);

		fs.writeFileSync(configFile, data, { encoding: 'utf-8' });
	}

	protected createFile() {
		fs.mkdirSync(path.dirname(configFile));
	}

	protected fileExists(): boolean {
		return fs.existsSync(path.dirname(configFile));
	}
}

const config = new Config();

export default config;
