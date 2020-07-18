import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import * as util from 'util';

const configFile = path.join(os.homedir(), '.mango-cli', 'config.json');
const readFile = util.promisify(fs.readFile);

interface ConfigData {
	localFilestorePath?: string;
}

class Config {
	protected data: ConfigData = {
		localFilestorePath: undefined,
	};

	async addLocalFileStore(path: string) {
		await this.readConfigData();

		this.data.localFilestorePath = path;

		this.saveFile();
	}

	async readConfigData() {
		if (!this.fileExists()) {
			this.createFile();
			this.saveFile();
		}

		try {
			const data = await readFile(configFile, 'utf-8');
			this.data = JSON.parse(data);
		} catch (e) {
			throw new Error(e);
		}
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
