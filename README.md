  <p align="center">
  <p align="center">
    <picture>
    <source media="(prefers-color-scheme: dark)" srcset="src/assets/digger-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="src/assets/digger-light.svg">
    <img alt="digger logo" src="src/assets/digger-dark.svg" width="300px">
    <picture/>

  </p>
  </p>
  <h1 align="center"><b>digger</b></h1>
  <p align="center">
    Fast and lightweight GUI text search tool for multiple file types.
    <br />
    <br />
  </p>
  </p>

   <picture>
    <source media="(prefers-color-scheme: dark)" srcset="src/assets/ui-dark.webp">
    <source media="(prefers-color-scheme: light)" srcset="src/assets/ui-light.webp">
    <img alt="digger logo" src="src/assets/digger-dark.svg">
    <picture/>

## Installation

**Build from source**

1.  See [Tauri prequisites](https://tauri.app/v1/guides/getting-started/prerequisites)

2.  Clone the repo `git clone https://github.com/wt-7/tauri-mssql-dashboard`
3.  Install dependencies `pnpm i`
4.  Build `pnpm tauri build`
5.  Release binaries will be in `src-tauri/target/release/bundle`

**More options coming soon...**

## How fast?

_Unscientific testing_

For non-standard file types (e.g. docx), digger is around 2x faster than using ripgrep with a preprocessor.

For plain-text files, digger is about 1/2 as fast as ripgrep.

## Stack

Framework: [Tauri](https://github.com/tauri-apps/tauri)

Backend: [Rust](https://github.com/rust-lang/rust)

Frontend: [React](https://github.com/facebook/react) ([TypeScript](https://github.com/microsoft/TypeScript))

Styling: [Tailwind](https://github.com/tailwindlabs/tailwindcss) + [shadcn/ui](https://github.com/shadcn-ui/ui)
