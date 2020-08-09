import arg from 'arg';
import inquirer from 'inquirer';
import { createProject } from "./main";
import { camelToDashCase } from "./utils/stringUtils";

function parseArgumentsIntoOptions(rawArgs) {
    const args = arg(
        {
            '--git': Boolean,
            '--yes': Boolean,
            '-g': '--git',
            '-y': '--yes'
        },
        {
            argv: rawArgs.slice(2),
        }
    );
    return {
        skipPrompts: args['--yes'] || false,
        git: args['--git'] || true,
        projectName: args._[0] || undefined,
    };
}

async function promptForMissingOptions(options) {
    const defaultProjectName = 'GhastAPI';
    if (options.skipPrompts) {
        return {
            ...options,
            targetDirectory: camelToDashCase(options.projectName),
            projectName: options.projectName || defaultProjectName,
        };
    }

    const questions = [];
    if (!options.projectName) {
        questions.push({
            type: 'input',
            name: 'projectName',
            message: 'Please name your project',
            default: defaultProjectName,
        });
    }

    if (!options.git) {
        questions.push({
            type: 'confirm',
            name: 'git',
            message: 'Initialize a git repository?',
            default: false,
        });
    }

    const answers = await inquirer.prompt(questions);
    return {
        ...options,
        targetDirectory: camelToDashCase(options.projectName || answers.projectName),
        git: options.git || answers.git,
    };
}

export async function cli(args) {
    let options = parseArgumentsIntoOptions(args);
    options = await promptForMissingOptions(options);
    await createProject(options);
}
