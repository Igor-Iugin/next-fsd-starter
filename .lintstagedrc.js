const path = require('path')

const buildEslintCommand = files =>
	`next lint --fix --file ${files.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`


module.exports = {
	// Lint TS files
	'./src/**/*.(ts|tsx)': files => [
		`yarn eslint --fix ${files.join(' ')}`,
		// Type check TypeScript files
		'yarn tsc --noEmit',
		// Next.js lint files
		buildEslintCommand(files)
	],

	'./src/**/*.css': () => [
		'postcss --replace',
		'stylelint'
	]
}
