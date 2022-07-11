const core = require("@actions/core");
const github = require("@actions/github");
const recursive = require("recursive-readdir");

const content = core.getInput('root_dir', { default: ''});

(
    async () => {
        try {
            await recursive(content, ['!*.php*']).then(
                files => {
                    for(i = 0; i < files.length; i+=1) {
                        core.setFailed(`${files[i]} that contains PHP code has been found. Please keep away from PHP code as it is harmful to your mental health`);
                    }
                }
            );
        } catch (error) {
            core.setFailed(error.message);
        }
    }
)();