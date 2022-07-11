const core = require("@actions/core");
const github = require("@actions/github");
const recursive = require("recursive-readdir");

const content = core.getInput('root_dir', { default: ''});

(
    async () => {
        try {
            core.notice("Action!");
            await recursive(content, ['!*.php*']).then(
                files => {
                    for(i = 0; i < files.length; i+=1) {
                        core.info(`file ${files[i]} found`);
                    }
                }
            );
        } catch (error) {
            core.setFailed(error.message);
        }
    }
)();