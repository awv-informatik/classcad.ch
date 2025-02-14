> node.js >= 18 is required for the usage of the node.js based instance manager. Please make sure it is installed on your local system.

```sh
# The installation takes place in the current working directory!
cmd /c curl %SCRIPT_URL% -o "install.cmd"
cmd /c install.cmd
cmd /c del install.cmd

# Get a ClassCAD Key from the member area https://classcad.ch/user and save it to .classcad.appkey
notepad .classcad.appkey

# Start the node.js based ClassCAD Instance Manager
./classcad-instmgr.cmd
```
