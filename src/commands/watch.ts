import { Command, flags } from '@oclif/command';
import { copySync, ensureDirSync, watch } from 'fs-extra';
import * as chalk from 'chalk';
import config from '../services/config';
import { cli } from 'cli-ux';

export default class Watch extends Command {
	static description = 'Watch for file changes and automatically copy the project into filestore/public directory';

	static flags = {
		help: flags.help({ char: 'h' }),
	};

	static args = [];

	async run() {
		const rootDirectory = process.cwd().split('/').reverse()[0];
		const filestorePath: string | undefined = await config.getLocalFileStorePath();

		if (!filestorePath) return this.error(chalk.red('You must add a filestore path first'));

		const projectPath = `${filestorePath}/${rootDirectory}`;

		this.copyProjectDir(projectPath);
		this.watchForChanges(projectPath);
	}

	protected copyProjectDir(projectPath: string) {
		cli.action.start(chalk.blue('Loading'));

		ensureDirSync(projectPath);

		copySync(process.cwd(), projectPath, {
			filter: (src) => {
				return !src.includes('node_module') && src.split('/').every((item) => item[0] !== '.');
			},
		});

		cli.action.stop(chalk.green('done'));
	}

	protected watchForChanges(projectPath: string) {
		this.log(chalk.blue('Listening for changes'));

		watch(
			'./',
			{
				recursive: true,
			},
			(event, filename) => {
				if (filename[0] !== '.') {
					copySync(filename, `${projectPath}/${filename}`);
					this.log(`${chalk.green('[Success]')} ${filename} updated`);
				}
			}
		);
	}
}
