
/**
 * @roxi/routify 2.7.3
 * File generated Tue Dec 01 2020 08:51:03 GMT-0500 (Eastern Standard Time)
 */

export const __version = "2.7.3"
export const __timestamp = "2020-12-01T13:51:03.378Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "name": "_folder",
  "filepath": "/_folder.svelte",
  "root": true,
  "ownMeta": {},
  "absolutePath": "/Users/brianstarke/src/aoc-2020/src/pages/_folder.svelte",
  "children": [
    {
      "isFile": true,
      "isDir": false,
      "file": "index.svelte",
      "filepath": "/index.svelte",
      "name": "index",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/Users/brianstarke/src/aoc-2020/src/pages/index.svelte",
      "importPath": "../src/pages/index.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": true,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/index",
      "id": "_index",
      "component": () => import('../src/pages/index.svelte').then(m => m.default)
    },
    {
      "isFile": false,
      "isDir": true,
      "file": "one",
      "filepath": "/one",
      "name": "one",
      "ext": "",
      "badExt": false,
      "absolutePath": "/Users/brianstarke/src/aoc-2020/src/pages/one",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "index.svelte",
          "filepath": "/one/index.svelte",
          "name": "index",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/Users/brianstarke/src/aoc-2020/src/pages/one/index.svelte",
          "importPath": "../src/pages/one/index.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": true,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/one/index",
          "id": "_one_index",
          "component": () => import('../src/pages/one/index.svelte').then(m => m.default)
        }
      ],
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/one"
    },
    {
      "isFile": false,
      "isDir": true,
      "file": "two",
      "filepath": "/two",
      "name": "two",
      "ext": "",
      "badExt": false,
      "absolutePath": "/Users/brianstarke/src/aoc-2020/src/pages/two",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "index.svelte",
          "filepath": "/two/index.svelte",
          "name": "index",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/Users/brianstarke/src/aoc-2020/src/pages/two/index.svelte",
          "importPath": "../src/pages/two/index.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": true,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/two/index",
          "id": "_two_index",
          "component": () => import('../src/pages/two/index.svelte').then(m => m.default)
        }
      ],
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/two"
    }
  ],
  "isLayout": true,
  "isReset": false,
  "isIndex": false,
  "isFallback": false,
  "isPage": false,
  "isFile": true,
  "file": "_folder.svelte",
  "ext": "svelte",
  "badExt": false,
  "importPath": "../src/pages/_folder.svelte",
  "meta": {
    "recursive": true,
    "preload": false,
    "prerender": true
  },
  "path": "/",
  "id": "__folder",
  "component": () => import('../src/pages/_folder.svelte').then(m => m.default)
}


export const {tree, routes} = buildClientTree(_tree)

