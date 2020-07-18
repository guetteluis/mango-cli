import { Command, flags } from '@oclif/command';
import config from '../../services/config';
import * as chalk from 'chalk';

export default class LocalFilestore extends Command {
	static description = 'Define local filestore directory location for testing';

	static examples = [
		`$ mango config:local-filestore /mango-for-testing/filestore/public
Local filestore location added
        `,
	];

	static flags = {
		help: flags.help({ char: 'h' }),
	};

	static args = [
		{
			name: 'path',
			required: true,
			description: 'Filestore directory path',
		},
	];

	async run() {
		const { args } = this.parse(LocalFilestore);

		config.addLocalFileStore(args.path);

		this.log(`${chalk.green('[Success]')} Added a local filestore directory path`);
	}
}
