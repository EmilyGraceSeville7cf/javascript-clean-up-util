# clean-up

## Description

Tool to clean-up your drive via creating missing folders if necessary.

## Requirenments

- Google account
- [`V8 runtime`](https://developers.google.com/apps-script/guides/v8-runtime#enabling_the_v8_runtime)

## Config files

- `clean-up-config.json` in the Google Drive root foldder
  - Every config key is folder name to be created when there is no another folder in the current directory.
  - Every config value is "*" when there is no need to traverse folders any more.
  - Every config value is object that follows the same rules when it is needed to traverse folders down.

## Examples

`clean-up-config.json` example:

```json
{
    "mine": {
        "docs": "*",
        "sheets": "*",
        "slides": "*",
        "forms": "*",
        "pictures": "*",
        "audio": "*",
        "videos": "*",
        "other": "*"
    },
    "work": {
        "docs": "*",
        "sheets": "*",
        "slides": "*",
        "forms": "*",
        "pictures": "*",
        "audio": "*",
        "videos": "*",
        "other": "*"
    }
}
```

## Notes

Don't update `.clasp.json` in this repository but change `rootDir` in it after `clasp pull` to match your project directory.
