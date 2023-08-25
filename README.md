
# Binary Bot


## Pre-installation

Ensure that your environment contains the following packages.

```
 - node >= 12.18.0
 - npm >= 6.14.4
 - git (for contribution)
```

## Getting Started

Recommended extensions to start contributing to the project:

```
 - Prettier
 - ESLint
```

You can simply search for these extensions on VS Code and install them to start using.

**Note**: `node -v` and `sudo node -v` should be the same version.



## FAQ

### <a name='q1'> 1. Issue with installing packages</a>

If you couldnt install binary bot with a different node version, try cleaning npm cache.

-   To clear a cache in npm, we need to run the `npm cache clean --force` command in our terminal.
-   Delete cache directory. The default cache directory is ~/.npm on Posix (mac or linux), or %AppData%/npm-cache on Windows.
-   Run `rm -rf ~/.npm`
-   Run `npm install`

### <a name='q2'> 2. Getting Permission Denied Error on localhost</a>

Try `sudo npm start`instead of `npm start`

### <a name='q3'>3. Cannot access the site</a>

Make sure to use HTTP instead of HTTPS: https://localbot.binary.sx -> http://localbot.binary.sx
